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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  padding: 10px;
  width: 100%;
`;

export const Text = styled.p`
font-size: 18px;
  line-height: 1.15;
  color: azure;
  margin: 0;
  padding: 0;
  :before {
    content: '\u260E'" ";
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  padding: 1px 6px;
  margin-left: auto;
  border-radius: 7px;
  border: none;
  background-color: peachpuff;
  cursor: pointer;
  :hover {
    background-color: cadetblue;
    color: azure;
  }
`;

