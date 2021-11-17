import { useEffect} from "react";
import React from 'react'
import {SimpleGrid, Box,Image,Spinner, Center,Text, Link} from "@chakra-ui/react"
import {useSelector,useDispatch} from 'react-redux';
import {getMemesAsync} from '../../Redux/Memes/memeSlice'

function MemeList() {
    const dispatch=useDispatch();
    const memes=useSelector(state=> state.caps.items);

    useEffect(() => {
       dispatch(getMemesAsync());
    }, [dispatch])



    if(!memes) return <Spinner />

    return (
        <SimpleGrid columns={3} spacing={10} p={5}>
            {memes.map((meme)=>(
                <Link href={`/single/${meme.id}`} key={meme.id}>
                <Box bg="#E6DDC4" height="auto" borderRadius="5px" >
                    <Center><Text fontSize="2xl">{meme.name}</Text></Center>
                    <br/>
                    <Image src={meme.url} alt={meme.url} />
                    </Box>
                    </Link>
            ))}
            
            </SimpleGrid>

    )
}

export default MemeList