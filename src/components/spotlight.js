import { css } from '@emotion/react';

const Spotlight = () => (
  <div
    id='spotlight'
    css={css`
      height: 100vh;
    `}>
    <section
      css={css`
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      `}>
      <section
        css={css`
          display: grid;
          grid-template-columns: auto auto;
          gap: 1rem;
          height: 30vh;
        `}>
        <img
          src='/images/ritch.png'
          alt='gif'
          style={{
            borderRadius: '5px',
            height: '30vh',
            width: 'auto',
          }}
        />
        <img
          src='/images/ritch.gif'
          alt='gif'
          style={{ borderRadius: '5px', height: '30vh', width: 'auto' }}
        />
      </section>
      <section>
        <h1>RITch</h1>
        <p>
          The RITch project is an interactive Unity application helping users
          eliminate anger management, homeless issues and drug abuse problems.
          You can find more about it{' '}
          <a
            href='https://www.rit.edu/news/team-introduces-second-gen-virtual-therapists'
            css={css`
              text-decoration: none;
              color: #0080ff;
            `}>
            here
          </a>
          .
        </p>
        <h3>My Role</h3>
        <ul>
          <li>
            Added functionality and fixed bugs for unity 3D app (avatar look,
            topic navigation, added dynamic text loaded from database).
          </li>
          <li>
            Created a pipeline with ASP.NET Core to manage our Azure
            infrastructure and CosmosDB database for binary storage.
          </li>
          <li>
            Organized and exported data into CSV using ClosedXML library to make
            it easier for clinicians to read through patient data.
          </li>
          <li>
            Refactored code for faster loading time on different platforms (iOS,
            Android, WebGL).
          </li>
        </ul>
      </section>
    </section>
  </div>
);

export default Spotlight;
