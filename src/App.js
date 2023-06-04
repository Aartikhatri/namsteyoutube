import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

// importing Components

import Body from './Components/Body/Body';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/Body/MainContainer';
import WatchPage from './Components/Body/WatchPage';
import Shorts from './Components/Body/Shorts';



const AppRouter = createBrowserRouter([{
   path : "/" ,
   element : <Body /> , 
   children : [
    {
     path : '/' , 
     element : <MainContainer />
   },
   {
    path : '/watch' ,
    element : <WatchPage />
   },
   {
    path : '/shorts' ,
    element : <Shorts />
   }
  ]
}])

function App() {
  return (
    <>
      <Provider store={store}>
        

         <RouterProvider router={AppRouter}  />
    
      </Provider>
      </>
  );
}

export default App;
