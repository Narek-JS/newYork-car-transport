import { Container } from '@/components/ui/container';
import { motion } from "framer-motion";
import { motionAnimation } from '@/constants/animation';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';

const AboutCompany: React.FC = () => {
    const content = [
        {
            subTitle: 'About Us',
            title: 'New York City Car Transport',
            descriptionTextes: [
                'New York City Car Transport is a nationwide leading auto shipping company with over 12 years of experience in the auto shipping industry. We are a skilled team of professional employees who are trained to make shipping easier for our clients.',
                'As soon as you decide to ship your vehicle to or from New York or across the United States, make sure you trust your vehicle to the company with expertise.'
            ],
            imagePath: '/assets/images/homeAboutCompany1.png'
        },
        {
            subTitle: 'Geography of New York City Car Transport Services:',
            title: 'New York City Car Transport',
            descriptionTextes: [
                'Our shipping services are one of the unique car shipping companies that provide auto shipping services across 50 states of the United States.',
                'View our Yelp page to see how our shipping services are the best around.'
            ],
            link: {
                text: 'see More',
                url: '/'
            },
            imagePath: '/assets/images/homeAboutCompany2.png'
        },
        {
            subTitle: 'Variety of vehicle shipping',
            title: 'New York City Car Transport',
            descriptionTextes: [
                'Isn’t it great to have plenty of choices when it comes to transport shipping? We provide our customers with all kinds of auto shipping services. You are free to choose between different options of transport types:',
                'Open or enclosed, as well as Door-to-Door and Expedited car shipping. Even non-running vehicle shipping is not a problem for us. We will arrange a shipping of your vehicle in any condition. If you have a hard time making a decision on the most convenient transport type, don’t hesitate to ask from our agents.'
            ],
            link: {
                text: 'Read More',
                url: '/'
            },
            imagePath: '/assets/images/homeAboutCompany3.png'
        }
    ];

    return (
        <section className={classes.aboutCompany}>
            <Container>
                <div className={classes.content}>
                    { content.map((item, index) => (
                        <div key={index} className={classNames(classes.block, {
                            [classes.reversBlock]: Number(index) % 2 !== 0
                        })}>
                            <div className={classes.contentNode}>
                                <p className={classes.subTitle}>
                                    <span className={classes.row}/>
                                    {item.subTitle}
                                </p>
                                <h2 className={classes.title}>
                                    {item.title}
                                </h2>
                                <div className={classNames(classes.description, {
                                    [classes.mb30]: Boolean(item.link)
                                })}>
                                    { item.descriptionTextes.map((text, textIndex) => (
                                        <p key={textIndex} className={classes.text}>{text}</p>
                                    ))}
                                </div>
                                { item?.link && (
                                    <Link href={item.link.url} className={classes.link}>{item.link.text}</Link>
                                )}
                            </div>
                            <div className={classes.imageNode}>
                                <Image
                                    src={item.imagePath}
                                    alt={`Image About Company ${index}`}
                                    className={classes.image}
                                    width={390}
                                    height={284}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { AboutCompany };