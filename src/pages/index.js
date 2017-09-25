import React from "react"
import Link from "gatsby-link"

export default () =>
  <div style={{ color: 'tomato' }}>
    <h1>Hello gatsby world!</h1>
    <p>What a world!</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <br />
    <Link to="/page-2/">Linkage</Link>
    <br />
    <Link to="/counter/">Counter</Link>
  </div>
