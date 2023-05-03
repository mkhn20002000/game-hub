import { Card, Image, Heading, CardBody } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card
      boxShadow={"0px 0px 20px -2px #888888"}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
