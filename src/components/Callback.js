import { Flex ,useToast,Spinner,Stack,HStack,Button,Input,Text} from '@chakra-ui/react'
import React,{useState} from 'react'
import axios from "axios";
import {GET_CONTACTS,ADD_CONTACTS} from '../client'
import { gql, useQuery,useMutation} from '@apollo/client';
const Callback = () => {
    const toast=useToast()
    const [name,setName]=useState()
    const [fname,setFname]=useState()
    const [lname,setLname]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const [contactID,setContactID]=useState()
    const [text,setText]=useState()
    const productData=useQuery(GET_CONTACTS)
    const [addProfile,{loading:addLoading}]=useMutation(ADD_CONTACTS)
    const onLoading=()=>{
        setName("")
        setFname("")
        setLname("")
        setEmail("")
        setPhone("")

        return(
          
                <Flex justify="center" align="center" minH="100vh" w="100%" >
                  <Stack spacing={4} p={8} borderRadius="lg">
            
                    <Spinner thickness="4px"
                             speed="0.65s"
                             emptyColor="gray.200"
                             color="navy"
                             size="xl" />
                  </Stack>
                </Flex>
        )
    }


    if (productData.loading||addLoading) return (
        <Flex justify="center" align="center" minH="100vh" w="100%" >
          <Stack spacing={4} p={8} borderRadius="lg">
  
            <Spinner thickness="4px"
                     speed="0.65s"
                     emptyColor="gray.200"
                     color="navy"
                     size="xl" />
          </Stack>
        </Flex>
    )
   
    


        
    
    console.log(typeof(productName))
       const onProfileADD=(contactId)=>{
        const profileData={
            name:fname+" "+lname,
            contact_id:contactId
            
          }
           addProfile({
            variables:{
                object:profileData
            }
           }).then(res => {
        
            productData.refetch()
            setName("")
            setFname("")
            setLname("")
            setEmail("")
            setPhone("")
            setContactID("")
           
            
            toast({
                title: "contact Added",
                description: "added ",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            
                 })
                 .catch(err => {
                    toast({
                        title: 'error',
                        description: err,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      })
              console.log(err.message) })
       }
    
    
    
       const onSubmit=(e)=>{ 
        e.preventDefault() 
            axios.post('http://localhost:5000/contact',{
                name:name,
                fname:fname,
                lname:lname,
                email:email,
                phone:phone
            }).then(res=>{
                console.log(res.data.contacts[0].contactID)
                setContactID(res.data.contacts[0].contactID)
                onProfileADD(res.data.contacts[0].contactID)
                // window.location.reload(false);
                //     onLoading()
               
           

            })
           
           .catch(error=>{
               console.log(error)
           })
        }

   

    return (
        <Flex display="Flex" alignItems="center" direction="row" justifyContent="center"w="100%">
            <Stack alignItems="center" mt="20px">
                <Text mb="10px" fontSize="15px" fontWeight="500">Create Contact</Text>
                <HStack>
                    <Text>Name</Text>
                    <Input defaultValue={name} onChange={(e)=>{setName(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>First Name</Text>
                    <Input defaultValue={fname} onChange={(e)=>{setFname(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>Last Name</Text>
                    <Input defaultValue={lname} onChange={(e)=>{setLname(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>Email</Text>
                    <Input defaultValue={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>Phone</Text>
                    <Input defaultValue={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                </HStack>

                <Button onClick={onSubmit} >Submit</Button>
            </Stack>

            <Text>{text}</Text>

        </Flex>
    )
}

export default Callback
