import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


export function App() {
    const reactVersion = require('./../package.json').dependencies['react'];
   
  return (
    <div className="App">

    <h1>
      I´m a React Application 
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
    </h1>
    <p>
      React Version: {reactVersion}
    </p>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        
      </Routes>
    </div>
  );
}

function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="about">About</Link>
        </nav>
      </>
    );
  }
  
  function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }