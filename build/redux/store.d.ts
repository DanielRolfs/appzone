export declare const store: import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, any>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
