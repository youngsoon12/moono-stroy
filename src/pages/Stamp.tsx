import styled from 'styled-components';
import Container from '../components/css/Container';
import Header from '../components/form/Header';
import theme from 'styles/theme';
import { useParams, useNavigate } from 'react-router-dom';
export const Stamp = (props: any) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>{''}</Header>
      <CoffeImg></CoffeImg>
      <StampSection></StampSection>
    </Container>
  );
};
const CoffeImg = styled.div``;
const StampSection = styled.div``;
