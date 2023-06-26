import { Container } from '@/components/ui/container';
import { Fragment } from 'react';
import { DateIcon } from '@/public/assets/svgs/DateIcon';
import { FbSmollOrangeIcon } from '@/public/assets/svgs/FbSmollOrangeIcon';
import { TwitterIconSmollOrangeIcon } from '@/public/assets/svgs/TwitterIconSmollOrangeIcon';
import { LinkdinIconSmallOrange } from '@/public/assets/svgs/LinkdinIconSmallOrange';
import { GmailSmallIconOrange } from '@/public/assets/svgs/GmailSmallIconOrange';
import { formatDate } from '@/helper/time';
import { Responses } from './Responses';
import { LatestBlogs } from './LatestBlogs';
import { RelatedPosts } from './RelatedPosts';
import { Comment } from './Comment';
import { useQuery } from 'react-query';
import { getLatestNewsNew } from '@/constants/service';
import { LINKS_FROM_MENU_TITLES } from '@/constants/words';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, LinkedinShareButton } from 'next-share'
import { useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import classes from './index.module.css';

interface Iprops {
    data: Record<string, any>;
    slug: string;
};

const CurrentNew: React.FC<Iprops> = ({ data, slug }) => {
    const { data: dataLatestNews } = useQuery<Record<string, any> | any>('latestNews', getLatestNewsNew(slug));
    const { data: menu } = useAppSelector(selectMenus);

    if(!data) return null;

    return (
        <Fragment>
            <Head>
                <title key={1}>{menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].title} | New York City CRM New</title>,
                <meta key={2}
                    property="og:title"
                    data-hid="og:title"
                    data-n-head="ssr"
                    content={`New York City Website ${menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].title}`}
                ></meta>
            </Head>
            <section className={classes.mt160}>
                <Container>
                    <div className={classes.newSection}>
                        <div className={classes.newContent}>
                            <h1 className={classes.title}>
                                <Link href={menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].url || ''}>
                                    {menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].title}
                                </Link>
                            </h1>
                            <div className={classes.wrapperImage}>
                                <Image
                                    src={data.post.image}
                                    alt="hero New image"
                                    className={classes.newImage}
                                    width={780}
                                    height={520}
                                />
                                <div className={classes.wrapperSocial}>
                                    <div className={classes.calendarSlice}>
                                        <div className={classes.wrapperCalendar}>
                                            <DateIcon />
                                            <span className={classes.defaultText}>{formatDate(data.post.created_at)}</span>
                                            <div className={classes.verticalRow}/>
                                        </div>
                                        <span className={classes.calendarSliceNewText}>
                                            <Link href={menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].url || ''}>{menu?.contactInfo?.[LINKS_FROM_MENU_TITLES.news].title}</Link>
                                        </span>
                                    </div>
                                    <div className={classes.socialSlice}>
                                        <span className={classes.shareText}>Share</span>
                                        <FacebookShareButton url='https://www.facebook.com/ColumbusCarTransport'>
                                            <FbSmollOrangeIcon />
                                        </FacebookShareButton>
                                        <TwitterShareButton url='https://twitter.com/ColumbusCarTRSP'>
                                            <TwitterIconSmollOrangeIcon /> 
                                        </TwitterShareButton>
                                        <LinkedinShareButton url='https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.columbusautotransport.com%2Fstate-budget-considered-on-better-school-safety%2F'>
                                            <LinkdinIconSmallOrange />
                                        </LinkedinShareButton>
                                        <PinterestShareButton
                                            url='https://www.pinterest.com/columbuscartransport'
                                            media='next-share is a social share buttons for your next React apps.'
                                        >
                                            <GmailSmallIconOrange />
                                        </PinterestShareButton>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.newBody}>
                                <p dangerouslySetInnerHTML={{ __html: data.post.body }}/>
                            </div>
                        </div>
                        { dataLatestNews?.data && <LatestBlogs latestBlogs={dataLatestNews.data}/>}
                    </div>
                </Container>
            </section>
            { Boolean(data.post.comment && data.post.comment.length) && (
                <section>
                    <Container>
                        <Responses comment={data.post.comment} />
                    </Container>
                </section>
            )}
            <section>
                <Container>
                    <div className={classes.relatedPosts}>
                        { Boolean(data.relatedPosts.length) && (
                            <RelatedPosts relatedPosts={data.relatedPosts}/>
                        )}
                        <Comment />
                    </div>
                </Container>
            </section>
        </Fragment>
    );
};

export { CurrentNew };