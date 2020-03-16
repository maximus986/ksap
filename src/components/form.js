import React, { useState } from 'react';
import { SectionContainer } from './sectionContainer';
import { useThemeUI } from 'theme-ui';
import { useForm } from '../hooks/useForm';
import axios from 'axios';

const GOOGLE_FORM_NAME_ID = 'entry.1273178056';
const GOOGLE_FORM_ORG_ID = 'entry.751534368';
const GOOGLE_FORM_PHONE_ID = 'entry.1659232797';
const GOOGLE_FORM_EMAIL_ID = 'entry.1350179022';
const GOOGLE_FORM_WEBSITE_ID = 'entry.18113544';
const GOOGLE_FORM_MESSAGE_ID = 'entry.1597825015';
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLScBs7AuvNYQxelM3diHLZYhOpnvmW2rvCr84XIOt3cYGKaQjg/formResponse';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const DEFAULT_VALUE = {
  name: { value: '', error: '' },
  org: { value: '', error: '' },
  phone: { value: '', error: '' },
  email: { value: '', error: '' },
  website: { value: '', error: '' },
  message: { value: '', error: '' },
};

export const Form = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const stateSchema = DEFAULT_VALUE;

  const validationStateSchema = {
    name: {
      required: true,
    },
    org: {
      required: false,
    },
    phone: {
      required: true,
    },
    email: {
      required: true,
    },
    website: {
      required: false,
    },
    message: {
      required: false,
    },
  };

  const onSubmitForm = event => {
    sendMessage();
  };

  const sendMessage = () => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_NAME_ID, state.name.value);
    formData.append(GOOGLE_FORM_ORG_ID, state.org.value);
    formData.append(GOOGLE_FORM_PHONE_ID, state.phone.value);
    formData.append(GOOGLE_FORM_EMAIL_ID, state.email.value);
    formData.append(GOOGLE_FORM_WEBSITE_ID, state.website.value);
    formData.append(GOOGLE_FORM_MESSAGE_ID, state.message.value);
    setLoading(true);
    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData)
      .then(() => {
        setState(prevState => ({
          ...prevState,
          ...DEFAULT_VALUE,
        }));
        setLoading(false);
        setSubmitStatus(true);
        setTimeout(() => {
          setSubmitStatus(false);
        }, 2000);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
        setLoading(false);
        setSubmitStatus(false);
      });
  };

  const { state, handleOnChange, handleOnSubmit, disable, setState } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  const errorStyle = {
    color: 'red',
    fontSize: '13px',
  };

  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <SectionContainer
      sectionBgColor={colors.muted}
      sectionTitle="postanite član"
    >
      <div>
        {!loading && (
          <form onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="name">
                Ime i Prezime*
                <input
                  type="text"
                  name="name"
                  value={state.name.value}
                  onChange={handleOnChange}
                />
              </label>
              {state.name.error && <p style={errorStyle}>{state.name.error}</p>}
            </div>
            <div>
              <label htmlFor="org">
                Organizacija
                <input
                  type="text"
                  name="org"
                  value={state.org.value}
                  onChange={handleOnChange}
                />
              </label>
              {state.org.error && <p style={errorStyle}>{state.org.error}</p>}
            </div>
            <div>
              <label htmlFor="phone">
                Kontakt telefon*
                <input
                  type="text"
                  name="phone"
                  value={state.phone.value}
                  onChange={handleOnChange}
                />
              </label>
              {state.phone.error && (
                <p style={errorStyle}>{state.phone.error}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">
                Email*
                <input
                  type="email"
                  name="email"
                  value={state.email.value}
                  onChange={handleOnChange}
                />
              </label>
              {state.email.error && (
                <p style={errorStyle}>{state.email.error}</p>
              )}
            </div>
            <div>
              <label htmlFor="website">
                Web stranica
                <input
                  type="text"
                  name="website"
                  value={state.website.value}
                  onChange={handleOnChange}
                />
              </label>
              {state.website.error && (
                <p style={errorStyle}>{state.website.error}</p>
              )}
            </div>
            <div>
              <label htmlFor="message">
                Zašto želite da postanete član KSAP?
                <textarea
                  type="text"
                  name="message"
                  value={state.message.value}
                  onChange={handleOnChange}
                ></textarea>
              </label>
              {state.message.error && (
                <p style={errorStyle}>{state.message.error}</p>
              )}
            </div>
            <input type="submit" name="submit" disabled={disable} />
          </form>
        )}

        {submitStatus && <p>Vasa prijava je uspesno poslata</p>}
        {error && <p>Došlo je do greške, molimo Vas pokušajte ponovo.</p>}
      </div>
    </SectionContainer>
  );
};
