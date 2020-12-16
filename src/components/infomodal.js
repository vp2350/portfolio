import { css } from '@emotion/react';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoModal = ({ open, setOpen, data, image, title }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        z-index: 999991;
        top: 0;
        left: 0;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
      `}>
      <div
        css={css`
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(40vw - 2rem);
          background-color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 5px;
          padding: 1rem;
          box-shadow: 0 5px 40px rgba(0, 0, 0, 0.1),
            0 -5px 40px rgba(0, 0, 0, 0.1), 5px 0 40px rgba(0, 0, 0, 0.1),
            -5px 0 40px rgba(0, 0, 0, 0.1);
        `}>
        <section
          css={css`
            position: relative;
            top: 0;
            width: 100%;
            color: #ffffff;
            margin-bottom: 1rem;
            font-size: 2rem;
            font-family: 'Titillium Web', sans-serif;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
          `}>
          {title}
          <FontAwesomeIcon
            css={css`
              &:hover {
                cursor: pointer;
              }
            `}
            onClick={() => {
              setOpen(!open);
            }}
            icon={faWindowClose}
            pull='right'
          />
        </section>
        <section
          css={css`
            line-height: 1.6;
          `}>
          <img
            src={image}
            alt={title}
            css={css`
              width: 100%;
              height: 20rem;
              object-fit: cover;
              border-radius: 5px;
            `}
          />
          <p>{data.para}</p>
          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr 2fr;
              gap: 1rem;
            `}>
            <div>
              <img
                src={data.image}
                alt={title}
                css={css`
                  width: 100%;
                  object-fit: cover;
                  border-radius: 5px;
                `}
              />
            </div>
            <div>
              <h3>Role</h3>
              <ul>
                {data.roles.map(role => (
                  <li>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoModal;
