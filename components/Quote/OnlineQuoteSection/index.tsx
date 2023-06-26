import { Container } from '@/components/ui/container';
import classes from './index.module.css';
import classNames from 'classnames';
import Image from 'next/image';

const OnlineQuoteSection = () => {

    return (
        <section className={classes.onlineSection}>
            <Container>
                <p className={classes.subTitle}>
                    <span className={classes.row}/>
                    Get a Quote Online
                </p>
                <div className={classes.content}>
                    <div className={classes.nodeLine}>
                        <div className={classes.textNode}>
                            <h2 className={classes.title}>New York City Car Transport</h2>
                            <p className={classes.description}>Choosing an auto shipping company can be hard. We know your decision is very much related to the prices of shipping. Vehicle shipping is not cheap.That is why it’s important to deal with the trustworthy auto shipping company that will not charge you extra.New York City Car Transport is trying to make it easy and cost-effective for you.</p>
                            <p className={classes.description}>You can get your auto transport quotes from New York City Car Transport. All you need to do is submitting a form online on our website. You will not be required to provide personal info such as your home address. We make sure we are not violating your privacy.We recommend to check out several auto shipping companies before you decide which one is going to ship your vehicle.</p>
                        </div>
                        <div className={classes.imageNode}>
                            <Image
                                src={"/assets/images/onlineQuoteImage1.png"}
                                alt="image"
                                className={classes.image}
                                width={560}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                    <div className={classNames(classes.nodeLine, classes.nodeLineRevers)}>
                        <div className={classes.textNode}>
                            <h2 className={classes.title}>Get a quote online and ship your vehicle with New York City Car Transport!</h2>
                            <p className={classes.description}>New York City Car Transport provides an exact and accurate auto transport rates. Our customer agents review your quotes and get back to you with the precise information. Just make sure you provide the information necessary for estimation of your shipping.</p>
                            <p className={classes.description}>So get ready to provide us with the following information for the quote: the model and the condition of your vehicle, transport type, pick up date and locations.</p>
                        </div>
                        <div className={classes.imageNode}>
                            <Image
                                src={"/assets/images/onlineQuoteImage2.png"}
                                alt="image"
                                className={classes.image}
                                width={560}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};


export { OnlineQuoteSection };