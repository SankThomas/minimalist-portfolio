import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="logo">
          <h2>Mitalent</h2>
          <p>Follow us on Social Media</p>
        </div>

        <div className="copyright">
          <p>© MITALENT, 2021. All Rights Reserved</p>
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
