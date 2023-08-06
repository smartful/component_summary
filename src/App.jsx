import { Container } from './components/styles/Container.styled';
import { DetailsCard } from './components/styles/DetailsCard/DetailsCard.styled';
import ItemCard from './components/ItemCard';
import { ResultBubble } from './components/styles/ResultCard/ResultBubble.styled';
import { ResultCard } from './components/styles/ResultCard/ResultCard.styled';
import { ResultDetails } from './components/styles/ResultCard/ResultDetails.styled';
import { Text } from './components/styles/Text.styled';

// images
import ReactionIcon from './assets/icon-reaction.svg';
import MemoryIcon from './assets/icon-memory.svg';
import VerbalIcon from './assets/icon-verbal.svg';
import VisualIcon from './assets/icon-visual.svg';

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
          <ItemCard svgIcon={ReactionIcon} color="red" backgroundColor="#f3beb2" name="Reaction" result={80} />
          <ItemCard svgIcon={MemoryIcon} color="yellow" backgroundColor="#f3beb2" name="Memory" result={92} />
          <ItemCard svgIcon={VerbalIcon} color="green" backgroundColor="#f3beb2" name="Verbal" result={61} />
          <ItemCard svgIcon={VisualIcon} color="blue" backgroundColor="#f3beb2" name="Visual" result={72} />
        </DetailsCard>
      </Container>
    </>
  );
};

export default App;
