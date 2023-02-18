import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image as Imag,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Simple({ data }) {
  const {
    Actors,
    Director,
    Genre,
    Images,
    Language,
    Plot,
    Poster,
    Metascore,
    Rated,
    Released,
    Response,
    Runtime,
    Title,
    Year,
    Country,
    id,
    imdbID,
    Award,
    imdbRating,
    imdbVotes,
    Writer,
  } = data;

const router = useRouter()
  const handleAddToWathlist= async(movie)=>{
       await axios.post(`http://localhost:8080/watchlist`,movie)
       .then(()=>router.push("/watchlist"))
       .catch((er)=>console.log(er))
  }

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Flex flexWrap={"wrap"} gap={"1rem"} margin={"auto"}>
            {Images.map((el) => (
              <Image src={el} width={300} height={100} alt={Title} />
            ))}
          </Flex>
          
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
             {Title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
             {Genre}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }} textAlign={{base:"left",md:"center"}}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
               <span style={{fontSize:"1.5rem",fontWeight:"700"}}> Plot:</span> {Plot}
                 </Text>
              <Text fontSize={"lg"}>
                Writer : {Writer}
              </Text>
              <Text fontSize={"lg"}>
                Actors : {Actors}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
               Description
              </Text>

              <SimpleGrid columns={{ base: 2, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Year:  {Year}</ListItem>
                  <ListItem>Rated : {Rated}</ListItem>{" "}
                  <ListItem>Released :  {Released}</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>RunTime: {Runtime}</ListItem>
                  <ListItem>Genre : {Genre}</ListItem>
                  <ListItem>Director: {Director}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Movie Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Language: {Language}
                  </Text>{" "}
                  
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Country: {Country}
                  </Text>{" "}
                
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Award: {Award}
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    MetaScore: {Metascore}
                  </Text>{" "}
                  
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    imdbRating: {imdbRating}
                  </Text>{" "}
                  
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    imdbVotes: {imdbVotes}
                  </Text>{" "}
                 
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    imdbID: {imdbID}
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={()=>handleAddToWathlist(data)}
          >
            Add to Watchlist
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export async function getServerSideProps(context) {
  let id = context.query.id;

  let prod = await axios.get(`http://localhost:8080/movies/${id}`);
  console.log(prod);
  return {
    props: {
      data: prod.data,
    },
  };
}
