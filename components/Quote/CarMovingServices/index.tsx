import { Container } from '@/components/ui/container';
import { CarService } from '@/components/CarService';
import classNames from 'classnames';
import Link from 'next/link';
import classes from './index.module.css';

const CarMovingServices: React.FC = () => {
    const carServices = [
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg1.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg2.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg3.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg4.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
    ];
    return (
        <section className={classes.carMovingServicesSection}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.lineNode}>
                        <div className={classes.contentNode}>
                            <p className={classes.subTitle}>
                                <span className={classes.row}/>
                                Our SHIPPING METHODS
                            </p>
                            <h2 className={classes.title}>
                                Before Get a Quote
                            </h2>
                            <div className={classes.description}>
                                <p className={classes.text}>Among various shipping methods, the cheapest shipping option is open car transport. Yet, enclosed car transport guarantees the best protection for your car.</p>
                                <p className={classes.text}>If you are limited in your time, you may want to use expedited auto shipping service. Our agents will make it work for you. We will ship your vehicle in the shortest amount of time with expedited auto shipping.</p>
                            </div>
                        </div>
                        <div className={classes.imagesNode}>
                            { carServices.slice(0, 2).map((service, index) => (
                                <CarService key={index} {...service}/>
                            ))}
                        </div>
                    </div>
                    <div className={classNames(classes.lineNode, classes.lineNodeRevers)}>
                        <div className={classes.contentNode}>
                            <p className={classes.subTitle}>
                                <span className={classes.row}/>
                                Customer Service
                            </p>
                            <h2 className={classes.title}>
                                New York City Car Transport
                            </h2>
                            <div className={classes.description}>
                                <p className={classes.text}>New York City Car Transport provides excellent customer service. Our qualified employees will satisfy the requirements of every demanding customer.</p>
                                <p className={classes.text}>Get fast and efficient information on your shipping from our customer service. Our biggest goal is to make our customers happy and satisfied with our service.</p>
                            </div>
                            <Link href='contact-us' className={classes.link}>Contact Us</Link>
                        </div>
                        <div className={classes.imagesNode}>
                            { carServices.slice(2, carServices.length).map((service, index) => (
                                <CarService key={index} {...service}/>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { CarMovingServices };