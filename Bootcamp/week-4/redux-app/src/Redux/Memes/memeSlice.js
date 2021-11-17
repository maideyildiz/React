import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


export const getMemesAsync=createAsyncThunk('Memes/getMemesAsync',
async()=>{
    const res=await fetch('https://api.imgflip.com/get_memes');
    const result= await res.json();
    return result.data.memes;
}
)
export const memeSlice=createSlice({
    name: 'memes',
    initialState:{
        items:[],
        isLoading:false,
        error:null,
    },
    reducers:{
    },
    extraReducers:{
        [getMemesAsync.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getMemesAsync.fulfilled]:(state,action) =>{
            state.items=action.payload;
            state.isLoading=false;
        },
        [getMemesAsync.rejected]:(state,action) =>{
            state.isLoading=false;
            state.error=action.error.message;
        }
    },
});
export default memeSlice.reducer;