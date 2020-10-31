import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { Container, Row, Col } from "react-bootstrap"

const Post = ({ data, pageContext }) => {
  console.log(data)

  const html = data.markdownRemark.html
  return (
    <Layout post={true}>
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <section
              className="texto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
    }
  }
`
