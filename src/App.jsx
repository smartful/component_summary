import { Container } from './components/styles/Container.styled';
import { DetailsCard } from './components/styles/DetailsCard.styled';
import { ResultBubble } from './components/styles/ResultBubble.styled';
import { ResultCard } from './components/styles/ResultCard.styled';
import { ResultDetails } from './components/styles/ResultDetails.styled';
import { Text } from './components/styles/Text.styled';

const App = () => {
  return (
    <>
      <Container>
        <ResultCard>
          <h2>Your Result</h2>
          <ResultBubble>
            <Text size="3rem" color="white" weight="700">
              76
            </Text>
            <Text size="1rem" color="#bbb">
              of 100
            </Text>
          </ResultBubble>
          <Text size="1.5rem" color="white" weight="700">
            Great
          </Text>
          <ResultDetails>
            <Text size="1rem" color="#bbb">
              You scored higher than 65% of the people who have taken these tests.
            </Text>
          </ResultDetails>
        </ResultCard>
        <DetailsCard>
          <h2>Summary</h2>
        </DetailsCard>
      </Container>
    </>
  );
};

export default App;
