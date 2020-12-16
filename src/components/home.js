import { css } from '@emotion/react';

const hoverElementCss = css`
  color: #111111;
  &:first-child {
    color: #050505;
  }
  &:last-child {
    color: #252525;
  }
  filter: brightness(400%);
  line-height: 1;
`;

const Home = () => {
  return (
    <>
      <section
        id='home'
        css={css`
          height: 100vh;
        `}>
        <section
          css={css`
            font-family: 'Titillium Web', sans-serif;
            font-weight: 700;
            font-size: 15rem;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          `}>
          <div css={hoverElementCss}>Innovative</div>
          <div css={hoverElementCss}>Ambitious</div>
          <div css={hoverElementCss}>Dependable</div>
        </section>
      </section>
    </>
  );
};

export default Home;
