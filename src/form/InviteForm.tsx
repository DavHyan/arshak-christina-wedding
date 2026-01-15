'use client';

import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Button from 'Button/Button';
import './InviteForm.css';

// import Button from '../../Button/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Անունը պետք է պարունակի առնվազն 2 նիշ')
    .required('Անունը պարտադիր է'),
  phone: yup
    .string()
    .matches(
      /^\+374\d{8}$/,
      'Հեռախոսահամարը պետք է լինի +374 XX-XXX-XXX ձևաչափով'
    )
    .required('Հեռախոսահամարը պարտադիր է'),
  guestsCount: yup
    .number()
    .typeError('Հյուրերի քանակը պետք է լինի թիվ')
    .positive('Հյուրերի քանակը պետք է լինի դրական')
    .integer('Հյուրերի քանակը պետք է լինի ամբողջ թիվ')
    .required('Հյուրերի քանակը պարտադիր է'),
  isVisiting: yup
    .string()
    .oneOf(['true', 'false'], 'Պետք է ընտրեք Այո կամ Ոչ')
    .required('Այցելությունը պարտադիր է'),
  bride_groom: yup
    .string()
    .oneOf(['Փեսա', 'Հարս'], 'Պետք է ընտրեք հարսի կամ փեսայի')
    .required('Պարտադիր դաշտ'),
});

type FormData = yup.InferType<typeof schema>;

interface InviteFormProps {
  lang: string;
}

const InviteForm: React.FC<InviteFormProps> = ({ lang }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const BASE_URL = 'https://hraviratoms-server.onrender.com';
    try {
      const response = await fetch(
        `${BASE_URL}/api/arshak-qristine-wedding/create`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.message) {
        toast.success('Հայտը հաջողությամբ ուղարկվել է:');
        reset();
      } else {
        toast.error('Տեղի է ունեցել Սխալ:');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Տեղի է ունեցել Սխալ:');
    }
  };

  return (
    <section id="contact-form" className="invite-section">
      <div className="invite-card">
        <h2 className="invite-title">
          {lang === "ru" ? "Contact Us" : "Հետադարձ կապ"}
        </h2>
        <div className="dotted-divider" />
        <form onSubmit={handleSubmit(onSubmit)} className="invite-form">
          <div className="form-group">
            <label className="form-label">
              {lang === "ru" ? "Name *" : "Անուն *"}
            </label>
            <input
              type="text"
              {...register('name')}
              className="form-input"
              placeholder={lang === "ru" ? "Your Name" : "Ձեր անունը"}
            />
            <div className="error-container">
              <p className={`form-error ${errors.name ? 'visible' : ''}`}>{errors.name?.message || 'Անունը պարտադիր է'}</p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              {lang === "ru" ? "Phone *" : "Հեռախոսահամար *"}
            </label>
            <input
              type="tel"
              {...register('phone')}
              className="form-input"
              placeholder="+374 55 52 22 85"
            />
            <div className="error-container">
              <p className={`form-error ${errors.phone ? 'visible' : ''}`}>{errors.phone?.message || 'Հեռախոսահամարը պետք է լինի +374 XX-XXX-XXX ձևաչափով'}</p>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              {lang === "ru" ? "Number of guests *" : "Հյուրերի քանակը *"}
            </label>
            <input
              type="number"
              {...register('guestsCount')}
              className="form-input"
              placeholder={lang === "ru" ? "For example: 3" : "Օր.՝ 3"}
            />
            <div className="error-container">
              <p className={`form-error ${errors.guestsCount ? 'visible' : ''}`}>{errors.guestsCount?.message || 'Հյուրերի քանակը պարտադիր է'}</p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                {lang === "ru" ? "Can you attend the wedding?" : "Կարո՞ղ եք մասնակցել հարսանիքին։ *"}
              </label>
              <div className="radio-group">
                <label className="radio2 option-label">
                  <input
                    type="radio"
                    value="true"
                    {...register('isVisiting')}
                  />
                  <span className="dot" aria-hidden></span>
                  <span>{lang === "ru" ? "Yes" : "Այո"}</span>
                </label>

                <label className="radio2 option-label">
                  <input
                    type="radio"
                    value="false"
                    {...register('isVisiting')}
                  />
                  <span className="dot" aria-hidden></span>
                  <span>{lang === "ru" ? "No" : "Ցավոք՝ ոչ"}</span>
                </label>
              </div>
              <div className="error-container">
                <p className={`form-error ${errors.isVisiting ? 'visible' : ''}`}>{errors.isVisiting?.message || 'Այցելությունը պարտադիր է'}</p>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                {lang === "ru" ? "Who is inviting you?" : "Ու՞մ կողմից *"}
              </label>
              <div className="radio-group">
                <label className="radio2 option-label">
                  <input
                    type="radio"
                    value="Փեսա"
                    {...register('bride_groom')}
                  />
                  <span className="dot" aria-hidden></span>
                  <span>{lang === "ru" ? "Groom" : "Փեսա"}</span>
                </label>

                <label className="radio2 option-label">
                  <input
                    type="radio"
                    value="Հարս"
                    {...register('bride_groom')}
                  />
                  <span className="dot" aria-hidden></span>
                  <span>{lang === "ru" ? "Bride" : "Հարսի"}</span>
                </label>
              </div>
              <div className="error-container">
                <p className={`form-error ${errors.bride_groom ? 'visible' : ''}`}>{errors.bride_groom?.message || 'Պարտադիր դաշտ'}</p>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <Button type="submit" text={lang === "ru" ? "Send" : "Ուղարկել"} variant="dark" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default InviteForm;
