import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const linkStyling = css`
  color: #cccccc;
  transition: color 200ms ease-in-out;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const Navigation = () => {
  return (
    <nav
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        display: block;
        width: 100%;
        font-family: 'Titillium Web', sans-serif;
        background-color: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(5px);
      `}>
      <section
        css={css`
          min-width: 960px;
          width: 50%;
          max-width: 1920px;
          height: 5rem;
          line-height: 5rem;
          margin: auto;
          font-size: 1.25rem;

          display: grid;
          grid-template-columns: auto auto 1fr auto;
          gap: 2rem;
        `}>
        <div css={css``}>
          <span
            css={css`
              color: #eceff4;
            `}>
            Vansh
          </span>{' '}
          <span>Pahuja</span>
        </div>
        <div
          css={css`
            font-size: 2rem;
            display: grid;
            grid-template-columns: auto auto auto;
            padding-top: 0.1rem;
            gap: 1rem;
          `}>
          <a
            css={linkStyling}
            style={{ fontSize: '18px' }}
            href='mailto:vp2350@rit.edu'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <span
              css={css`
                font-size: 1rem;
              `}>
              vp2350@rit.edu
            </span>
          </a>
          <a
            css={linkStyling}
            style={{ fontSize: '18px' }}
            href='https://github.com/vp2350'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} />{' '}
            <span
              css={css`
                font-size: 1rem;
              `}>
              GitHub
            </span>
          </a>
          <a
            css={linkStyling}
            style={{ fontSize: '18px' }}
            href='https://linkedin.com/in/vansh-pahuja'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />{' '}
            <span
              css={css`
                font-size: 1rem;
              `}>
              LinkedIn
            </span>
          </a>
        </div>
        <div />
        <div
          css={css`
            display: grid;
            grid-template-columns: auto auto auto auto;
            gap: 1rem;
            padding: calc(0.25rem / 2);
          `}>
          <a href='#home' css={linkStyling}>
            Home
          </a>
          <a href='#spotlight' css={linkStyling}>
            Spotlight
          </a>
          <a href='#gameProjects' css={linkStyling}>
            Games
          </a>
          <a href='#webProjects' css={linkStyling}>
            Web Projects
          </a>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
