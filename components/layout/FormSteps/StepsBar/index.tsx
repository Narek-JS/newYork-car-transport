import { useAppSelector } from '@/store/hooks';
import { selectQuoteFormMobileStatus } from '@/store/quoteForm';
import { useMemo } from 'react';
import classNames from 'classnames';
import classes from './index.module.css';

type ActiveStep = 1 | 2 | 3 | 4;

interface IProps {
    activeStep: ActiveStep; 
};

interface IContentsStepsBar {
    id: ActiveStep;
    text: string;
};

const initialContentsStepsBar: Array<IContentsStepsBar> = [
    { id: 1, text: 'Select a root' },
    { id: 2, text: 'Select an Options' },
    { id: 3, text: 'Confirmation' },
    { id: 4, text: 'Get a Quote' },
];

const StepsBar: React.FC<IProps> = ({ activeStep }) => {
    const isOpen = useAppSelector(selectQuoteFormMobileStatus);
    
    const contentsStepsBar: Array<IContentsStepsBar> = useMemo(() => {
        if(isOpen) {
            const activeStapIndex = initialContentsStepsBar.findIndex(item => item.id === activeStep)
            const length = activeStapIndex > initialContentsStepsBar.length ? initialContentsStepsBar.length : activeStapIndex + 2;
            return initialContentsStepsBar.slice(activeStapIndex, length);
        };
        return initialContentsStepsBar
    }, [isOpen, activeStep]);

    return (
        <div className={classNames(classes.stepsBar, {
            [classes.quoteForm]: isOpen
        })}>
            { contentsStepsBar.map(({ id, text }) => (
                <div key={id} className={classNames(classes.step, {
                    [classes.activeStep]: activeStep === id
                })}>
                    <div className={classes.stepNumber}> 
                        {id}
                    </div>
                    <div className={classes.textWrapper}>
                        <span className={classes.text}>{text}</span>
                    </div>
                    { id !== contentsStepsBar[contentsStepsBar.length - 1].id && <div className={classes.row} /> }
                </div>
            ))}
        </div>
    );
};

export { StepsBar };