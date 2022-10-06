import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App} from "./components/app"

class Main extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];

    return (
    <BrowserRouter>
    <App />
  </BrowserRouter>)
  }
}

class Mfe4Element extends HTMLElement {
  
  connectedCallback() {
    const root = createRoot(this);
    root.render(<Main/>);
  }
}

customElements.define('react-element', Mfe4Element);