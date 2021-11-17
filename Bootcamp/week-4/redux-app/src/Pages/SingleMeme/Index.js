import { useEffect} from "react";
import {useParams} from "react-router-dom";
import React from 'react'
import {Box,Image,Center,Text,Spinner,Grid,Input ,Button,SimpleGrid,FormLabel} from "@chakra-ui/react"
import {useSelector,useDispatch} from 'react-redux';
import {getMemesAsync} from '../../Redux/Memes/memeSlice'
import { useFormik } from "formik";
import { useState } from "react";


function SingleMeme() {
    const dispatch=useDispatch();
    const {id}=useParams();
    const memes=useSelector(state=> state.caps.items);
    const [newMeme, setNewMeme] = useState();
    useEffect(() => {
        dispatch(getMemesAsync());
     }, [dispatch])

     const formik = useFormik({
        initialValues: {
          text0: "",
          text1: "",
        },
        onSubmit: ({ text0, text1 }) => {
          const url = `https://api.imgflip.com/caption_image?template_id=${id}&username=apiusage&password=111_fake&text0=${text0}&text1=${text1}`;
          fetch(url)
            .then((response) => response.json())
            .then((result) => setNewMeme(result.data.url));
              
        },
      });


      if (newMeme)
      return (
        <Box bg="#E6DDC4" height="auto" borderRadius="5px" >
        <Center>
        <Image src={newMeme} alt={newMeme} /></Center></Box>
      );


    const single=memes.find((meme)=>meme.id===id);
    if(!single) return <Spinner />

    return (
        
        <SimpleGrid columns={2} spacing={0} p={50}>
            <Box bg="#E6DDC4" height="auto" borderRadius="5px" >
                    <Center><Text fontSize="2xl">{single.name}</Text></Center>
                    <br/>
                    <Image src={single.url} alt={single.url} /></Box>
                    <form onSubmit={formik.handleSubmit}>
            <Grid
              
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid >
              <FormLabel htmlFor="name">Text0</FormLabel>
                <Input 
                  id="text0"
                  name="text0"
                  label="text0"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid >
              <FormLabel htmlFor="name">Text1</FormLabel>
                <Input 
                  id="text1"
                  name="text1"
                  label="text1"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid >
                <Button type="submit">Generate Your Meme</Button>
              </Grid>
            </Grid>
          </form>
                    
        </SimpleGrid>
    )
}

export default SingleMeme;
