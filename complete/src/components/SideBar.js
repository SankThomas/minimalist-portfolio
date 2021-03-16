import React, { useState } from "react"
import { sidebar } from "../data/sidebar"

const SideBar = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(sidebar)

  return (
    <>
      <ul className="sidebar">
        {items.map((item, index) => {
          return <li key={index}>{item.icon}</li>
        })}
      </ul>
    </>
  )
}

export default SideBar
