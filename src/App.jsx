import React from 'react';
import Header from './components/Header';
import CoreGames from './components/CoreGames';
import { CORE_GAMES } from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Let's begin!</h2>
        <section id="core-concepts">
          <h2>Top Titles</h2>
          <ul>
            {CORE_GAMES.map((game) => (
              <CoreGames 
                key={game.title}
                image={game.image}
                title={game.title}
                description={game.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
