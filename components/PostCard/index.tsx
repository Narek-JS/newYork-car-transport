import { DateIcon } from '@/public/assets/svgs/DateIcon';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';

interface IProps {
    imagePath: string,
    categoryName: string,
    description: string,
    date: string,
    url: string
};

const PostCard: React.FC<IProps> = ({
    imagePath,
    categoryName,
    description,
    date,
    url
}) => {
  
    return (
        <div className={classes.card}>
            <Image
                src={imagePath}
                alt="post image"
                className={classes.image}
                width={400}
                height={340}
            />
            <div className={classes.content}>
                <p className={classes.categoryName}>{categoryName}</p>
                <p className={classes.description}>{description}</p>
                <p className={classes.date}>
                    <DateIcon />
                    <span>{date}</span>
                </p>
                <Link href={url} className={classes.link}>
                    <span className={classes.readMore}>
                        Read More
                        <ArrowIcon
                            rotate={270}
                            color='#078586'
                        />
                    </span>
                    <span className={classes.viewAll}>View All</span>
                </Link>
            </div>
        </div>
    );
};

export { PostCard };