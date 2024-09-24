import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card/card"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Este es la página de Inicio</h1>
    <div className="container-card">
    {data.allDataJson.edges.map(({ node }) => {
          const image = getImage(node.image);
          return (
              <Card 
              title={node.title} 
              image={image}     
              description={node.description}
              link={node.link}
              ></Card>
          );
        })}
    </div>
  </Layout>
)

export const query = graphql`
  query  {
    allDataJson {
    edges {
      node {
        id
        link
        title
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: WEBP
              width: 300
              aspectRatio: 1.77
            )
          }
        }
        description
      }
    }
  }
}
`;

export const Head = () => <Seo title="Inicio" />

export default IndexPage
