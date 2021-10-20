import { ChakraProvider,Button } from '@chakra-ui/react'
import React from 'react'
import axios from "axios";
import Home from './components/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Callback from './components/Callback';
import TabsComp from './components/TabsComp';
import { ApolloProvider } from '@apollo/client';
import client from './client'

const App = () => {
   

    return (
        <>
         <ApolloProvider client={client}>
         <Router>
        <ChakraProvider>
         
              <Route path="/" exact component={Home} />
              <Route path="/callback" component={TabsComp} />
         
        </ChakraProvider>
        </Router>
        </ApolloProvider>
        </>
    )
}

export default App
