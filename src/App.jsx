import LoadImages from "./AxiosApi";
import "./App.css";
import { createContext, useState } from "react";
import Form from './Form'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

export const photoContext = createContext();
const PhotoProvider = ({ children }) => {
  const [input, setInput] = useState('mountain');

  return (
    <photoContext.Provider value={{ input,setInput }}>
      {children}
    </photoContext.Provider>
  );
};
function App() {
  return (
    <BrowserRouter>
    <PhotoProvider>
    <h1>Snapshot</h1>
    <Routes>
    <Route exact path='/' element={<LoadImages/>} />
    </Routes>
   
      
    </PhotoProvider>
    </BrowserRouter>
  );
}

export default App;
