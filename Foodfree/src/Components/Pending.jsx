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

function Pending() {
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
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <ButtonGroup variant="outline" spacing="6">
                    <Button colorScheme="blue">قبول</Button>
                    <Button colorScheme="red">رفض</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Pending;
