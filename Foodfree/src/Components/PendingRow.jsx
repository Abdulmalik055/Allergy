
import { Tr, Td, ButtonGroup, Button } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function PendingRow(props) {

  const navigat = useNavigate()
    const [id , setID] = useState([])
    const [RequestStatus , setRequestStatus]=useState("")

    const [data, setData] = useState([]);   

    
  const handleDelete = (id) => {
    console.log(props.id +"cc");
    const id2 = props.id;
    
     axios.delete(`https://food-free.onrender.com/FoodFreeRouter/DeleteFoodFree/${id2}`,{
      headers: {
        // return { Authorization: 'Bearer ' + user.accessToken };
       authorization: 'Bearer '+  localStorage.getItem("token"),
      
     },
    }).then((res) => {
      console.log("Deleted item", res);
      setData(data.filter((item) => item.id !== id));
    });
    navigat(`/read`)
  };


    useEffect(() => {
      console.log(localStorage.getItem("id"));
      setID(localStorage.getItem("id"))
      

  }, [])

  const upDateData = async()=>{
    setRequestStatus("true");
    console.log(props.id +"cc");
    const id2 = props.id;
await axios.post(`http://localhost:8000/FoodFreeRouter/FoodFreeUpdate/${id2}`, {

headers: {
  // return { Authorization: 'Bearer ' + user.accessToken };
 authorization: 'Bearer '+  localStorage.getItem("token"),

}
}
,
{
  RequestStatus,
})
console.log("update");
navigat("/read")
  }

  return (
    <Tr>
      <Td>{props.id}</Td>
      <Td>{props.Food_Free_Name}</Td>
      <Td>{props.FoodDescription}</Td>
      <Td>{props.FoodType}</Td>
      <Td>{props.AllergyStatus}</Td>
      
      <Td>
      <ButtonGroup variant="outline" spacing="6">
      <Button colorScheme="blue" onClick={upDateData}>قبول</Button>
     
      <Button colorScheme="red" onClick={handleDelete}>رفض</Button>
    </ButtonGroup>
      </Td>
    </Tr>
  );
}

export default PendingRow;
