import React from 'react';
import { Tr, Td, ButtonGroup, Button } from '@chakra-ui/react';

function PendingRow(props) {
  return (
    <Tr>
      <Td>{props.productName}</Td>
      <Td>{props.productNumber}</Td>
      <Td>
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="blue">قبول</Button>
          <Button colorScheme="red">رفض</Button>
        </ButtonGroup>
      </Td>
    </Tr>
  );
}

export default PendingRow;
