'use client';

import styles from './ContactForm.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { type SubmitHandler } from 'react-hook-form';
import isEmpty from 'lodash.isempty';
import { FormValues, WindowWithDataLayer } from '@/types';
import { Input } from '../elements/Input';
import { TextArea } from '../elements/TextArea';
import { Button } from '../elements/Button';
import toast, { Toaster } from 'react-hot-toast';
import { AlertSuccess } from '../notifications/AlertSuccess';

declare const window: WindowWithDataLayer;

export const ContactForm = ({ is_dark = false }) => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const {
        handleSubmit,
        formState: { errors },
        watch,
        control,
    } = useForm<FormValues>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldUnregister: false,
        defaultValues: {},
    });
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setError(null);
        setLoading(true);
        try {
            // await new Promise((resolve) => setTimeout(resolve, 2000));
            const res = await fetch('/api/contact-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                }),
            });
            if (res.status === 200) {
                // const json = await res.json();
                toast(
                    (t) => (
                        <AlertSuccess
                            title={`Received Message`}
                            description={`I have received your message and will get back to you shortly.`}
                            id={t.id}
                        />
                    ),
                    { duration: 1000000 }
                );
                setLoading(false);
            } else {
                console.log('error:', res);
            }
        } catch (error) {
            console.log('error:', error);
            // setLoading(false);
        }
    };
    const fields = watch();
    const disabled =
        Object.keys(fields)
            .filter((a) => a !== 'phone')
            .some((k) => fields[k] === '') ||
        !isEmpty(errors) ||
        isEmpty(fields);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles['input-wrapper']}>
                    <Input
                        id="name"
                        label="Name"
                        name="name"
                        type="text"
                        control={control}
                        errors={errors}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: 'Name is required',
                            },
                        }}
                        is_dark={is_dark}
                        placeholder="Enter your name"
                    />
                </div>
                <div className={styles['input-wrapper']}>
                    <Input
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        control={control}
                        errors={errors}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                            pattern: {
                                value:
                                    // eslint-disable-next-line no-control-regex
                                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: 'Email is invalid',
                            },
                        }}
                        is_dark={is_dark}
                        placeholder="Enter your email"
                    />
                </div>
                {/* <div className={styles['input-wrapper']}>
                    <Input
                        id="phone"
                        label="Phone (Optional)"
                        name="phone"
                        type="phone"
                        control={control}
                        errors={errors}
                        defaultValue=""
                        rules={{
                            required: {
                                value: false,
                                message: 'Phone is required',
                            },
                        }}
                        is_dark={is_dark}
                        placeholder="Enter your phone number"
                    />
                </div> */}
                <div className={styles['input-wrapper']}>
                    <TextArea
                        id="message"
                        label="How can I help?"
                        name="message"
                        intro="Write your message here."
                        control={control}
                        errors={errors}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: 'Message is required',
                            },
                        }}
                        is_dark={is_dark}
                        placeholder="How can I help? Ask me anything."
                    />
                </div>

                <Button
                    text="Submit"
                    is_submit={true}
                    disabled={disabled}
                    is_loading={loading}
                    has_click_event={true}
                    click_event={function () {
                        console.log('formSubmission clicked in ContactForm');
                        if (typeof window.dataLayer !== 'undefined') {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                event: 'formSubmission',
                            });
                        }
                    }}
                />
            </form>
            <Toaster />
        </div>
    );
};
