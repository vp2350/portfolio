import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Navigation from './components/navigation';
import { Global, css } from '@emotion/react';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          background-color: #000000;
          color: #ffffff;
        }

        :root {
          font-size: 14px;
        }

        * {
          scroll-behavior: smooth;
          text-rendering: optimizeLegibility;
          transition: all 200ms ease-in-out;
        }

        h1,
        h2,
        h3 {
          font-weight: 700;
          font-family: 'Titillium Web', sans-serif;
        }
      `}
    />
    <Navigation />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
