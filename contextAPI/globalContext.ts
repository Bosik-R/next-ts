import { createContext, useContext } from 'react';

export const GlobalContext = createContext<PostsContextTypes>({
  singleNews: 
});

export const useGlobalContext = () => useContext(GlobalContext);
