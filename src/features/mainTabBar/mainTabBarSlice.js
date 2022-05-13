import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabSelected: 0,
};

const mainTabBarSlice = createSlice({
    name: 'mainTabBar',
    initialState,
});

console.log(mainTabBarSlice);