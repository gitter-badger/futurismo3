import React from 'react'

const ContactPage = () => (
  <section id="contact" className="main style2 special">
    <div className="container">
      <header className="major">
        <h2>楽しんでいただけましたか?</h2>
      </header>
      <p>
        もし私に興味がありましたら、下記から連絡をお願いします。<br />
        お仕事の依頼、ポートフォリオサイトやブログの感想、挨拶するだけでも、なんでもお待ちしています。
      </p>
      <p>
        Send email to address (
        <strong className="contact-content">
          <a href="mailto:tsunemichi.harada@gmail.com">
            tsunemichi.harada@gmail.com
          </a>)
        </strong>
        <br />
        or <br />
        Send DM to twitter (
        <strong className="contact-content">
          <a
            href="https://twitter.com/tsu_nera"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tsu_nera
          </a>
        </strong>)
      </p>
    </div>
  </section>
)

export default ContactPage
