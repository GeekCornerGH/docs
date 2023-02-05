import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Translate id="homepage.subtitle"><p className="hero__subtitle">Bienvenue! Vous trouverez sur ce site la documentation relative aux tutos sur ma chaîne YouTube.</p></Translate>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/helios/intro">
            Lire la documentation Helios Launcher
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil`}
      description="Bienvenue sur le site de GeekCorner">
      <HomepageHeader />
    </Layout>
  );
}
