import Image from 'next/image';
import classes from './index.module.css';
import Link from 'next/link';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';

interface IProps {
    title: string;
    description: string;
    imagePath: string;
    link: { text: string; url: string };
}

const CarService: React.FC<IProps> = ({
    imagePath,
    title,
    description,
    link: { text, url }
}) => {

    return (
        <div className={classes.carService}>
            <Image
                src={imagePath}
                alt='Image About Company'
                className={classes.image}
                width={286}
                height={246}
            />
            <div className={classes.content}>
                <h3 className={classes.title}>
                    { title }
                </h3>
                <p className={classes.description}>
                    { description }
                </p>
                <Link href={url} className={classes.link}>
                    {text}
                    <ArrowIcon 
                        rotate={270}
                        color={'#FDFDFF'}
                    />
                </Link>
            </div>
        </div>
    );
};

export { CarService };