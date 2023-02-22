import styled from 'styled-components';
import { Form } from './components/Form/Form';
import backgroundImage from './assets/image/background-circles.svg';

export const App = () => {
  return (
    <StyledApp>
      <Form />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: no-repeat -102px -95px url(${backgroundImage}) #eaf2f2;
`;
