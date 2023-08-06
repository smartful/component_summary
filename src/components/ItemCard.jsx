import { DetailsBox } from './styles/DetailsCard/DetailsBox.styled';
import { ItemResult } from './styles/DetailsCard/ItemResult.styled';
import { Text } from './styles/Text.styled';

const ItemCard = ({ svgIcon, color, backgroundColor, name, result }) => {
  return (
    <ItemResult color={color} backgroundColor={backgroundColor}>
      <DetailsBox>
        <img src={svgIcon} alt={`${name} icon`} style={{ marginRight: '5px' }} />
        <Text size="1rem" weight="700" color={color}>
          {name}
        </Text>
      </DetailsBox>
      <DetailsBox>
        <Text size="1rem" color="#0c073d" weight="700" style={{ marginRight: '5px' }}>
          {result}
        </Text>
        <Text size="1rem" color="#777" weight="700">
          {' '}
          / 100
        </Text>
      </DetailsBox>
    </ItemResult>
  );
};

export default ItemCard;
