import { Container } from '../ui/container';
import { CalculatedStep } from '../CalculatedStep';
import Link from 'next/link';
import classes from './index.module.css';

const CalculatedFee: React.FC = () => {

    const calculatedSteps = [
        {
            imagePath: '/assets/images/calculatedStepImage1.png',
            text: 'The size and weight of your vehicle'
        },
        {
            imagePath: '/assets/images/calculatedStepImage2.png',
            text: 'Distance between vehicle pickup and delivery '
        },
        {
            imagePath: '/assets/images/calculatedStepImage3.png',
            text: 'Choosing open or enclosed car transport'
        },
        {
            imagePath: '/assets/images/calculatedStepImage4.png',
            text: 'The condition of your vehicle'
        },
    ];

    return (
        <section className={classes.calculatedFee}>
            <Container>
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        How we calculated your transport fee 
                    </h2>
                    <div className={classes.steps}>
                        { calculatedSteps.map((step, index) => (
                            <CalculatedStep key={index} {...step} />
                        ))}
                    </div>
                    <Link href='/faq' className={classes.link}>FAQs</Link>
                </div>
            </Container>
        </section>
    );
};

export { CalculatedFee };