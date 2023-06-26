import { metaTags } from '@/constants/metaTags';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { Container } from '@/components/ui/container';
import { Form } from '@/components/contactUs/Form';
import { ImageNode } from '@/components/contactUs/ImageNode';
import { useScrollToView } from '@/hooks/useScrollToView';
import Head from 'next/head';

import classes from './index.module.css';

const Faqs: NextPage = () => {
  const sectionRef = useScrollToView<HTMLDivElement>();

  return (
    <Fragment>
        <Head>{metaTags.contact}</Head>
        <section className={classes.contactUsSection} ref={sectionRef}>
            <Container>
                <h2 className={classes.title}>Contact Us</h2>
                <p className={classes.description}>You can contact Phoenix Car Transport using the following details:</p>
                <div className={classes.content}>
                  <Form />
                  <ImageNode />
                </div>
            </Container>
        </section>
    </Fragment>
  );
};

export default Faqs;