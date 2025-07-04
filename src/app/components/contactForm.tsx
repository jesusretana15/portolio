'use client';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs: React.FC = () => {
    const t = useTranslations('HomePage');
    const form = useRef<HTMLFormElement>(null);
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                'service_ruj7y1b',
                'template_qfizr78',
                form.current,
                'GncQYTus1vfQriqfw'
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current?.reset();
                    setIsSent(true);
                    setTimeout(() => setIsSent(false), 4000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <>
            <AnimatePresence>
                {isSent && (
                    <motion.section
                        key="email-sent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        <div className="mb-4 bg-green-100 text-green-800 text-sm font-medium px-4 py-3 rounded-lg shadow">
                            ✅ {t('successMessage')}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            <form className="mb-6" ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                    <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('contactName')}</label>
                    <input type="text" name="user_name" id="user_name" required placeholder={t('namePlaceholder')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>

                <div className="mb-6">
                    <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('contactEmail')}</label>
                    <input type="email" name="user_email" id="user_email" required placeholder={t('emailPlaceholder')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('contactMessage')}</label>
                    <textarea id="message" name="message" rows={4} required placeholder={t('messagePlaceholder')}
                        className="block w-full p-2.5 text-sm bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>

                <button type="submit"
                    className="text-white  w-full font-medium rounded-lg text-sm px-5 py-2.5 bg-gradient-to-r from-stone-900 to-gray-900  hover:scale-101 focus:ring-4 focus:outline-none focus:ring-gray-300 border border-gray-400/80" >
                    {t('contactSend')}
                </button>
            </form>
        </>
    );
};
