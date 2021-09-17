import React, { useContext } from 'react';
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
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> */}
            <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
              <label>
                Email
                <input type="email" name="email" />
              </label>
              <br />
              <label>
                Postal Code
                <input
                  type="text"
                  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                  name="postcode"
                />
              </label>
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

export default Contact;
