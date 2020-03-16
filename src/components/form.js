/** @jsx jsx */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { SectionContainer } from './sectionContainer';
import { jsx, useThemeUI } from 'theme-ui';
import { useForm } from '../hooks/useForm';
import axios from 'axios';
import sectionBg from '../images/postanite-clan-bg.png';
import { Spinner } from 'theme-ui';

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
      validator: {
        regEx: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
        error: 'Uneli ste nevalidan broj telefona',
      },
    },
    email: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        error: 'Uneli ste nevalidnu email adresu',
      },
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

  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Background {...{ colors }}>
      <SectionContainer sectionTitle="postanite član">
        <FormContainer>
          <SignUpForm onSubmit={handleOnSubmit}>
            <Col>
              <FormGroup>
                <Label
                  htmlFor="name"
                  sx={{ color: 'primary', fontFamily: 'body' }}
                >
                  Ime i Prezime*
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={state.name.value}
                    onChange={handleOnChange}
                    sx={{ color: 'primary', fontFamily: 'body' }}
                  />
                </Label>
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
                <Label
                  htmlFor="org"
                  sx={{ color: 'primary', fontFamily: 'body' }}
                >
                  Organizacija
                  <Input
                    type="text"
                    name="org"
                    id="org"
                    value={state.org.value}
                    onChange={handleOnChange}
                    sx={{ color: 'primary', fontFamily: 'body' }}
                  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label
                  htmlFor="phone"
                  sx={{ color: 'primary', fontFamily: 'body' }}
                >
                  Kontakt telefon*
                  <Input
                    type="text"
                    name="phone"
                    value={state.phone.value}
                    onChange={handleOnChange}
                    sx={{ color: 'primary', fontFamily: 'body' }}
                  />
                </Label>
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
                <Label
                  htmlFor="email"
                  sx={{ color: 'primary', fontFamily: 'body' }}
                >
                  Email*
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={state.email.value}
                    onChange={handleOnChange}
                    sx={{ color: 'primary', fontFamily: 'body' }}
                  />
                </Label>
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
                <Label
                  htmlFor="website"
                  sx={{ color: 'primary', fontFamily: 'body' }}
                >
                  Web stranica
                  <Input
                    type="text"
                    name="website"
                    id="website"
                    value={state.website.value}
                    onChange={handleOnChange}
                    sx={{ color: 'primary', fontFamily: 'body' }}
                  />
                </Label>
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
        </FormContainer>
      </SectionContainer>
    </Background>
  );
};

const Background = styled.div`
  background-color: ${props => props.colors.muted};
  @media (min-width: 992px) {
    background-image: url(${sectionBg});
    background-repeat: no-repeat;
    background-position: 105% -66%;
  }
  @media (min-width: 1200px) {
    background-position: 100% 26%;
  }background-position: 100% 0;
  }
`;

const FormContainer = styled.div`
  padding: 0 1.6rem;
  @media (min-width: 576px) {
    width: 60%;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    padding: 0 6rem;
    width: 67%;
    margin: 0 auto 0 0;
  }
  @media (min-width: 1600px) {
    padding: 0 29rem;
    width: 90%;
  }
`;

const SignUpForm = styled.form`
  @media (min-width: 768px) {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const Col = styled.div`
  flex-basis: 48%;
  &:last-of-type {
    min-height: 490px;
  }
  @media (min-width: 992px) {
    flex-basis: 30%;
    &:last-of-type {
      margin-left: 7rem;
    }
  }
  @media (min-width: 1200px) {
    flex-basis: 38%;
    &:last-of-type {
      margin-left: 11rem;
    }
  }
  @media (min-width: 1600px) {
    flex-basis: 29%;
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

const Input = styled.input`
  margin-top: 1em;
  padding: 1rem 0.5rem;
  font-size: 1.5rem;
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
