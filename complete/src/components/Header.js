import React, { useState, useEffect } from "react"
import { FaBars, FaSearch } from "react-icons/fa"
import { navbar } from "../data/navbar"

const Header = () => {
  const [open, setOpen] = useState(false)
  // eslint-disable-next-line
  const [links, setLinks] = useState(navbar)
  // eslint-disable-next-line
  const [width, setWidth] = useState(1024)

  useEffect(() => {
    if (window.innerWidth >= width) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [width])

  return (
    <>
      <header className="header" id="header">
        <div>
          <nav className="navbar">
            <ul className="header-links">
              <button className="menu-icon" onClick={() => setOpen(!open)}>
                <FaBars />
              </button>
              {open && (
                <ul style={{ display: "flex" }}>
                  {links.map((link) => {
                    const { id, title, url } = link
                    return (
                      <li key={id}>
                        <a href={url}>{title}</a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </ul>
          </nav>
        </div>

        <div className="search-icon">
          <FaSearch />
        </div>
      </header>
    </>
  )
}

export default Header
