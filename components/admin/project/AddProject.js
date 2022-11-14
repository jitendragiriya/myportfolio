import React, { useState, useEffect } from "react";

const AddProject = () => {
  const [inputs, setInputs] = useState({
    stack: "",
    title: "",
    description: "",
    tech: "",
  });

  const [techs, setTechs] = useState({ react: "react", nodejs: "nodejs" });

  const onchange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // const techsSet = (newTech) => {
  //   setTechs([...techs, newTech]);
  // };

  const { stack, title, description } = inputs;
  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      stack,
      title,
      description,
      techs,
    };

    const res = await fetch("/api/admin/project/new", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-2xl font-semibold text-center p-4">
        <h2>Add Project</h2>
      </div>
      <div className="w-full p-4 my-4">
        <form
          className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:border md:border-gray-300 md:p-4 lg:grid-cols-3 dark:border-[#484848]"
          onSubmit={formSubmit}
        >
          <div className="w-full">
            <input
              type="text"
              className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
              id="stack"
              name="stack"
              placeholder="Project stack"
              onChange={onchange}
              value={inputs.stack}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
              id="title"
              name="title"
              placeholder="Project Title"
              onChange={onchange}
              value={inputs.title}
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
              id="tech"
              name="tech"
              placeholder="Tech used"
              onChange={onchange}
              value={inputs.tech}
            />
          </div>

          <div className="w-full">
            <textarea
              className="w-full p-2 outline-none border md:border-gray-300 dark:border-[#484848] dark:bg-[#282828]"
              id="description"
              name="description"
              placeholder="Description"
              onChange={onchange}
              value={inputs.description}
            />
          </div>
          <button
            type="submit"
            className="h-10 bg-orange-500 text-white font-medium capitalize"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
