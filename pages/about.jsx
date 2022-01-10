import Head from 'next/head'
import Navbar from '../components/Navbar'

function About() {
    return (
            <>
                <Head>
                    <title>About</title>
                </Head>

                <Navbar/>

                <section className="hero">
                    <div className="container">
                        <div className="text-wrapper w-full">
                            <h1 data-cy="pageTitle" className="title">
                                About
                            </h1>
                            <p className="description">
                                My first contact with a Computer was back in '80s, it was Huge (literally),<br/>
                                I owned my first computer in '90s and I start to surf the new web.<br/><br/>
                                Ten years later (2010) I started to code Web1 (HTML & CSS),<br/>
                                from 2010 I was going more deep into the Web2 writing PHP backends & JavaScript
                                frontends.<br/><br/>
                                Now I'm moving forward, accelerated by @LeveledUp, with the Web3.<br/>
                                My goal is to write backends & frontends with JavaScript only, spiced up with a little
                                Wasm.
                            </p>
                        </div>
                    </div>
                </section>
            </>
    )
}

export default About
