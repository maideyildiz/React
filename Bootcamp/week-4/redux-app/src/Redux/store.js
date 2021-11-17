import {configureStore} from "@reduxjs/toolkit";
import memeSlice from "./Memes/memeSlice";

export const store=configureStore({
    reducer:{
        caps: memeSlice, 
    },
});