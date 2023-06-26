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

const LatestBlogs: React.FC<IProps> = ({ latestBlogs }) => {

    return (
        <div className={classes.latestBlogs}>
            <h2 className={classes.blogsTitle}>Latest Blogs</h2>
            <div className={classes.wrapperBlogCards}>
                { latestBlogs.map((blogs, index) => (
                    <Fragment key={blogs.id}>
                        {Boolean(index && latestBlogs.length - 1 === index) && (
                            <div className={classes.rowCardSpace} />
                        )}
                        <div className={classes.blogsCard}>
                            <Link href={`/${blogs.slug}`}>
                                <Image
                                    src={blogs.image}
                                    alt="news image"
                                    className={classes.blogsCardImg}
                                    width={999}
                                    height={340}
                                />
                            </Link>
                            <div className={classes.blogsCardContent}>
                                <div className={classes.viewAllSlice}>
                                    <p>Blogs</p>
                                    <Link href={`/${blogs.slug}`}>View All</Link>
                                </div>
                                <div className={classes.blogsCardBody} dangerouslySetInnerHTML={{ __html: blogs.body }} />
                                <div className={classes.calendarSlice}>
                                    <DateIcon />
                                    <span className={classes.defaultText}>{formatDate(blogs.created_at)}</span>
                                </div>
                                <Link href={`/${blogs.slug}`} className={classes.blogsCardReadMore}>Read More <ArrowIcon rotate={-90} color='#078586'/></Link>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export { LatestBlogs };