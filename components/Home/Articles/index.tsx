import { Container } from '@/components/ui/container';
import { PostCard } from '@/components/PostCard';
import { Form } from './Form';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

const Articles: React.FC = () => {
    const { width } = useWindowSize();
    const latestPosts = [
        {
            imagePath: '/assets/images/testLatestPost1.png',
            categoryName: 'Blogs',
            description: 'General Motors Puts Thought Into Two-Door Compact EV Truck',
            date: 'FEB 20, 2023',
            url: '/'
        },
        {
            imagePath: '/assets/images/testLatestPost2.png',
            categoryName: 'News',
            description: 'Mayor Eric Adams Sets An End To COVID Vaccine Mandate',
            date: 'JAN 7, 2023',
            url: '/'
        }
    ];

    return (
        <section className={classes.articlesSection}>
            <Container>
                <p className={classes.subTitle}>
                    <span className={classes.row}/>
                    Our Articles
                </p>
                <div className={classes.content}>
                    {Number(width) > 991 && latestPosts.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
                    <div className={classes.wrapperForm}>
                        { Number(width) > 991 && (
                            <h2 className={classes.formTitle}>
                                Contact Us or leave a message, If you need an any 
                                <span>HELP</span> !
                            </h2>
                        )}
                        <Form />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { Articles };