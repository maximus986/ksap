/** @jsx jsx */
import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import { jsx, Spinner } from 'theme-ui';
import { useForm } from '../../hooks/useForm';
import { Field } from './field';
import { formConfig } from './form-config';
import { DEFAULT_VALUE } from './form-default-value';
import { validationStateSchema } from './valdation-schema';

export const Form = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const stateSchema = DEFAULT_VALUE;

  const onSubmitForm = () => {
    sendMessage();
  };

  const sendMessage = () => {
    const formData = new FormData();
    formData.append(formConfig.GOOGLE_FORM_NAME_ID, state.name.value);
    formData.append(formConfig.GOOGLE_FORM_ORG_ID, state.org.value);
    formData.append(formConfig.GOOGLE_FORM_PHONE_ID, state.phone.value);
    formData.append(formConfig.GOOGLE_FORM_EMAIL_ID, state.email.value);
    formData.append(formConfig.GOOGLE_FORM_WEBSITE_ID, state.website.value);
    formData.append(formConfig.GOOGLE_FORM_MESSAGE_ID, state.message.value);
    setLoading(true);
    axios
      .post(formConfig.CORS_PROXY + formConfig.GOOGLE_FORM_ACTION_URL, formData)
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

  return (
    <SignUpForm onSubmit={handleOnSubmit}>
      <Col>
        <FormGroup>
          <Field
            name="name"
            id="name"
            value={state.name.value}
            label="Ime i Prezime*"
            onChange={handleOnChange}
          />
          {state.name.error && (
            <p
              sx={{
                color: 'secondary',
                fontFamily: 'body',
                fontSize: '1.2rem',
                mt: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              {state.name.error}
            </p>
          )}
        </FormGroup>
        <FormGroup>
          <Field
            name="org"
            id="org"
            value={state.org.value}
            label="Organizacija"
            onChange={handleOnChange}
          />
        </FormGroup>
        <FormGroup>
          <Field
            name="phone"
            id="phone"
            value={state.phone.value}
            label="Kontakt telefon*"
            onChange={handleOnChange}
          />
          {state.phone.error && (
            <p
              sx={{
                color: 'secondary',
                fontFamily: 'body',
                fontSize: '1.2rem',
                mt: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              {state.phone.error}
            </p>
          )}
        </FormGroup>
        <FormGroup>
          <Field
            name="email"
            id="email"
            value={state.email.value}
            label="Email*"
            onChange={handleOnChange}
          />
          {state.email.error && (
            <p
              sx={{
                color: 'secondary',
                fontFamily: 'body',
                fontSize: '1.2rem',
                mt: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              {state.email.error}
            </p>
          )}
        </FormGroup>
        <FormGroup>
          <Field
            name="website"
            id="website"
            value={state.website.value}
            label="Web stranica"
            onChange={handleOnChange}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label
            htmlFor="message"
            sx={{ color: 'primary', fontFamily: 'body' }}
          >
            Zašto želite da postanete član KSAP?
            <Textarea
              type="text"
              name="message"
              id="message"
              value={state.message.value}
              onChange={handleOnChange}
              sx={{ color: 'primary', fontFamily: 'body' }}
            ></Textarea>
          </Label>
        </FormGroup>
        <Button
          type="submit"
          name="submit"
          disabled={disable}
          sx={{
            backgroundColor: 'primary',
            color: 'background',
            fontFamily: 'body',
          }}
        >
          {loading ? (
            <Spinner
              title="Loading"
              size={24}
              strokeWidth={4}
              sx={{ color: 'heading' }}
            />
          ) : (
            <span>Pošalji</span>
          )}
        </Button>
        {submitStatus && (
          <p
            sx={{
              color: 'primary',
              fontFamily: 'body',
              fontSize: '2rem',
              mt: '1rem',
              fontWeight: 'bold',
            }}
          >
            Vasa prijava je uspesno poslata!
          </p>
        )}
        {error && (
          <p
            sx={{
              color: 'secondary',
              fontFamily: 'body',
              fontSize: '2rem',
              mt: '1rem',
              fontWeight: 'bold',
            }}
          >
            Došlo je do greške, molimo Vas pokušajte ponovo.
          </p>
        )}
      </Col>
    </SignUpForm>
  );
};

const SignUpForm = styled.form`
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    text-align: left;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Col = styled.div`
  /* flex-basis: 48%; */
  &:last-of-type {
    min-height: 490px;
  }
  @media (min-width: 992px) {
    flex-basis: 48%;
    &:last-of-type {
      margin-left: 7rem;
    }
  }
  @media (min-width: 1200px) {
    /* flex-basis: 38%; */
    &:last-of-type {
      margin-left: 11rem;
    }
  }
  @media (min-width: 1600px) {
    /* flex-basis: 29%; */
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  min-height: 106px;
`;

const Label = styled.label`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

const Textarea = styled.textarea`
  margin-top: 1em;
  padding: 1rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  height: 300px;
  resize: none;
`;

const Button = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 2rem 0;
  width: 100%;
  font-size: 2rem;
  transition: 0.3s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.7;
  }
  cursor: pointer;
`;
