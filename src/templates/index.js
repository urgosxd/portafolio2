import React from "react"
import { Layout } from "../components"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
const Index = ({ data }) => {
  console.log(data)
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout post={false}>
      <Container className="tenedor" fluid={true}>
        <Row>
          {posts.map(({ node }) => (
            <Col className="box" lg={4}>
              <Link to={node.frontmatter.slug}>
                <img
                  src={node.frontmatter.featured.childImageSharp.fixed.src}
                />
                <h2>{node.frontmatter.titulo}</h2>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}
export default Index

export const pagueQuery = graphql`
  query INDEXQUERY {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            titulo
            featured {
              childImageSharp {
                fixed(quality: 100, width: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
