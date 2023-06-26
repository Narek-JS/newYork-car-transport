import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { NextPage } from 'next';
import { CurrentCity } from '@/components/cities';
import { GoogleMapComponent } from '@/components/cities/GoogleMap';
import { useScrollToView } from '@/hooks/useScrollToView';
import Head from 'next/head';

const Cities: NextPage = () => {
    const sectionRef = useScrollToView<HTMLDivElement>();

    return (
        <Fragment>
          <Head>{metaTags.cities}</Head>
          <div ref={sectionRef}/>
          <CurrentCity />
          <GoogleMapComponent />
        </Fragment>
    );
};

export default Cities;