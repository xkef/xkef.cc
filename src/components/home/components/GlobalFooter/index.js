import React, { PureComponent } from "react"
import {Link } from "antd"
import Texty from "rc-texty"
import TweenOne from "rc-tween-one"

import config from "../../../../config"

import "./index.scss"

export default class GlobalFooter extends PureComponent {
  static defaultProps = {
    className: 'footer',
  };

  render() {
    return (
      <div>
        <footer className="copyright">
      <Texty
        delay={1000}
        type="right"
        mode="smooth"
        component={TweenOne}
        componentProps={{
          animation: [
            { x: 130, type: "set" },
            { x: 100, delay: 500, duration: 450 },
            {
              ease: "easeOutQuart",
              duration: 4000,
              x: 0,
            },
            {
              letterSpacing: 0,
              delay: -300,
              scale: 0.9,
              ease: "easeInOutQuint",
              duration: 5000,
            },
            {
              scale: 1,
              width: "100%",
              delay: -300,
              duration: 1000,
              ease: "easeInOutQuint",
            },
          ],
        }}
      >
        {`wassup`}
      </Texty>
      {"Version "}
      <em className="version">0.0</em>
      2019-
    <em className="date">0</em>
      <em>xkef</em>
      <Texty delay={5000} type="swing" mode="smooth" className="texty-inline">

    </Texty>
      {/* <li to="https://reactjs.org" target="_blank" rel="noopener noreferrer nofollow"> */}
        React
    {/* </Link> */}
      <Texty delay={5000} type="scaleBig" mode="reverse" className="texty-inline">
        | Powered By Gatsby
    </Texty>

      </footer>
      </div>)
  }
}

