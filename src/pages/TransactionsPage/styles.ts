import styled from "styled-components";
import { Button } from "../../components/Button/Button";

export const TransactionsPageWrapper = styled.div`
  padding: 72px 15px;
`;

export const PageHeader = styled.header`
  position: relative;
  height: 60px;
  margin-bottom: 68px;
  ${Button} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme }) => theme.color.text};
  text-align: center;
  line-height: 60px;
`;
