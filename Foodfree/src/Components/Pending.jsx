import { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6486d1bcbeba6297278f395e.mockapi.io/Login');
      setData(response.data);
      console.log(response.data);
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
            <Tbody>
            {data.map((item, index) => (
              
                <PendingRow
                  key={index}
                  productName={item.id}
                  productNumber={item.name}
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
