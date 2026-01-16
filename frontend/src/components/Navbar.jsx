import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa6'
import { NavHashLink } from 'react-router-hash-link'

const navigate = [
  { link: "Home", to: "/#home" },
  { link: "About", to: "/#about" },
  { link: "Projects", to: "/#projects" },
  { link: "Contact", to: "/#contact" }
]

const Navbar = () => {
  const [theme, setTheme] = useState("light")

  const applyTheme = (t) => {
    document.documentElement.setAttribute("data-theme", t)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const systemTheme = prefersDark ? "dark" : "light"
      setTheme(systemTheme)
      applyTheme(systemTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className="navbar bg-transparent shadow-sm shadow-base-primary py-5 backdrop-blur-2xl">

        {/* START */}
        <div className="navbar-start">
          <a className="logo flex justify-center items-center gap-4 text-primary font-bols  space-x-4">
            <div className='w-13 h-13 rounded-full bg-white'></div>
            <h1 className='tracking-[1px] text-2xl'>Mahfuj</h1>
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex bg-base-100 rounded-2xl shadow-grey shadow-sm">
          <ul className="menu menu-horizontal px-1 space-x-8">
            {navigate.map((nav, index) => (
              <li key={index}>
                <NavHashLink
                  className="text-[17px] font-extrabold hover:text-primary hover:border-white cursor-pointer"
                  to={nav.to}
                >
                  {nav.link}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* END */}
        <div className="navbar-end flex items-center gap-3">

          {/* 🌙 THEME TOGGLE (DESKTOP ONLY) */}
          <div className='hidden lg:flex hover:bg-primary rounded-full w-8 h-8 justify-center items-center hover:text-white transition-all duration-300'>
            <button
              onClick={toggleTheme}
              className="text-xl hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FaSun className="text-content" />
              ) : (
                <FaMoon className="text-slate-700" />
              )}
            </button>
          </div>

          {/* 🍔 HAMBURGER (MOBILE ONLY — RIGHT SIDE) */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* NAV LINKS */}
              {navigate.map((nav, index) => (
                <li key={index}>
                  <NavHashLink to={nav.to}>{nav.link}</NavHashLink>
                </li>
              ))}

              {/* 🔥 THEME TOGGLE INSIDE MENU */}
              <li className="mt-2 border-t border-base-300 pt-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2"
                >
                  {theme === "dark" ? <FaSun /> : <FaMoon />}
                  <span>
                    {theme === "dark" ? "Light mode" : "Dark mode"}
                  </span>
                </button>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
