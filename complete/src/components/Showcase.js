import React from "react"
import showcaseImage from "../assets/showcase-3.jpeg"
import SideBar from "./SideBar"

const Showcase = () => {
  return (
    <>
      <section className="showcase" id="showcase">
        <div className="light-blue"></div>
        <div>
          <img src={showcaseImage} alt="" />
        </div>
        <div className="title">
          <h1>
            Georgina <br /> Alson
          </h1>
        </div>
        <SideBar />
      </section>
    </>
  )
}

export default Showcase
