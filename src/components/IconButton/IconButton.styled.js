import styled from 'styled-components';

export let IconButton = styled.button`
  margin: 0 0 0 10px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  fill: white;
  font: inherit;
  background-color: #ff6b08;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: green;
  }
`;
