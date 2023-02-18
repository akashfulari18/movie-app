import { Box, Button, Flex, Tbody, Text, Tr,Td } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleWatch = ({ item }) => {
  // console.log(item)
  const {
    Actors,
    Director,
    Genre,
    Images,
    Language,
    Plot,
    Poster,
    Rated,
    Released,
    Response,
    Runtime,
    Title,
    Year,
    Rating,
    id,
    imdbRating,
    imdbVotes,
  } = item;
  const image = Images[1];
  

  const handleDel=async(Mid)=>{
      await axios.delete(`http://localhost:8080/watchlist/${Mid}`)
      .then((res)=>alert("are you sure "))
      .catch((er)=>console.log(er))
  }

  return (
    <>
     
        <Td>{id}</Td>
        <Td>{Title}</Td>
        <Td>{Director}</Td>
        <Td><Image src={image} width={100} height={100} alt={Title}/></Td>
        <Td>{Released}</Td>
        <Td><Button onClick={()=>handleDel(id)}>Remove </Button></Td>
     
    </>
  );
};

export default SingleWatch;
