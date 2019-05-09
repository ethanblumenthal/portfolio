import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields:date, order:DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
