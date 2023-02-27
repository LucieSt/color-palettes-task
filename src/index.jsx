import React from 'react';
import { createRoot } from 'react-dom/client';
import Palette from './Components/Palette/index.jsx';
import { palettes } from './palettes.js';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((paleta) => (
          <Palette key={paleta.name} paletteData={paleta}/>
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
