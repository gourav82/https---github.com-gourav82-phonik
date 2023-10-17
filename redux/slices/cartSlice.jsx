import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartList:[],
    total:0
}
const userCart = createSlice({
    name: "cartItem",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const find = state.cartList.findIndex(item=>item.id===action.payload.id)
            if(find>=0){
                state.cartList[find].quantity +=1
            }else{
               const product ={...action.payload, quantity:1}
                state.cartList.push(product);
            }
            userCart.caseReducers.updateQuantity(state, action);
        },
        decrease:(state,action)=>{
            const dec = state.cartList.findIndex(item=>item.id===action.payload.id)
            if(state.cartList[dec].quantity>1){
                state.cartList[dec].quantity -=1
            }else{
                const nextCart = state.cartList.filter((item)=>item.id !== action.payload.id);
                state.cartList = nextCart;
            }
            userCart.caseReducers.updateQuantity(state, action);

        },
        removieItem:(state, action)=>{
        const nextCart = state.cartList.filter((item)=>item.id !== action.payload);
        state.cartList = nextCart;
        userCart.caseReducers.updateQuantity(state, action);
        },
        //method to update update quantity in cart after any change
        updateQuantity:(state, action)=>{
            var total = 0;
            state.cartList.forEach(element => {
                    total+= element.quantity
                });
            state.total = total;
        }
    }
})


export const {addToCart,removieItem,decrease} = userCart.actions;
export default userCart.reducer;