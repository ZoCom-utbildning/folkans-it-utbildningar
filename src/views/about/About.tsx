import Footer from '../../components/footer/Footer';
import Blob from '../../components/blob/Blob';
import './about.scss';

function About() {

    return (
        <div className="aboutView">
            <main>
                <h1>Folkuniversitetet hjärta ZoCom</h1>
                <p>På uppdrag från Folkuniversitetet och ZoCom har den här webbsidan designats och byggts av Emil Arvidsson, Monica Björk, Ricky Johansson och William Löfroth, som studerar till frontendutvecklare, med stöd från Vilhelm Stahl som studerar till IT-projektledare.</p>
                <p>Denna sida är skapad under vår LIA period och för närmare kontakt så hittar ni oss här:</p>
                <section className='about-section'>
                    <section>
                        <p>Emil Arvidsson</p>
                        <a href="https://github.com/KarlEmilArvid">github</a>
                        <a href="https://www.linkedin.com/in/karlemilarvid/">linkedin</a>
                    </section>
                    <section>
                        <p>Monica Björk</p>
                        <a href="https://github.com/MonBjo">github</a>
                        <a href="https://www.linkedin.com/in/monbjo/">linkedin</a>
                    </section>
                    <section>
                        <p>Ricky Johanson</p>
                        <a href="https://github.com/RickyJohansson">github</a>
                        <a href="https://www.linkedin.com/in/ricky-johansson-2264a9265/">linkedin</a>
                    </section>
                    <section>
                        <p>William Löfroth</p>
                        <a href="https://github.com/Williamlof">github</a>
                        <a href="https://www.linkedin.com/in/william-l%C3%B6froth-aa2ba8263/">linkedin</a>
                    </section>
                    <section>
                        <p>Vilhelm Stahl</p>
                        <a href="https://github.com/VSMC">github</a>
                        <a href="https://www.linkedin.com/in/vilhelm-stahl/">linkedin</a>
                    </section>
                </section>
            </main>
            <Blob xPos={1.2} yPos={1.8} radius={4.5} opacity={0.2} />
            <Footer />
        </div>
    )
}

export default About