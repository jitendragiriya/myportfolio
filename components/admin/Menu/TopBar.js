import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "next-themes";

const TopBar = () => {
  const { theme, setTheme } = useTheme();
  const handleOnClick = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="sticky top-0 h-16 flex items-center justify-between pl-16 pr-4 md:px-8 border-b border-gray-300 z-50 w-full bg-white dark:bg-[#282828] dark:border-[#484848]">
      this is the amin
      <div className="cursor-pointer" onClick={handleOnClick}>
        <Brightness4Icon className="text-black dark:text-white" />
      </div>
    </div>
  );
};

export default TopBar;
