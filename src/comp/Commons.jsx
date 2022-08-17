import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Center, Spinner, Grid } from "@chakra-ui/react";
import axios from "axios";
import Card from "../comp/Card";

const Common = ({ bhasa, page = 1 }) => {
  //  console.log({page})
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    axios
      .get(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${bhasa}&page=${page}&per_page=4`
      )
      .then((res) => {
        // console.log(res.data.items[0])
        setLoad(false);
        setData(res.data.items);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [page]);

  const arr = data?.map((item) => {
    return <Card key={item.id} info={item} />;
  });

  return (
    <>
      {load && (
        <Center
          position={"absolute"}
          left='50%'
          top='400px'
          
        >
          {" "}
          <Spinner
            textAlign="center"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}

      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}
        py="50px"
        gap={6}
      >
        {arr}
      </Grid>
    </>
  );
};

export default Common;
