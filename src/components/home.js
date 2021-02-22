import { css } from '@emotion/react';

const hoverElementCss = css`
  color: #252525;
  filter: brightness(400%);
  line-height: 1.2;
  margin: 1rem 0;
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
            font-size: 1.6rem;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 1rem;
          `}>
          <img
            css={css`
              width: 480px;
              height: auto;
              border-radius: 5px;
              filter: grayscale(1);
            `}
            src='/images/asffa.png'
            alt='me'
          />
          <section>
            <div css={hoverElementCss}>
              I am a Game Developer studying at Rochester Institute of
              Technology.
            </div>
            <div css={hoverElementCss}>
              I am passionate about solving problems and getting into the
              nitty-gritty of things to make them work.
            </div>
            <div css={hoverElementCss}>
              I am currently working as the DevOps Engineer for the College of
              Health Science and Technology on a medical app to help people
              dealing with addiction, anger management issues and violent
              behavior.
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
