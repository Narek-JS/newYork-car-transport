import { metaTags } from '@/constants/metaTags';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { Container } from '@/components/ui/container';
import { AboutTransport } from '@/components/HeavyHauling/AboutTransport';
import { AboutCustomer } from '@/components/HeavyHauling/AboutCustomer';
import { HelpSection } from '@/components/HelpSection';
import { useScrollToView } from '@/hooks/useScrollToView';
import Head from 'next/head';

import classes from './index.module.css';

const HeavyHauling: NextPage = () => {
  const sectionRef = useScrollToView<HTMLDivElement>();

  return (
    <Fragment>
        <Head>{metaTags.heavyHauling}</Head>
        <section className={classes.heavyHaulingSection} ref={sectionRef}>
            <Container>
                <h2 className={classes.title}>Heavy Hauling</h2>
                <p className={classes.description}>You can contact Phoenix Car Transport using the following details:</p>
                <div className={classes.content}>
                    <AboutTransport />
                    <AboutCustomer />
                </div>
            </Container>
        </section>
        <HelpSection />
    </Fragment>
  );
};

export default HeavyHauling;