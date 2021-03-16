import React, { useState } from "react"
import { articles, images } from "../data/news"

const News = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(articles)
  // eslint-disable-next-line
  const [cards, setCards] = useState(images)

  return (
    <>
      <div className="news-title">
        <h2>Latest News</h2>
        <div className="header-underline"></div>
      </div>

      <section className="news-section" id="news">
        {items.map((item) => {
          const { id, image, title, desc, link } = item
          return (
            <article key={id} className="news-articles">
              <img src={image} alt={title} />
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
                <button>{link}</button>
              </div>
            </article>
          )
        })}
      </section>

      <section className="news-images" id="gallery">
        {cards.map((card) => {
          const { id, image } = card
          return (
            <article key={id}>
              <img src={image} alt="" />
            </article>
          )
        })}
      </section>
    </>
  )
}

export default News
