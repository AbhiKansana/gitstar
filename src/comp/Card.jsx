import { Box, Center, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { Link } from  "@chakra-ui/react"



const Card = ({info}) => {


  return (
   
    <Box
      maxW={'300px'}
      m='auto'
      p={"1rem"}
      py='30px'
      boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
    >
       <Link href={info.html_url}>
      <Image
        w="80%"
        m="auto"
        src={info.owner.avatar_url}
      />
      </Link>
      <Text noOfLines={1} textAlign={"center"} fontWeight="bold" mt="16px">
       {info.name}
      </Text>
      <Text textAlign={"center"} fontSize="1.2rem" fontWeight="bold" mt="10px">
        {info.language || "Javascript"}
      </Text>

      <Flex mt="14px" justifyContent={"space-between"}>
        <Flex>
          <Center>
            <Icon fontSize="1.25rem" color={"orange"} as={AiFillStar} />
          </Center>
          <Text fontSize={"13px"} fontWeight="bold">
            {info.stargazers_count} stars
          </Text>
        </Flex>
        <Flex>
          <Center>
            <Icon
              fontSize="1.25rem"
              fontWeight={"bold"}
              color={"skyblue"}
              as={CgGitFork}
            />
          </Center>
          <Text fontSize={"13px"} fontWeight="bold">
            {info.forks} forks
          </Text>
        </Flex>
      </Flex>
    </Box>
  
  );
};

export default Card;
