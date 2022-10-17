import { LabelFind, FindInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <LabelFind>
    Find contacts by name
    <FindInput type="text" value={value} onChange={onChange}></FindInput>
  </LabelFind>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
