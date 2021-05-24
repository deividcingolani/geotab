import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  margin: 0 auto;
  border-bottom: 5px solid ${(props) => props.theme.COLORS.lightBlue};
  padding: 0 0 60px 0;
  align-items: center;
  width: 1140px;
`;

export const DescritionTitle = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.COLORS.blue};
  font-size: 54px;
`;

export const DescriptionContent = styled.p`
padding-left: 100px;
  line-height: 27px;
  margin: 0;
  color: ${(props) => props.theme.COLORS.black};
  font-size: 16px;
`;
