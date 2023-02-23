import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  width: clamp(371px, 43%, 496px);
  padding: 20px;
`;
const Title = styled.h1`
  justify-self: center;
  font-weight: 400;
  font-size: clamp(24px, 3.75vw, 40px);
  letter-spacing: -0.3px;
  color: #000000;
`;
const Subtitle = styled.p`
  justify-self: center;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: clamp(24px, 3vw, 32px);
  letter-spacing: -0.3px;
  color: #756c6c91;
`;
const Total = styled.p`
  font-weight: 500;
  font-size: clamp(18px, 3vw, 24px);
  letter-spacing: -0.3px;
  color: #000000;
`;
const InputGroup = styled.div`
  display: grid;
  grid-gap: clamp(15px, 3vw, 32px);
`;

export { StyledForm, Title, Subtitle, Total, InputGroup };
