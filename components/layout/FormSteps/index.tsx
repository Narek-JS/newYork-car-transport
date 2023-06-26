import { useCallback, useRef, useState } from 'react';
import { FormFromTo } from './FormFromTo';
import { FormVehicles } from './FormVehicles';
import { FormConfirmation } from './FormConfirmation';
import { FormUserInfo } from './FormUserInfo';
import { StepsBar } from './StepsBar';
import { IFormData, TypeFormData, TypeNamesFormData, initialValuesFromToForm, initialValuesUserInfoForm, initialValuesVehicleForm } from '@/model/form';
import classes from './index.module.css';
import Link from 'next/link';
import { AnimeMotion } from '@/components/ui/AnimeMotion';

const FormSteps: React.FC = () => {
    const [ step, setStep ] = useState<1 | 2 | 3 | 4>(1);

    const wholeFormDataRef = useRef<IFormData>({
        from_to: initialValuesFromToForm,
        form_vehicles: initialValuesVehicleForm,
        form_user_info: initialValuesUserInfoForm
    });
    
    const updateGeneralFormData = useCallback((name: TypeNamesFormData, updatedFormData: TypeFormData) => {
        wholeFormDataRef.current[name] = updatedFormData as any;
    }, [step]);

    return (
        <div className={classes.formSteps}>
            <StepsBar activeStep={step}/>
            <div className={classes.content}>
                <div className={classes.form}>
                    { step === 1 && (
                        <FormFromTo
                            initialValues={wholeFormDataRef.current.from_to}
                            setStep={setStep}
                            updateGeneralFormData={updateGeneralFormData}
                        />
                    )}
                    { step === 2 && (
                        <FormVehicles
                            initialValues={wholeFormDataRef.current.form_vehicles}
                            setStep={setStep}
                            updateGeneralFormData={updateGeneralFormData}
                        />
                    )}
                    { step === 3 && (
                        <FormConfirmation
                            formData={wholeFormDataRef.current}
                            setStep={setStep}
                        />
                    )}
                    { step === 4 && (
                        <FormUserInfo
                            initialValues={wholeFormDataRef.current.form_user_info}
                            setStep={setStep}
                            updateGeneralFormData={updateGeneralFormData}
                        />
                    )}
                </div>

                <div className={classes.textes}>
                    <div className={classes.explore}>
                        <p>
                            Explore <span>Indianapolis</span> Car <span>Transport</span>
                        </p>
                    </div>
                    <div className={classes.seccondLinkTitle}>
                        <p>
                            Door-to-Door Delivery and Full Insurance Benefits
                        </p>
                        <Link href={'/'}>Read More {">"}</Link>
                    </div>
                    <Link href={'contact-us'} className={classes.toContactUs}>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export { FormSteps };