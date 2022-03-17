import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        With wBox-Forms you can create fully functional forms in minutes
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        wBox-Forms lets you focus on what matter rather than spending time on writing boilerplate code
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        With wBox-Forms, you can always change how things are working.
      </>
    ),
  },
  {
    title: 'Extensible',
    description: 'Also, this library come with set of plugins to help you write less code'
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
