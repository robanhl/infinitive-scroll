import React from "react";
import notFound from "../../../assets/notfound.png";
// import PropTypes from 'prop-types' import {TextField, Submit} from
// '../Styled'
import { Box } from "grid-styled";
import {
  Image,
  ContainerItem,
  Overlay,
  ButtonFavorite,
  Text,
  Hr
} from "../Styled";

const Item = ({ item, addFavourite }) => (
  <Box width={[1 / 2, 1 / 3]} pb={4}>
    <ContainerItem>
      {item.image ? (
        <Image src={item.image} alt={item.name} />
      ) : (
        <Image src={notFound} alt="Image not found" />
      )}
      <Overlay>
        <Text>{item.name}</Text>
        <Hr />
        <ButtonFavorite onClick={() => addFavourite(item.name)}>
          Favourite
        </ButtonFavorite>
      </Overlay>
    </ContainerItem>
  </Box>
);

export default Item;
