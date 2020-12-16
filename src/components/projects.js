import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLink,
  faInfoCircle,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faApple,
  faAndroid,
  faAppStoreIos,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

import InfoModal from '../components/infomodal';

const games = [
  {
    title: 'Hexenwolf',
    image: '/assets/hexenwolf.gif',
    description:
      'Fast-paced 2D top down shooter with lighting as the spotlight gameplay element.',
    technologies: ['Unity', 'Unity Rendering Pipeline', 'A-Star'],
    github: 'https://github.com/Jacker71300/320-Project-3',
    platforms: [
      { icon: faWindows, text: 'Windows' },
      { icon: faApple, text: 'MacOS' },
    ],
    links:
      'https://people.rit.edu/vp2350/330/tm-my-image-model/AudioHW_-_3/AudioHW%20-%203/',
    data: {
      para:
        'Hexenwolf is a fast-paced top-down shooter which provides the player with very limited lighting, forcing them to approach every situation carefully. The player can also transform into a wolf which can withstand more damage and has a devastating melee attack.',
      image: '/images/hexenwolf.png',
      roles: [
        'Implemented the lighting and shadow system of the game using the Unity Rendering Pipeline, directing the aesthetic of the game.',
        'Implemented the enemy paths so they intelligently patrol the areas they are assigned to.',
        'Implemented the in-game menus, including the pause and end game screen functionalities.',
      ],
    },
  },
  {
    title: 'Misenchanted Fortress',
    image: '/assets/misenchantedfortress.gif',
    description: 'Tower defense game with an auto-chess shop and inventory.',
    technologies: ['Unity'],
    github: 'https://github.com/Jacker71300/320-Project-3',
    platforms: [
      { icon: faWindows, text: 'Windows' },
      { icon: faApple, text: 'MacOS' },
    ],
    links: '',
    data: {
      para:
        'Misenchanted fortress is an auto-chess take on the classic tower defense genre, with three different class, Archer, Wizard, and Theurgist. Players can buy these units from the shop and combine 3 of the same type to create a stronger unit.',
      image: '/images/misenchantedfortress.png',
      roles: [
        'Implemented the target priority system of the game, which makes the tower target the unit that is further along their path in the tower’s range.',
        'Implemented the projectile tracking system of the game, which makes the tower shoot a tracking projectile to the priority target, damaging the target on impact.',
        'Implemented the in-game menus, including the pause and end game screen functionalities.',
      ],
    },
  },
  {
    title: 'Hoodlings',
    image: '/assets/hoodlings.gif',
    description:
      'Mobile infinite runner with a physical toy supplement. Releasing early 2021.',
    technologies: ['Unity', 'ASP.NET Core', 'MongoDB'],
    platforms: [
      { icon: faAndroid, text: 'Android' },
      { icon: faAppStoreIos, text: 'iOS' },
    ],
    github: '',
    links: '',
    data: {
      para:
        'Hoodlings is an infinite side scroller built for android and iOS. The game is complemented by a physical toy. When someone purchases the toy, they also receive a code along with it that lets them unlock in game items. Releasing early 2021.',
      image: '/images/hoodlings.png',
      roles: [
        'Programmed a RESTful API to allow users to redeem in-game items from codes received with the physical toy.',
        'Developed the player movement system and interaction with 2 different kinds of enemies.',
      ],
    },
  },
];

const webProjects = [
  {
    title: 'Teachable Machine Audio Visualizer',
    image: '/assets/audiovisualizer.gif',
    description:
      "Audio visualizer that uses Google's teachable machine to recognize hand signs using the webcam.",
    technologies: ['Javascript', 'Canvas', 'Teachable Machine'],
    github: 'https://github.com/vp2350/330-Project2',
    links:
      'https://people.rit.edu/vp2350/330/tm-my-image-model/AudioHW_-_3/AudioHW%20-%203/',
  },
  {
    title: 'Crime Tracker',
    image: '/assets/crimetracker.gif',
    description:
      "Crime Tracker that uses the FBI's Crime Data API to populate a map and data charts over the selected years.",
    technologies: ['Javascript', 'Mapbox', 'ChartJS', 'FBI Crime Data API'],
    github: 'https://github.com/vp2350/CrimeTracker',
    links: 'https://people.rit.edu/vp2350/Crime/',
  },
  {
    title: 'Meal Planner',
    image: '/assets/mealdb.gif',
    description:
      "Meal Planner that lets a user log in using Google's Firebase and let them save meals sourced through TheMealDB API.",
    technologies: ['Javascript', 'TheMealDB', 'Google Firebase'],
    github: 'https://github.com/vp2350/MealPlanner',
    links: 'https://people.rit.edu/vp2350/mealPlanner/mealPlanner/',
  },
];

