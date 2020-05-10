import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import MediaQuery from "react-responsive"

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#fff",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0 2.7em",
    fontSize: "1.15em",
    marginRight: `20px`,
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
}

class Mobilenav extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={styles}>
        <Link id="about" className="menu-item" to="/about">
          About
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          Contact
        </Link>
        <Link onClick={this.showSettings} className="menu-item--small" to="">
          Settings
        </Link>
      </Menu>
    )
  }
}

export default Mobilenav
