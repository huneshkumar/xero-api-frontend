import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Home from './Home'
import Callback from './Callback'
import CreateInvoice from './CreateInvoice'
import PurchaseOrder from './PurchaseOrder'
const TabsComp = () => {
    return (
      <Tabs  isFitted my={4}>
      <TabList>
        
          <Tab height="36px" border="1px solid #BFBEBE" fontWeight="700" color="black" _selected={{ color: "white", bg: "black", borderColor: "gray" }}>Create Contact</Tab>
          <Tab height="36px" border="1px solid #BFBEBE" fontWeight="700" color="black" _selected={{ color: "white", bg: "black", borderColor: "gray" }}>Create Invoice</Tab>
          <Tab height="36px" border="1px solid #BFBEBE" fontWeight="700" color="black" _selected={{ color: "white", bg: "black", borderColor: "gray" }}>Create Purchase Order</Tab>
        

      </TabList>
      <TabPanels>
         
          <TabPanel p={0}>
        
             <Callback/>
          </TabPanel>

          <TabPanel p={0}>
         <CreateInvoice/>
          </TabPanel>
          <TabPanel p={0}>
         <PurchaseOrder/>
          </TabPanel>

     
      </TabPanels>
  </Tabs>
    )
}

export default TabsComp
