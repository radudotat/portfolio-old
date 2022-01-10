import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <ul className="contact-links">
              <li className="contact-item">
                Twitter:&nbsp;
                <Link href="https://twitter.com/radudotat">
                  <a target="_blank">@radudotat</a>
                </Link>
              </li>
              <li className="contact-item">
                GitHub:&nbsp;
                <Link href="https://github.com/radudotat">
                  <a target="_blank">radudotat</a>
                </Link>
              </li>
              <li className="contact-item">
                <Link href="https://call.radu.at/">
                  <a target="_blank">https://call.radu.at/</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
