import { Container } from '@/components/ui/container';
import classes from './index.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

const CustomerService: React.FC = () => {
    const content = [
        {
            subTitle: 'About Us',
            title: 'New York City Car Transport',
            descriptionTextes: [
                'New York City Car Transport is a nationwide leading auto shipping company with over 12 years of experience in the auto shipping industry. We are a skilled team of professional employees who are trained to make shipping easier for our clients.',
                'As soon as you decide to ship your vehicle to or from New York or across the United States, make sure you trust your vehicle to the company with expertise.'
            ],
            imagePath: '/assets/images/customerServiceImage1.png'
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
            imagePath: '/assets/images/customerServiceImage2.png'
        },
    ]
    return (
        <section className={classes.customerServiceSection}>
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
                                    src={item.imagePath} // data?.logo || "/assets/images/logo.png"
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

export { CustomerService };