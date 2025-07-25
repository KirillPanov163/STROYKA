import { userReducer, myWorkReducer, metaDataReducer, faqReducer, contactsReducer, servicesReducer } from "@/entities";
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    user: userReducer,
    myWork: myWorkReducer,
    metaData: metaDataReducer,
    faq: faqReducer,
    contacts: contactsReducer,
    service: servicesReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
export const wrapper = createWrapper(() => store);