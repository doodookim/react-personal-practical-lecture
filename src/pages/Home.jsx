import AddForm from 'components/AddForm';
import Header from 'components/Header';
import LetterList from 'components/LetterList';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      {/* 여기에 네비게이트 바 넣으면 됨! */}
      <Header />
      <AddForm />
      <LetterList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
