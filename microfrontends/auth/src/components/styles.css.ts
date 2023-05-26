import styled from "styled-components";

const StyledGreeting = styled("div")`
  padding-top: 30px;
  width: 100%;
  font-size: 40px;
  text-align: center;
`;

const StyledAuthForm = styled("div")`
  height: 350px;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  alight-item: center;
`;

const StyledLink = styled("div")`
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: blue;
  cursor: pointer;
`;

export { StyledGreeting, StyledAuthForm, StyledLink };
