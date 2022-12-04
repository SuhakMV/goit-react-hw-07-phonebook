import styled from 'styled-components';

export const Box = styled.div`
  align-items: center;
  justify-content: center;
  min-width: 320px;
  padding: 15px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: lightslategrey;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: inherit;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: azure;
  margin: 0;
  margin-right: auto;
`;

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: peachpuff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;

  :hover {
    background-color: cadetblue;
    color: azure;
  }
`;
