import React from 'react'
import {Center, Heading,Box,Link } from "@chakra-ui/react"


function Header() {
    return (
        <>
        <Box bg="#E6DDC4" w="100%" p={8}>
            <Center>
            <Link href={"/"}> 
            <Heading color="#483434">Caps Generator</Heading> 
            </Link>
                </Center>
                </Box>
                <br/><br/>
                </>
        
    )
}

export default Header;
