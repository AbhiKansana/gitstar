import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex
        maxW={"600px"}
        m="auto"
        py='50px'
        justifyContent={"space-between"}
      >
        <Link to='/all'>
        <Button
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          colorScheme="yellow"
        >
          All
        </Button>
        </Link>

        <Link to='/html'>
        <Button
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          colorScheme="yellow"
        >
          HTML
        </Button>
        </Link>

        <Link to='/css'>
        <Button
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          colorScheme="yellow"
        >
          CSS
        </Button>
        </Link>

        <Link to='javascript'>
        <Button
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          colorScheme="yellow"
        >
          JavaScript
        </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
