
import { useNavigate, useState } from "react";
import { Tr, Td, ButtonGroup, Button } from "@chakra-ui/react";
import axios from "axios";

function PendingRow(props) {
  
  const [data, setData] = useState([]);

  async function update(e) {
    let RequestStatus = false;

    if (e.target.id=="accept") {
      RequestStatus = true;
    }
    const header = `Authorization:Bearer ${localStorage.getItem("token")}`;
    const res = await axios.post(
      `https://food-free.onrender.com/FoodFreeRouter/FoodFreeUpdate/${props.data._id}`,
      {
        Food_Free_Name: props.data.Food_Free_Name,
        FoodDescription: props.data.FoodDescription,
        FoodType: props.data.FoodType,
        AllergyStatus: props.data.AllergyStatus,
        RequestStatus,
      },
      {
        headers: { Authorization: header },
      }
    );
  }

  // const Navigate = useNavigate();
  async function handleDelete() {

    const res = axios.delete(
        `https://food-free.onrender.com/FoodFreeRouter/DeleteFoodFree/${props.data._id}`,
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log("Deleted item", res);
        const pendingTbody = document.getElementById('pendingTbody')
        pendingTbody.removeChild(document.getElementById(props.rowID))
        // setData(data.filter((item) => item.id2 !== id2));
      });
    //  Navigate(`/pending`);
  };

  return (
    <Tr id={props.rowID}>
      <Td>{props.productName}</Td>
      <Td>{props.productNumber}</Td>
      <Td>
        <ButtonGroup variant="outline" spacing="6">
          <Button id={props.accept} colorScheme="blue" onClick={update}>
            قبول
          </Button>
          <Button id={props.deny} colorScheme="red" onClick={update}>
            رفض
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            حذف
          </Button>
        </ButtonGroup>
      </Td>
    </Tr>
  );
}

export default PendingRow;
