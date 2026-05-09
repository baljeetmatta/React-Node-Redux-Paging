import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
type ProductStateType={

    pagedData:{
        [key:number]:ProductType[]

    }

}
const initialState:ProductStateType={
    pagedData:{}
}
const productSlice=createSlice({
    name:'productSlice',
    initialState,
    reducers:{
        setPageData:(state,action:PayloadAction<{
            page:number,
            products:ProductType[]
        }>)=>{

            state.pagedData[action.payload.page]=action.payload.products;
            //pagedData[1]=products[];
            //pageData[2]=products


        }
        
    
    }
    
})

export default productSlice.reducer;
export const {setPageData}=productSlice.actions;
