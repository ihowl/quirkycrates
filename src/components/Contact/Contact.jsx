import React, { useContext, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Interested?" />
        <h2 className="about-subtitle">
          For our pilot project, we will only be offering Quirky Collections to households in
          Ontario, Canada
        </h2>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> */}
            <form method="post" action="https://getform.io/f/bf7c1378-635e-43de-ab9a-9b57ad65c87e">
              <label className="contact-wrapper-label">
                <input
                  type="email"
                  name="email"
                  className="contact-wrapper-input"
                  placeholder="email"
                />
              </label>
              <br />
              <label className="contact-wrapper-label">
                <input
                  type="text"
                  name="postcode"
                  className="contact-wrapper-input"
                  placeholder="postal code"
                />
              </label>
              <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
              <br />
              <button type="submit" className="cta-btn cta-btn--resume">
                {btn || "Let's Talk"}
              </button>
            </form>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
            */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};
// eslint-disable-next-line no-unused-vars
const handleLoaded = (_) => {
  // eslint-disable-next-line no-unused-vars, no-shadow
  window.grecaptcha.ready((_) => {
    window.grecaptcha
      .execute('6LdtwYgcAAAAANWbohJLaLTuHQhbyZs877HG3ZDx', { action: 'homepage' })
      .then((token) => {
        document.getElementById('captchaResponse').value = token;
      });
  });
};

// eslint-disable-next-line no-unused-vars
const useScript = (url) => {
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement('script');
    script.src =
      'https://www.google.com/recaptcha/api.js?render=6LdtwYgcAAAAANWbohJLaLTuHQhbyZs877HG3ZDx';
    script.addEventListener('load', handleLoaded);
    document.body.appendChild(script);
  }, []);
};

export default Contact;
