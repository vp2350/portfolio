import { css } from '@emotion/react';
import Home from '../components/home';
import Projects from '../components/projects';
import Spotlight from '../components/spotlight';

const App = () => {
  return (
    <main
      css={css`
        z-index: -1;
        min-width: 960px;
        width: 50%;
        max-width: 1920px;
        color: #ffffff;
        margin: 0.5rem auto;
        font-family: 'Open Sans', sans-serif;
      `}>
      <Home />
      <Spotlight />
      <Projects />
    </main>
  );
};

export default App;
