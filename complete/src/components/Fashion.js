import React, { useState } from "react"
import { FaTwitter } from "react-icons/fa"
import { fashion } from "../data/fashion"

const Fashion = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(fashion)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: 80 }}>
        <h2>Fashion Covers</h2>
        <div className="header-underline"></div>
      </div>

      <section className="fashion" id="fashion">
        {items.map((item) => {
          const { id, title, desc, image } = item
          return (
            <article key={id} className="fashion-article">
              <p className="social-icon">
                <FaTwitter />
              </p>
              <img src={image} alt={title} />
              <div className="article-description">
                <h4>{title}</h4>
                <div className="header-underline"></div>
                <p>{desc}</p>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Fashion
