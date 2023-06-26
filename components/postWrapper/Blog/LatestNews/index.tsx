import { Fragment } from 'react';
import { DateIcon } from '@/public/assets/svgs/DateIcon';
import { formatDate } from '@/helper/time';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';

interface IProps {
    latestBlogs: Array<Record<string, any>>;
}

const LatestNews: React.FC<IProps> = ({ latestBlogs }) => {
    return (
        <div className={classes.latestNews}>
            <h2 className={classes.newsTitle}>Latest News</h2>
            <div className={classes.wrapperNewCards}>
                { latestBlogs.map((news, index) => (
                    <Fragment key={news.id}>
                        {Boolean(index && latestBlogs.length - 1 === index) && (
                            <div className={classes.rowCardSpace} />
                        )}
                        <div className={classes.newsCard}>
                            <Link href={`/${news.slug}`}>
                                <Image
                                    src={news.image}
                                    alt="news image"
                                    className={classes.newsCardImg}
                                    width={999}
                                    height={340}
                                />
                            </Link>
                            <div className={classes.newsCardContent}>
                                <div className={classes.viewAllSlice}>
                                    <p>News</p>
                                    <Link href={`/${news.slug}`}>View All</Link>
                                </div>
                                <div className={classes.newsCardBody} dangerouslySetInnerHTML={{ __html: news.body }} />
                                <div className={classes.calendarSlice}>
                                    <DateIcon />
                                    <span className={classes.defaultText}>{formatDate(news.created_at)}</span>
                                </div>
                                <Link href={`/${news.slug}`} className={classes.newsCardReadMore}>Read More <ArrowIcon rotate={-90} color='#078586'/></Link>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export { LatestNews };