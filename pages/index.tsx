import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { ReviewSection } from '@/components/ReviewSection';
import { AboutCompany, Articles, CarMovingServices, CustomerService } from '@/components/Home';
import { VideoSection } from '@/components/VideoSection';
import { SosialeSection } from '@/components/SosialeSection';
import { CalculatedFee } from '@/components/CalculatedFee';
import { HelpSection } from '@/components/HelpSection';
import Head from 'next/head';

export default function Home() {

  return (
    <Fragment>
      <Head>{metaTags.home}</Head>

      <ReviewSection />
      <AboutCompany />
      <CarMovingServices />
      <VideoSection />
      <SosialeSection />
      <CalculatedFee />
      <CustomerService />
      <Articles />
      <HelpSection />
    </Fragment>
  );
};
