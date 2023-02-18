import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <Box display="flex" gap="1rem" justifyContent="center" alignItems="center" borderBottom={"2px solid black"}>
      <Link href="/">Home</Link>
      <Link href={"/watchlist"}>Watchlist</Link>
    </Box>
  )
}

export default Navbar