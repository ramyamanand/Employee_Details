import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Heading,
} from "@chakra-ui/react";

const DataTable = ({ columns, data, onInputChange, colorScheme }) => {
  return (
    <Box p={4}>
      <Table variant="striped" colorScheme={colorScheme}>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.accessor} color="white" bg="blue.500">
                {column.Header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              {columns.map((column) => (
                <Td key={column.accessor}>
                  {column.editable ? (
                    <Input
                      type={column.type}
                      value={row[column.accessor]}
                      onChange={(e) =>
                        onInputChange(row.id, column.accessor, e.target.value)
                      }
                    />
                  ) : (
                    row[column.accessor]
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
