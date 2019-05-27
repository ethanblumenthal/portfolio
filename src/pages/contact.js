import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout color="#777" title="Contact">
      <section className="page-contact">
        <div className="row">
          <div className="contact">
            <div className="contact__form">
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
                  <button className="btn btn--blue">Submit &rarr;</button>
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
