import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              My current work with web components in reactive web:
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/images/radu.at.jpg" className="portfolio-image" />

                <h4 className="portfolio-name">https://radu.at</h4>
                <div className="portfolio-category">Web Dev</div>
              </div>
              <div className="portfolio-item">
                <img src="/images/wien.ro.jpg" className="portfolio-image" />

                <h4 className="portfolio-name">https://wien.ro</h4>
                <div className="portfolio-category">PWA</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