const GameProject = ({
  title,
  image,
  description,
  technologies,
  platforms,
  github,
  links,
  data,
  reversed,
}) => {
  let [open, setOpen] = useState(false);

  const DataSection = () => (
    <section
      css={css`
        background-color: #050505;
        color: #ffffff;
        padding: 1rem;
      `}>
      <div
        css={css`
          font-size: 2rem;
          font-weight: 700;
          font-family: 'Titillium Web', sans-serif;
          line-height: 1;
          margin-bottom: 0.5rem;
        `}>
        {title}
        <FontAwesomeIcon
          onClick={() => {
            setOpen(!open);
          }}
          css={css`
            &:hover {
              cursor: pointer;
            }
          `}
          icon={faInfoCircle}
          pull='right'
        />
      </div>
      <div
        css={css`
          display: inline-flex;
          margin: 0.2rem 0 0.5rem 0;
        `}>
        {technologies.map(value => (
          <div
            css={css`
              margin-right: 0.5rem;
              padding: 0.5rem;
              background-color: #ffffff;
              border-radius: 5px;
              color: #000000;
              font-weight: 700;
              font-size: 0.8rem;
            `}>
            {value}
          </div>
        ))}
      </div>
      <div>{description}</div>
      <div
        css={css`
          font-weight: 700;
          margin-top: 0.5rem;
        `}>
        Platforms
      </div>
      <div
        css={css`
          display: inline-flex;
          margin: 0.2rem 0 0 0;
          font-size: 1rem;
        `}>
        {platforms.map(platform => (
          <div
            css={css`
              margin-right: 0.5rem;
              padding: 0.5rem;
              border-radius: 5px;
              background-color: #222222;
            `}>
            <FontAwesomeIcon icon={platform.icon} /> &nbsp;
            <span
              css={css`
                font-size: 0.8rem;
                line-height: 1;
              `}>
              {platform.text}
            </span>
          </div>
        ))}
      </div>
      <div
        css={css`
          display: inline-flexbox;
          margin: 1rem 0;
          font-size: 1rem;
        `}>
        {github !== '' ? (
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            css={css`
              margin-right: 0.5rem;
              color: #0080ff;
              text-decoration: none;
              padding: 0.5rem;
              border: 1px solid #0080ff;
              border-radius: 5px;

              &:hover {
                color: #000000;
                background-color: #0080ff;
              }
            `}>
            <FontAwesomeIcon icon={faGithub} />{' '}
            <span
              css={css`
                font-size: 0.8rem;
                line-height: 1;
                font-weight: 700;
              `}>
              GitHub
            </span>
          </a>
        ) : (
          ''
        )}
        {links !== '' ? (
          <a
            href={links}
            target='_blank'
            rel='noreferrer'
            css={css`
              margin-right: 0.5rem;
              color: #0080ff;
              text-decoration: none;
              padding: 0.5rem;
              border: 1px solid #0080ff;
              border-radius: 5px;

              &:hover {
                color: #000000;
                background-color: #0080ff;
              }
            `}>
            <FontAwesomeIcon icon={faDownload} />{' '}
            <span
              css={css`
                font-size: 0.8rem;
                line-height: 1;
                font-weight: 700;
              `}>
              Download
            </span>
          </a>
        ) : (
          ''
        )}
      </div>
    </section>
  );
  return (
    <>
      {open ? (
        <InfoModal
          open={open}
          setOpen={setOpen}
          data={data}
          title={title}
          image={image}
        />
      ) : (
        ''
      )}
      <div
        css={css`
          display: grid;
          border-radius: 5px;
          grid-template-columns: ${reversed ? '2fr 3fr' : '3fr 2fr'};
          overflow: hidden;
          width: 100%;
          height: 17.5rem;
          filter: brightness(50%);
          transition: filter 200ms ease-in-out;

          &:hover {
            filter: brightness(100%);
          }
        `}>
        {reversed ? (
          <>
            <DataSection />
            <img
              src={image}
              alt={title}
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
            />
          </>
        ) : (
          <>
            <img
              src={image}
              alt={title}
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
            />
            <DataSection />
          </>
        )}
      </div>
    </>
  );
};

