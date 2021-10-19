import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import {Flex,Box,Stack,Input,Button,Text, Image,Checkbox} from '@chakra-ui/react'
import axios from "axios";
import Logo from '../assets/images/xero.png'

const Home = () => {
    function redirect(url) {
        document.location = url;
      }
    const callApi=()=>{
       axios.post('https://quiet-hollows-10626.herokuapp.com/')
       .then(res=>{
          console.log(res.data) 
          redirect(res.data)
       }).catch(err=>{
            console.log(err)
       })
    }

    return (
        <>
       <Flex w="100%" h="100vh" justifyContent="center" direction="column" alignItems="center" bg="white" >
        <Image w="400px" src={Logo} mb="92px"  />
        {/* <Input placeholder="username" fontFamily="Nunito Sans" onChange={onUserChange} mb="17px" h="51px" w="462px" bg="white"  />
        <Input placeholder="password" fontFamily="Nunito Sans" onChange={onPassChange} mb="17px" h="51px" w="462px" bg="white" /> */}
        <Flex w="462px" mb="25px" display="flex" direction="row" justifyContent="space-between">
           <Stack direction="row">
               <Checkbox/>
           <Text color="black" fontFamily="Nunito Sans"  fontWeight="700px" fontSize="13px">
            Remember My Username
            </Text>
           </Stack>
            <Text color="black" fontFamily="Nunito Sans" fontWeight="700px" fontSize="13px">
            Forgotten Your Password?
            </Text>

        </Flex>
        <Button fontFamily="Nunito Sans" bg="black"    onClick = {callApi} color="white">
            Authorize
        </Button>
       </Flex>
      
        </>
    )
}

export default Home
