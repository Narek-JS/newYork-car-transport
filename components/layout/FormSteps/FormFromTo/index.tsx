import { useFormik } from 'formik';
import { LabelUI } from '@/components/ui/LabelUI';
import { IFromToFormData, SetStepFunction, UpdateGeneralFormData } from '@/model/form';
import { validationSchemaFormFromTo } from '@/constants/validationSchema';

import classes from './index.module.css';
import { FormikErrors } from '@/components/ui/FormikError';

interface IProps {
    setStep: SetStepFunction;
    updateGeneralFormData: UpdateGeneralFormData;
    initialValues: IFromToFormData
};

const FormFromTo: React.FC<IProps> = ({ setStep, updateGeneralFormData, initialValues }) => {

    const formik = useFormik<IFromToFormData>({
        initialValues,
        onSubmit: (values) => {
            updateGeneralFormData('from_to', values);
            setStep(2);
        },
        validationSchema: validationSchemaFormFromTo
    });

    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <h2 className={classes.fromTitle}>
                Get A <span>FREE</span> Quote
            </h2>

            <div className={classes.inputWrapper}>
                <LabelUI text='From' toolti={true} icon={true}/>
                <input
                    className={classes.input}
                    autoComplete='off'
                    placeholder='City,State or ZIP'
                    onChange={formik.handleChange}
                    value={formik.values.from}
                    name='from'
                />
                <FormikErrors {...{ classes, formik, name: 'from' }} />
            </div>
            <div className={classes.inputWrapper}>
                <LabelUI text='To' toolti={true} icon={true}/>
                <input
                    className={classes.input}
                    autoComplete='off'
                    placeholder='City,State or ZIP'
                    onChange={formik.handleChange}
                    value={formik.values.to}
                    name='to'
                />
                <FormikErrors {...{ classes, formik, name: 'to' }} />
            </div>
            <button className={classes.btn} type='submit'> Continue </button>
        </form>
    );
};

export { FormFromTo };