const WebProject = ({
  reversed,
  image,
  title,
  technologies,
  description,
  links,
  github,
}) => {
  const DataSection = () => (
    <section
      css={css`
        background-color: #050505;
        color: #ffffff;
        padding: 1rem;
      `}>
      <div
        css={css`
          font-size: 2rem;
          font-weight: 700;
          font-family: 'Titillium Web', sans-serif;
        `}>
        {title}
      </div>
      <div
        css={css`
          display: inline-flex;
          margin: 0.2rem 0 0.5rem 0;
        `}>
        {technologies.map(value => (
          <div
            css={css`
              margin-right: 0.5rem;
              padding: 0.5rem;
              background-color: #ffffff;
              border-radius: 5px;
              color: #000000;
              font-weight: 700;
              font-size: 0.8rem;
            `}>
            {value}
          </div>
        ))}
      </div>
      <div>{description}</div>
      <div
        css={css`
          display: inline-flexbox;
          margin: 1rem 0;
          font-size: 1rem;
        `}>
        {github !== '' ? (
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            css={css`
              margin-right: 0.5rem;
              color: #0080ff;
              text-decoration: none;
              padding: 0.5rem;
              border: 1px solid #0080ff;
              border-radius: 5px;

              &:hover {
                color: #000000;
                background-color: #0080ff;
              }
            `}>
            <FontAwesomeIcon icon={faGithub} />{' '}
            <span
              css={css`
                font-size: 0.8rem;
                line-height: 1;
                font-weight: 700;
              `}>
              GitHub
            </span>
          </a>
        ) : (
          ''
        )}
        {links !== '' ? (
          <a
            href={links}
            target='_blank'
            rel='noreferrer'
            css={css`
              margin-right: 0.5rem;
              color: #0080ff;
              text-decoration: none;
              padding: 0.5rem;
              border: 1px solid #0080ff;
              border-radius: 5px;

              &:hover {
                color: #000000;
                background-color: #0080ff;
              }
            `}>
            <FontAwesomeIcon icon={faLink} />{' '}
            <span
              css={css`
                font-size: 0.8rem;
                line-height: 1;
                font-weight: 700;
              `}>
              Hosted Link
            </span>
          </a>
        ) : (
          ''
        )}
      </div>
    </section>
  );
  return (
    <div
      css={css`
        display: grid;
        border-radius: 5px;
        overflow: hidden;
        grid-template-columns: ${reversed ? '2fr 3fr' : '3fr 2fr'};
        width: 100%;
        height: 17.5rem;
        filter: brightness(50%);
        transition: filter 200ms ease-in-out;

        &:hover {
          filter: brightness(100%);
        }
      `}>
      {reversed ? (
        <>
          <DataSection />
          <img
            src={image}
            alt={title}
            css={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
          />
        </>
      ) : (
        <>
          <img
            src={image}
            alt={title}
            css={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
          />
          <DataSection />
        </>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section>
      <div
        id='gameProjects'
        css={css`
          height: 100vh;
        `}>
        <div
          css={css`
            position: relative;
            padding: 2rem;
            top: 50%;
            transform: translateY(-50%);
          `}>
          <h2>Games</h2>
          <div
            id='games'
            css={css`
              display: grid;
              gap: 1rem;
            `}>
            {games.map((data, index) => {
              return (
                <GameProject
                  key={index}
                  title={data.title}
                  image={data.image}
                  description={data.description}
                  technologies={data.technologies}
                  platforms={data.platforms}
                  github={data.github}
                  links={data.links}
                  data={data.data}
                  reversed={index % 2 === 0 ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        id='webProjects'
        css={css`
          height: 100vh;
        `}>
        <div
          css={css`
            position: relative;
            top: 50%;
            padding: 2rem;
            transform: translateY(-50%);
          `}>
          <h2>Web Projects</h2>
          <div
            id='games'
            css={css`
              display: grid;
              gap: 1rem;
            `}>
            {webProjects.map((data, index) => {
              return (
                <WebProject
                  key={index}
                  title={data.title}
                  image={data.image}
                  description={data.description}
                  technologies={data.technologies}
                  github={data.github}
                  links={data.links}
                  reversed={index % 2 === 0 ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
