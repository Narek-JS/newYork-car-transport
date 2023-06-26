import { Container } from '@/components/ui/container';
import { CityCallIcon } from '@/public/assets/svgs/CityCallIcon';
import { CityCard } from '../CityCard';
import { ArrowCityIcon } from '@/public/assets/svgs/ArrowCityIcon';
import classes from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CurrentCity: React.FC = () => {
    const testCities = [
        {
            "image": "/assets/images/anyCityImage.png",
            "name": "Staten Island, NY",
            "description": "<p>Staten Island, NY is the southernmost and westernmost of the five boroughs of New York City in the U.S. </br>Staten Island is known as the borough of parks because of its numerous parks. Among the popular parks are Clove Lakes, Silver Lake, Greenbelt and High Rock. A great sight to see gorgeous points of Staten Island is Moses Mountain. It is now a key point for tourists.Staten Island is known as the borough of parks because of its numerous parks. Among the popular parks are Clove Lakes, Silver Lake, Greenbelt and High Rock. A great sight to see gorgeous points of Staten Island is Moses Mountain. It is now a key point for tourists.</br>Staten Island can boast of its beautiful attraction spots which attract more tourists every year. Historic Richmond Town is a New York City’s living history village and museum complex. Visitors can explore the diversity of the American experience, as well as its history, from the colonial period to the present.</br>Staten Island is known as the borough of parks because of its numerous parks. Among the popular parks are Clove Lakes, Silver Lake, Greenbelt and High Rock. A great sight to see gorgeous points of Staten Island is Moses Mountain. It is now a key point for tourists.</brStaten Island can boast of its beautiful attraction spots which attract more tourists every year. Historic Richmond Town is a New York City’s living history village and museum complex. Visitors can explore the diversity of the American experience, as well as its history, from the colonial period to the present.</br><b>New York City Car Transport</b></br>New York City Car Transport is a nationwide leading auto shipping company with over 12 years of experience in the auto shipping industry. If you plan to ship your vehicle to and from Staten Island, New York City Car Transport is happy to offer its wide range of services.We provide our customers with all kinds of auto shipping services and different options of transport types: open or enclosed, as well as Door-to-Door and Expedited car shipping. We ship both running and non-running vehicles. Professional industry-experts, as well as the facilities that comply with the industry quality standards, will make your shipping experience enjoyable!</p>"
        },
    ];

    const randomIndex = Math.floor(Math.random() * testCities.length);
    const city = testCities[randomIndex];

    const renderDescription = () => {
        return { __html: city.description };
    };

    return (
        <section className={classes.currentCitySection}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.currentCity}>
                        <h1 className={classes.cityName}>{city.name}</h1>
                        <Image
                            src={city.image}
                            alt="city image"
                            className={classes.cityimage}
                            width={900}
                            height={405}
                        />
                        <div dangerouslySetInnerHTML={renderDescription()} className={classes.description} />
                        <div className={classes.callBar}>
                            <CityCallIcon />
                            <p>
                                Give us a call at the number <Link href="tel:123123">(929)445-0222</Link> to get more information. We will be happy to deliver the best services to you!
                            </p>
                        </div>
                    </div>
                    <div className={classes.latestCitys}>
                        <h1 className={classes.otherCitys}>
                            <ArrowCityIcon />
                            Other Cities
                        </h1>
                        <CityCard
                            cityName={city.name}
                            description={city.description}
                            imagePath={city.image}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { CurrentCity };
