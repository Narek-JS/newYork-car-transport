import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { ReviewSection } from '@/components/ReviewSection';
import { CarMovingServices, OnlineQuoteSection } from '@/components/Quote';
import { CalculatedFee } from '@/components/CalculatedFee';
import { DiscoverSection } from '@/components/DiscoverSection';
import { VideoSection } from '@/components/VideoSection';
import { HelpSection } from '@/components/HelpSection';
import { useScrollToView } from '@/hooks/useScrollToView';
import Head from 'next/head';

export default function Quote() {
  const sectionRef = useScrollToView<HTMLDivElement>();
  
  return (
    <Fragment>
      <Head>{metaTags.quote}</Head>
      <div ref={sectionRef}/>
      <ReviewSection />
      <OnlineQuoteSection />
      <CalculatedFee />
      <DiscoverSection />
      <CarMovingServices />
      <VideoSection />
      <ReviewSection />
      <HelpSection />
    </Fragment>
  );
};
