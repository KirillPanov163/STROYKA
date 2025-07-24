import { userReducer, myWorkReducer, metaDataReducer, faqReducer, contactsReducer } from "@/entities";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
    myWork: myWorkReducer,
    metaData: metaDataReducer,
    faq: faqReducer,
    contacts: contactsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;