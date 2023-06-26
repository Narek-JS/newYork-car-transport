
import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { Cost } from '@/components/CostToShip/Cost';
import { Services } from '@/components/CostToShip/Services';
import { CalculatedFee } from '@/components/CalculatedFee';
import { DiscoverSection } from '@/components/DiscoverSection';
import { useScrollToView } from '@/hooks/useScrollToView';
import Head from 'next/head';

export default function CostToShip() {
  const sectionRef = useScrollToView<HTMLDivElement>();

  return (
    <Fragment>
      <Head>{metaTags.costToShip}</Head>
      <div ref={sectionRef}/>
      <Cost />
      <Services />
      <CalculatedFee />
      <DiscoverSection />
    </Fragment>
  );
};
