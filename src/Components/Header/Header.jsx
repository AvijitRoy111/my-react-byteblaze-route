import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handlerChangeTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <nav className="flex gap-1">
        <div className="navbar bg-base-100 px-10 shadow-lg">
          <div className="flex-0 md:flex-1">
            <a className="btn btn-ghost text-2xl font-bold gap-0 text-secondary">
              Byte<span className="text-primary">blaze</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ul className="menu flex menu-horizontal px-1 gap-4 md:gap-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary md:text-primary font-bold md:btn btn-ghost"
                    : "font-bold md:font-bold md:btn btn-ghost"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary md:text-primary font-bold md:btn btn-ghost"
                    : "font-bold md:font-bold md:btn btn-ghost"
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                 isActive
                    ? "text-primary md:text-primary font-bold md:btn btn-ghost"
                    : "font-bold md:font-bold md:btn btn-ghost"
                }
              >
                Bookmarks
              </NavLink>
            </ul>
            <div>
              <label className="grid cursor-pointer place-items-center">
                <input
                  onChange={handlerChangeTheme}
                  type="checkbox"
                  className="toggle theme-controller  col-span-2 col-start-1 row-start-1"
                />
                <svg
                  className="stroke-slate-500 fill-base-800 col-start-1 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="stroke-base-800 fill-base-800 col-start-2 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
