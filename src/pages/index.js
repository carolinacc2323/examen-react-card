import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import Card from "../components/Card/card"

const IndexPage = () => (
  <Layout>
    <h1>Este es la página de Inicio</h1>
    <Card/>
  </Layout>
)


export const Head = () => <Seo title="Inicio" />

export default IndexPage
