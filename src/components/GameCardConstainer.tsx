import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardConstainer = ({ children }: Props) => {
  return (
    <Box
      width="260px"
      boxShadow={"0px 0px 20px -2px #888888"}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardConstainer;
