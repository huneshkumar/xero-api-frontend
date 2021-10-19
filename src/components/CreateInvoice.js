import { Flex ,Spinner,Stack,HStack,Button,Input,Text} from '@chakra-ui/react'
import React,{useState} from 'react'
import axios from "axios";
const CreateInvoice = () => {

    const [contactId,setContactId]=useState()
    const [amount,setAmount]=useState()
    const [quantity,setQuantity]=useState()
    const [refrence,setRefrence]=useState()
    const [datevalue,setDatevalue]=useState()
    const [dueDate,setDueDate]=useState()
    const onLoading=()=>{
        setContactId()
        setAmount()
        setQuantity()
        setRefrence()
        setDatevalue()
        setDueDate()
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
            axios.post('http://localhost:5000/invoice',{
               contactId:contactId,
               amount:amount,
               quantity:quantity,
               refrence:refrence,
               dueDate:dueDate,
               datevalue:datevalue
            }).then(res=>{
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
                <Text mb="10px" fontSize="15px" fontWeight="500">Create Invoice</Text>
                <HStack>
                    <Text>Contact ID</Text>
                    <Input  defaultValue={contactId} onChange={(e)=>{setContactId(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>Amount</Text>
                    <Input defaultValue={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>Quantity</Text>
                    <Input defaultValue={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>Date</Text>
                    <Input defaultValue={datevalue} type="date"  onChange={(e)=>{setDatevalue(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>Due Date</Text>
                    <Input defaultValue={dueDate} type="date"  onChange={(e)=>{setDueDate(e.target.value)}}/>
                </HStack>
                <HStack>
                    <Text>refrence</Text>
                    <Input defaultValue={refrence} placeholder="Web design" onChange={(e)=>{setRefrence(e.target.value)}}/>
                </HStack>
           

                <Button onClick={onSubmit} >Submit</Button>
            </Stack>

      

        </Flex>
    )
}

export default CreateInvoice
