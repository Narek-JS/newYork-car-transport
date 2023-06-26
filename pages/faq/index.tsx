import { metaTags } from '@/constants/metaTags';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { useGetFaqsQuery } from '@/store/faq';
import { Questions } from '@/components/faqs/Questions';
import { useScrollToView } from '@/hooks/useScrollToView';
import Head from 'next/head';

const Faqs: NextPage = () => {
  const { data } = useGetFaqsQuery('getDynamicData/faq');
  const sectionRef = useScrollToView<HTMLDivElement>();

  return (
    <Fragment>
      <Head>{metaTags.faqs}</Head>
      <div ref={sectionRef}/>
      <Questions
        title={data?.title || ''}
        subTitle={data?.subTitle || ''}
        questions={data?.questions || []}
      />
    </Fragment>
  );
};

export default Faqs;