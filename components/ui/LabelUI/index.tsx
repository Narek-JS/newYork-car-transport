import { Exclamation } from '@/public/assets/svgs/Exclamation';
import { TooltipUI } from '../TooltipUI';
import classes from './index.module.css';

interface IProps {
    text: string;
    icon?: boolean;
    toolti?: boolean;
    tooltiPosition?: 'top' | 'right' | 'bottom' | 'left';
    htmlFor?: string;
};

const LabelUI: React.FC<IProps> = ({
    text,
    icon = false,
    toolti = false,
    tooltiPosition = 'right',
    htmlFor
}) => {
    if(icon && toolti) {
        return (
            <label
                className={classes.label}
                {...(htmlFor && { htmlFor })}
            >
                {text}
                <TooltipUI content={text} direction={tooltiPosition} >
                    <Exclamation />
                </TooltipUI>
            </label>
        );
    };

    return (
        <label
            className={classes.label}
            {...(htmlFor && { htmlFor })}
        >
            {text}
            { icon && <Exclamation /> }
        </label>
    )
}

export { LabelUI };