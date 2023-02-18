import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SingleCard = ({ item }) => {
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
    id,
    imdbRating,
    imdbVotes,
  } = item;
  const image = Images[1];
  
const router =useRouter()
  const handleAddToWathlist= async(movie)=>{
    await axios.post(`http://localhost:8080/watchlist`,movie)
    .then(()=>router.push("/watchlist"))
    .catch((er)=>console.log(er))
}

  return (
    <div>
      <Box objectFit={"contain"}>
        <Link href={`/${id}`}>
        <Image src={image} width={250} height={250} alt={Title} />
        </Link>
        <Flex justifyContent={"space-between"}>
          <Flex gap="0.5rem">
            <Text fontWeight={700}>Title: </Text>
            <Text>{item.Title}</Text>
          </Flex>

          <Text>Rating: {item.imdbRating}</Text>
        </Flex>
        <Flex justifyContent={"center"} p="0.5rem">

           <Button onClick={()=>handleAddToWathlist(item)}>Add To WatchList</Button>
        </Flex>
      </Box>
    </div>
  );
};

export default SingleCard;
