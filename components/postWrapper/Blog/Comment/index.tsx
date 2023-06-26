import { InputUI } from '@/components/ui/InputUI';
import { ButtonUI } from '@/components/ui/ButtonUI';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import classes from './index.module.css';

interface IFormData {
    name: string;
    email: string;
    phone: string;
    comment: string;
    checkbox: boolean;
};

const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required().matches(
        /[A-z0-9]+@{1}[A-z0-9]+\.[A-z]{2,}$/,
      'Invalid email'
    ),
    comment: yup.string().required(),
    checkbox: yup.bool().oneOf([true])
});

const Comment = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: IFormData) => {
        alert(JSON.stringify(data, undefined, 2));
    };

    return (
        <div className={classes.postComment}>
            <h2 className={classes.postCommentTitle}>Leave a Reply</h2>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <InputUI
                    classN='border-top-square'
                    name='name'
                    placeholder='Name *'
                    bg='#FFFFFF'
                    registerOption={{ minLength: 2 }}
                    register={register}
                    error={errors.name?.message && errors.name?.message.length > 30 ? 'check again: error' : errors.name?.message}
                />
                <InputUI
                    classN='border-top-square'
                    name='email'
                    placeholder='Email Address *'
                    bg='#FFFFFF'
                    registerOption={{ minLength: 2 }}
                    register={register}
                    error={errors.email?.message && errors.email?.message.length > 30 ? 'check again: error' : errors.email?.message}
                />
                <InputUI
                    classN='border-top-square'
                    name='phone'
                    placeholder='Phone Number *'
                    bg='#FFFFFF'
                    registerOption={{ minLength: 2 }}
                    register={register}
                    error={errors.phone?.message && errors.phone?.message.length > 30 ? 'check again: error' : errors.phone?.message}
                />
                <div className={classes.wrapperSubmit}>
                    <textarea
                        wrap="soft"
                        placeholder='Your comment here...'
                        className={classes.comment}
                        {...register('comment', { minLength: 2 })}
                    />
                    <span className={classes.error}>{errors.comment?.message && errors.comment?.message.length > 30 ? 'check again: error' : errors.comment?.message}</span>
                    <ButtonUI
                        classN='transparent'
                        text='Post Comment'
                        width='max-content'
                        type='submit'
                    />
                </div>
                <div className={classes.wrapperCheckbox}>
                    <label className={classes.checkbox}>
                        <input
                            id='uniqe-1'
                            type="checkbox"
                            {...register('checkbox')}
                        />
                        <span className={classes.checkmark} />
                    </label>
                    <span className={classes.error}>
                        {errors.checkbox?.message}
                    </span>
                    <label
                        htmlFor='uniqe-1'
                        className={classes.emailSaveText}
                    >
                        Save my name, email, and website in this browser for the next time I comment
                    </label>
                </div>
            </form>
        </div>
    );
};

export { Comment };