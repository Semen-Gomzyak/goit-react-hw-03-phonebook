import { Formik } from 'formik';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  AddButton,
  Label,
  InfoInput,
  InfoForm,
  ErrorInfo,
  Wrapper,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <InfoForm autoComplete="off">
        <Wrapper>
          <Label htmlFor="name">
            Name
            <InfoInput type="text" name="name" />
            <ErrorInfo name="name" component="div" />
          </Label>
        </Wrapper>

        <Wrapper>
          <Label htmlFor="number">
            Number
            <InfoInput type="tel" name="number" />
            <ErrorInfo name="number" component="div" />
          </Label>
        </Wrapper>
        <AddButton type="submit">Add contact</AddButton>
      </InfoForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
