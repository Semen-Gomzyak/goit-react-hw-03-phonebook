import styled from 'styled-components';

export const LabelFind = styled.label`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.3;
`;

export const FindInput = styled.input`
  margin-left: 20px;
  font-size: 25px;
  width: 280px;
  padding: 5px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  &:focus {
    border-color: #ff6b08;
    transition-property: border-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
