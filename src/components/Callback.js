import { Flex ,Spinner,Stack,HStack,Button,Input,Text} from '@chakra-ui/react'
import React,{useState} from 'react'
import axios from "axios";
const Callback = () => {

    const [name,setName]=useState()
    const [fname,setFname]=useState()
    const [lname,setLname]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const [text,setText]=useState()

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
   
    const onSubmit=(e)=>{ 
        e.preventDefault() 
            axios.post('http://localhost:5000/contact',{
                name:name,
                fname:fname,
                lname:lname,
                email:email,
                phone:phone
            }).then(res=>{
                console.log(res.data)
                window.location.reload(false);
                    onLoading()
               
           

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
