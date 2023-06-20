import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  // Box,
  TableContainer,
  // TableCaption,
  Thead,
  Th,
  Tr,
  Tbody,
  // Td,
  Table,
  // Button,
  // ButtonGroup,
  Box
} from "@chakra-ui/react";
import PendingRow from './PendingRow';

function Pending() {

  const [data, setData] = useState([]);



  console.log(localStorage.getItem("token"));

   // Redirect to the other page.
   const url = "https://food-free.onrender.com/FoodFreeRouter/ListFoodfree"
 
   React.useEffect(() => {
      axios.get(url,{
        headers: {
       
         authorization: 'Bearer '+  localStorage.getItem("token"),
        
       },
      }).then(res=>{

        setData(res.data.FoodFreeData);
         
       // console.log(res.data);
        console.log(res.data);
        console.log(res.data.FoodFreeData[0]._id+" c");

        localStorage.getItem("FullUserName")
        localStorage.getItem("id")
      })
  
    }, [])
 


    return (
      <>
        <Box>
          <TableContainer className="table">
            <Table>
              <Thead>
                <Tr>
                  <Th>اسم المنتج </Th>
                  <Th>وصف المنتج</Th>
                  <Th>هل يسبب حساسية</Th>
                  <Th>نوع المنتج</Th>
                  <Th>الإجراء</Th>
                </Tr>
              </Thead>
              <Tbody>

              {data.map((item) => (
                
                  <PendingRow
                    key={item.id}
                    id={item._id}
                    productName={item.Food_Free_Name}
                    FoodDescription={item.FoodDescription}
                    FoodType={item.FoodType}
                    AllergyStatus={item.AllergyStatus}
                    
                  />
            ))}
            
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
}

export default Pending;
