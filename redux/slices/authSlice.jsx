import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const setAuthHanlder = createAsyncThunk(
    "auth/setAuthHanlder",
    async (authData) => {
        localStorage.setItem("token", authData.token)
        cookies.set('token', authData.token, { path: '/' });
        cookies.set('userId', authData.customer.entity_id, { path: '/' });
        return authData;
    }
);
export const setCheckUser = createAsyncThunk(
    "auth/setCheckUser",
    async (value) => {
        return value;
    }
);
//get user from local storage
//  const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
     user:  null,
    message:"",
    error:"",
    loding:false,
    token:"",
    isAuthenticated: false,
}
const authRegSlice = createSlice({
    name:"registration",
    initialState,
    reducers:{
         userData:(state, action)=>{
            state.user = action.payload;
            localStorage.setItem("register",JSON.stringify(state, action))
         },
         logoutUser:(state,action)=>{

            localStorage.setItem("isAuthenticated", false);
             window.location.href = "/cart";

         }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(setCheckUser.fulfilled, (state, action) => {
            const storedUser = JSON.parse(localStorage.getItem('register'));
            if(storedUser.user.find((ele)=>(ele.email == action.payload.user || ele.mobile == action.payload.user) && (ele.password == action.payload.password))){
                
                state.isAuthenticated = true;
                localStorage.setItem("isAuthenticated", true);
            }else
              state.isAuthenticated = false;
            //  state.entities.push(action.payload)
        })
      },
    // extraReducers:{
    //     [setAuthHanlder.fulfilled]:(state,action)=>{
           
    //     },
    //     [setCheckUser.fulfilled]:(state,action)=>{
    //         const storedUser = JSON.parse(localStorage.getItem('register'));
    //         if(storedUser.user.find((ele)=>(ele.email == action.payload.user || ele.mobile == action.payload.user) && (ele.password == action.payload.password))){
                
    //             state.isAuthenticated = true;
    //             localStorage.setItem("isAuthenticated", true);
    //         }else
    //           state.isAuthenticated = false;
    //     },
    // }
});

export const {userData,logoutUser} = authRegSlice.actions
export default authRegSlice.reducer