import { Title, PrimaryTitle } from './Title.styled';
import PropTypes from 'prop-types';

export const TitleBig = ({ children }) => {
  return <Title>{children}</Title>;
};

export const PrimaryTitles = ({ children }) => {
  return <PrimaryTitle>{children}</PrimaryTitle>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

PrimaryTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
