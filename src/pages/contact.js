import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

const Contact = () => {
  return (
    <Layout color="#777" title="Contact">
      <Head title="Contact" />
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Full name" id="name" required />
                  <label htmlFor="name" className="form__label">Full name</label>
                </div>
                <div className="form__group">
                  <input type="email" className="form__input" placeholder="Email address" id="email" required />
                  <label htmlFor="email" className="form__label">Email address</label>
                </div>
                <div className="form__group">
                  <textarea className="form__input" placeholder="Message" id="message" required />
                  <label htmlFor="message" className="form__label">Message</label>
                </div>
                <div className="form__group">
                  <button className="btn btn--green">Submit &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
    </Layout>
  )
}

export default Contact
