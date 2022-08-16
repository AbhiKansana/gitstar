import React, { useEffect, useState } from 'react'
import { Box, SimpleGrid , Center, Spinner } from '@chakra-ui/react'
import axios from 'axios' 
import Card from '../comp/Card'

const Css = () => {

    const[data,setData] = useState([])
    const[load,setLoad] = useState(false)

    useEffect(() => { 
      setLoad(true)
        axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:css&page=1&per_page=10`)
        .then(res=>{
            // console.log(res.data.items[0])
            setLoad(false)
            setData(res.data.items)
        })
        .catch(err=>{
            console.log("error",err)
        })
    }, [])


    const arr = data?.map(item=>{
        return (
            <Card key={item.id} info={item} />
        )
    })
    

  return (
    <>
    { load && <Center> <Spinner
     textAlign='center'
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
       /></Center>}
   <SimpleGrid pt='20px' py='50px' minChildWidth='250px' spacing='40px'>
      {arr}
  </SimpleGrid>
  </>
  )
}

export default Css