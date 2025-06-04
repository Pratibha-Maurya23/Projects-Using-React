import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./ItemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./BagSlice";

const myntrStore = configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
  }
})


export const itemsActions = itemSlice.actions
export default myntrStore;