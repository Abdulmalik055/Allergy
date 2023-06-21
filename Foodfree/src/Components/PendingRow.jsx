import React from 'react';
import { Tr, Td, ButtonGroup, Button } from '@chakra-ui/react';
import axios from 'axios'

function PendingRow(props) {
    async function update(e){
        let RequestStatus = false
        console.log(props.data);

        if(e.target.id.startsWith('accept')){
            RequestStatus = true
        }
        const header = `Authorization:Bearer ${localStorage.getItem('token')}`
        const splitId = e.target.id.split('_')
        const id = splitId[1]
        const res = await axios.post(`https://food-free.onrender.com/FoodFreeRouter/FoodFreeUpdate/${props.data._id}`,{
            Food_Free_Name:props.data.Food_Free_Name,
            FoodDescription:props.data.FoodDescription,
            FoodType:props.data.FoodType,
            AllergyStatus:props.data.AllergyStatus,
            RequestStatus
        },{
            headers: {Authorization:header},
          })
    }

  return (
    <Tr>
      <Td>{props.productName}</Td>
      <Td>{props.productNumber}</Td>
      <Td>
        <ButtonGroup variant="outline" spacing="6">
          <Button id={props.accept} colorScheme="blue" onClick={update}>قبول</Button>
          <Button id={props.deny} colorScheme="red" onClick={update}>رفض</Button>
        </ButtonGroup>
      </Td>
    </Tr>
  );
}

export default PendingRow;
