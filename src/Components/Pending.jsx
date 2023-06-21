import { useState, useEffect } from 'react';
import {
  // Box,
  TableContainer,
  // TableCaption,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Table,
  Button,
  ButtonGroup,
  Box
} from "@chakra-ui/react";
import PendingRow from './PendingRow';
import axios from 'axios';


function Pending() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const header = `Authorization:Bearer ${localStorage.getItem('token')}`
    try {
      const response = await axios.get('https://food-free.onrender.com/FoodFreeRouter/ListFoodfree', {
        headers: header
      });
      console.log(response);
      if(!response.data.errorMessage){
        setData(response.data.FoodFreeData);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <>
      <Box>
        <TableContainer className="table">
          <Table>
            <Thead>
              <Tr>
                <Th>اسم المنتج</Th>
                <Th>رقم المنتج</Th>
                <Th>الإجراء</Th>
              </Tr>
            </Thead>
            <Tbody id='pendingTbody'>
            {data.map((item, index) => (
                <PendingRow
                  key={index}
                  rowID={item._id}
                  productName={item.Food_Free_Name}
                  productNumber={item.FoodDescription}
                  data={item}
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
