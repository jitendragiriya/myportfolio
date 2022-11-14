import React, { useEffect, useState, useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";

import Link from "next/link";
import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// import GlobalFilter from "../../utils/GloableFilter";
const AllProject = ({ datas }) => {
  const [project, setProject] = useState(datas.data);

  const deleteProject = async (id) => {
    const res = await fetch(`/api/admin/project/delete`, {
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    console.log(res);
  };
  const data = useMemo(() => [...project], [project]);
  const columns = useMemo(
    () =>
      project[0]
        ? Object.keys(project[0]).map((key) => {
            // modifiying the fields
            if (key === "techs") {
              return {
                Header: "delete",
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    <div className=" cursor-pointer w-full flex items-center justify-end px-2">
                      <Link
                        href={`/admin/project/update/${value[0].projectId}`}
                      >
                        <a className="text-xl text-black dark:text-white mr-2">
                          <AiFillEdit />
                        </a>
                      </Link>
                      <span className="text-xl">
                        <AiFillDelete
                          onClick={() => deleteProject(value[0].projectId)}
                        />
                      </span>
                    </div>
                  </>
                ),
              };
            }

            return { Header: key, accessor: key };
          })
        : [],
    [project]
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
    state,
  } = useTable({ columns, data }, useSortBy, usePagination);
  return (
    <div className="flex flex-col w-full overflow-x-auto relative max-w-full">
      <div className="text-center text-2xl w-full font-medium mb-4 relative overflow-x-auto">
        <h2>All Bookings</h2>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 p-1 bg-orange-500 text-white">
          <Link href="/admin/project/add">
            <a>
              <AiOutlinePlus />
            </a>
          </Link>
        </div>
      </div>

      <div className="w-full overflow-x-auto bg-white dark:bg-[#383838] max-w-full">
        {project && (
          <table {...getTableProps()} className="w-full relative border">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="border py-2 w-96 min-w-[200px] first:max-w-[50px] first:w-20  last:w-10 last:min-w-fit last:hidden"
                    >
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "▼  "
                          : "▲  "
                        : "▲  ▼ "}
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="border p-2 w-96 min-w-[200px] first:text-right first:w-20 last:justify-end items-center last:w-fit  whitespace-nowrap max-w-[210px] overflow-hidden"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <div className="global-react-table-footer">
          {pageOptions.length > 1 ? (
            <div className="global-react-table-pagination">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="btn-pagination"
              >
                {"prev"}
              </button>
              <button
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                className="btn-pagination"
              >
                {"1"}
              </button>
              <button className="btn-pagination">
                <BsThreeDots />
              </button>
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className="btn-pagination"
              >
                {pageCount - 1}
              </button>
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="btn-pagination"
              >
                {"next"}
              </button>
            </div>
          ) : (
            <div></div>
          )}
          <div className="how-Much-show-On-Page">
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[5, 10, 25, 50, 100].map((element) => (
                <option key={element} value={element}>
                  show {element}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
