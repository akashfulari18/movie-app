import SingleCard from "@/components/SingleCard";
import { Box, Flex, Table, Th, Tr, Thead, Tbody } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import SingleWatch from "../../components/SingleWatch";

const Watchlist = ({ data }) => {
  return (
    <div>
      <h1>Watchlist page</h1>
      <Flex>
        <Table border={"1px solid black"}>
          <Thead>
            <Tr>
              <Th>sr.no</Th>
              <Th>Title</Th>
              <Th>Diector</Th>
              <Th>Poster</Th>
              <Th>Rating</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <Tr key={item.id}>
                <SingleWatch item={item} />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>

      {}
    </div>
  );
};

export default Watchlist;

export async function getServerSideProps() {
  let data = await axios.get(`http://localhost:8080/watchlist`);
  return {
    props: {
      data: data.data,
    },
  };
}
