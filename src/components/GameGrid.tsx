import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardConstainer from "./GameCardConstainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConstainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardConstainer>
          ))}
        {data.map((game) => (
          <GameCardConstainer>
            <GameCard key={game.id} game={game} />
          </GameCardConstainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
