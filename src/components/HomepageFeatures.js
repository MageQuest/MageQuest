import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import ArrowUp from 'pixelarticons/svg/arrow-up.svg';
import Code from 'pixelarticons/svg/code.svg';
import BookOpen from 'pixelarticons/svg/book-open.svg';
const imageWidth = 64;

const FeatureList = [
  {
    title: 'Level Up!',
    image: <ArrowUp width={imageWidth}/>,
    description: (
      <>
        MageQuest's main goal is provide learning resources to help improve your Magento 2 knowledge through simple, yet thorough tutorials.
      </>
    ),
    link: '/quests',
    linkTitle: 'Get Started Now',
    linkTarget: '_self',
  },
  {
    title: 'Open Source',
    image: <Code width={imageWidth}/>,
    description: (
      <>
          MageQuest's content is free to all, as we believe in lowering the barrier to entry for beginners to the Magento ecosystem.
      </>
    ),
    link: 'https://github.com/magequest/magequest',
    linkTitle: 'Contribute Or Sponsor',
    linkTarget: '_blank',
  },
  {
    title: 'Tools & Resources',
    image: <BookOpen width={imageWidth}/>,
    description: (
      <>
        As well as learning material, MageQuest also provides useful Magento 2 extensions, tools and links to other great resources.
      </>
    ),
    link: '/resources',
    linkTitle: 'Show Me More',
    linkTarget: '_self',
  },
];

function Feature({image, title, description, link, linkTitle, linkTarget}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.image, 'text--center')}>
          {image}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className={clsx('btn')}>
            <a href={link} target={linkTarget}>{linkTitle}</a>
        </button>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
