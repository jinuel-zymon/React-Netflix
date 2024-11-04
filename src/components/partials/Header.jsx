import { Moon, Settings, Sun } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, subtitle }) => {
  const [isDark, setIsDark] = React.useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));

  const handleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    function setThemeColor() {
      const body = document.querySelector("html");
      body.setAttribute("class", "");
      body.classList.add(theme);
      setTheme(localStorage.getItem("theme"));
    }

    setThemeColor();
  }, [theme]);

  return (
    <header className='p-4 bg-primary'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='mb-0'>{title}</h2>
          <small>{subtitle}</small>
        </div>
        <div className='flex gap-3 items-center'>
        <div
            className="flex items-center border border-line rounded-2xl p-1 leading-none w-[40px] cursor-pointer hover:border-accent transition-all bg-secondary"
            onClick={handleTheme}
          >
            <button
              className={` transition-all ${
                isDark ? "translate-x-4" : "translate-x-0"
              }`}
            >
              {isDark ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
          <Link to='/admin/settings'>
            <Settings />
          </Link>
          <div className='size-10 rounded-full text-white bg-accent grid place-content-center'>
            JR
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
