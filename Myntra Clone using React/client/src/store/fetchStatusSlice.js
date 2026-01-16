import { createSlice} from "@reduxjs/toolkit"


const fetchStatusSlice=createSlice({
  name:'fetchStatus',
  initialState:{
    fetchDone:false,//false means Pending and true means Done
    curretlyFetching:false,
  },
  reducers:{
    markFetchDone:(state)=>{
       state.fetchDone = true;
    },
    markFetchingStarted:(state) =>{
      state.curretlyFetching = true;
    },
    markFetchingFinished:(state) =>{
       state.curretlyFetching = false;
    }
  }
});

export const fetchStatusActions = fetchStatusSlice.actions
export default fetchStatusSlice;

