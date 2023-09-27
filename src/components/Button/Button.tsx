import styled from "styled-components";

export const Button = styled.button`
  padding: 21px 28px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  background-color: ${({ theme }) => theme.color.bg};
  border: 2px solid ${({ theme }) => theme.color.border};
  cursor: pointer;
`;
