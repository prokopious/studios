import { useState } from "react"

export default function Nav() {
  const [isActive, setisActive] = useState(false)

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            {/* <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Logo"
            width="112"
            height="28"
          /> */}
            <div id="hanover">
              <b>Hanover</b> Web Studios
            </div>
          </a>

          <a
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="/" className="navbar-item">
                Home
              </a>
              <a href="/portfolio" className="navbar-item">
                Portfolio
              </a>
              <a href="/about" className="navbar-item">
                About
              </a>
              <a href="/contact" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>{" "}
      <style jsx>{`
  .navbar {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.116);
    padding-top: 10px;
    padding-bottom: 10px;
  }

        #hanover {
          font-size: 20px;
      
        }
      `}</style>
    </div>
  )
}
