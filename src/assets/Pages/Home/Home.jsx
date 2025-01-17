import React, { useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import './home.css';

const Home = () => {
  useEffect(() => {
    const scriptUrl = "https://tally.so/widgets/embed.js";
    const loadTallyScript = () => {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.onload = () => Tally && Tally.loadEmbeds();
        script.onerror = () => console.warn("Tally script failed to load");
        document.body.appendChild(script);
      }
    };

    loadTallyScript();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="main">
          <h2>Résumé précis de votre PDF en quelques lignes, en moins d'une minute !</h2>
          <div className="iframe-container">
            <iframe
              data-tally-src="https://tally.so/embed/n9pybY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="452"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="PDF"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
