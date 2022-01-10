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
              <li className="contact-item">Twitter: @radudotat</li>
              <li className="contact-item">GitHub: /radudotat</li>
              <li className="contact-item">https://call.radu.at/</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
