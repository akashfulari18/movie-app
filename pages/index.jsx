import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import SingleCard from '@/components/SingleCard'
import { Box, Flex } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({movies}) {
  console.log(movies)
  return (
    <>
       <h2>home page</h2>
       <Flex justifyContent="center" flexWrap={"wrap"} >

        {
          movies && movies?.map((item)=>(
            <Box key={item.id} w={"250px"} border="1px solid red" p="0.5rem" m="0.5rem">
              <SingleCard item={item}/>
            </Box>
          ))
        }

       </Flex>
    </>
  )
}

export async function getServerSideProps(){

  let data =  await axios.get(`http://localhost:8080/movies`)

  return{
    props:{
      movies:data.data
    }
  }

}