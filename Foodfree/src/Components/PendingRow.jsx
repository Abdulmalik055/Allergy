import React from 'react';
import { useNavigate, useEffect } from 'react';
import { Tr, Td, ButtonGroup, Button } from '@chakra-ui/react';
import axios from 'axios'

function PendingRow(props) {
  const Navigate = useNavigate()


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

    const handleDelete = (id) => {
      console.log(props.id +"cc");
      const id2 = props.id;
      
       axios.delete(`http://localhost:8000/FoodFreeRouter/DeleteFoodFree/${id2}`,{
        headers: {
          // return { Authorization: 'Bearer ' + user.accessToken };
         authorization: 'Bearer '+  localStorage.getItem("token"),
        
       },
      }).then((res) => {
        console.log("Deleted item", res);
        setData(data.filter((item) => item.id !== id));
      });
      Navigate(`/read`)
    };
  
  
      useEffect(() => {
        console.log(localStorage.getItem("id"));
        setID(localStorage.getItem("id"))
        
  
    }, [])

  return (
    <Tr>
      <Td>{props.productName}</Td>
      <Td>{props.productNumber}</Td>
      <Td>
        <ButtonGroup variant="outline" spacing="6">
          <Button id={props.accept} colorScheme="blue" onClick={update}>قبول</Button>
          <Button id={props.deny} colorScheme="red" onClick={update}>رفض</Button>
          <Button colorScheme="red" onClick={handleDelete}>حذف</Button>
        </ButtonGroup>
      </Td>
    </Tr>
  );
}

export default PendingRow;
