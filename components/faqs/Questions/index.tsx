import { Container } from '@/components/ui/container';
import { useState } from 'react';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { sliceDangerousHTMLString } from '@/helper/strings';
import { IQuestions } from '@/model/faqs';
import classNames from 'classnames';
import classes from './index.module.css';

interface IProps {
    title: string;
    subTitle: string;
    questions: Array<IQuestions>
};

interface IFaqQuestions extends IQuestions {
    active: boolean;
};

const Questions: React.FC<IProps> = ({ questions, title, subTitle}) => {

    const [ faqsQuestions, setFaqsQuestions ] = useState<Array<IFaqQuestions>>(
        questions.map(_ => ({..._, active: false}))
    );

    const toogleQuestion = (index) => {
        setFaqsQuestions(faqsQuestions.map((question, i) => ({
            ...question,
            active: index === i && question.active === false
        })));
    };

    return (
        <section className={classes.questionsSection}>
            <Container>
                <h1 className={classes.title}>{title}</h1>
                <h5 className={classes.subTitle}>{subTitle}</h5>
                <div className={classes.wrapperQuestions}>
                    { faqsQuestions.map(({ answer, question, active }, index) => (
                        <div className={classes.questionList} key={index}>
                            <div
                                className={classNames(classes.question, {
                                    [classes.activeQuestion]: active
                                })}
                                onClick={() => toogleQuestion(index)}
                            >
                                <p>{question}</p>
                                <i className={classes.icon}>
                                    <ArrowIcon {...(active && { rotate: 180 })}/>
                                </i>
                            </div>
                            <div
                                className={classNames(classes.answer, {
                                    [classes.active]: active,
                                    [classes.inActive]: !active
                                })}
                                dangerouslySetInnerHTML={sliceDangerousHTMLString({__html: answer})}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { Questions };