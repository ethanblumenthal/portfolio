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

      {/* <section class="section-stories">
        <div class="bg-video">
          <video class="bg-video__content" autoPlay muted loop>
            <source src="img/video.mp4" type="video/mp4" />
            <source src="img/video.webm" type="video/webm" />
          </video>
        </div>

        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img src="img/nat-8.jpg" alt="Person on a tour" class="story__img" />
              <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img src="img/nat-9.jpg" alt="Person on a tour" class="story__img" />
              <figcaption class="story__caption">Jack Wilson</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div class="u-center-text u-margin-top-huge">
          <a href="#" class="btn-text">Read all stories &rarr;</a>
        </div>
      </section> */}
    </Layout>
  )
}

export default Blog
