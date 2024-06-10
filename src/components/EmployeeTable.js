import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import DataTable from "./DataTable";

const EmployeeTable = () => {
  const initialEmployees = [
    {
      id: 1,
      firstName: "Ramya",
      lastName: "M",
      position: "Developer",
      dateOfJoining: "2020-01-15",
      salary: 90000,
    },
    {
      id: 2,
      firstName: "Jasmine",
      lastName: "Smith",
      position: "Designer",
      dateOfJoining: "2019-03-12",
      salary: 55000,
    },
    {
      id: 3,
      firstName: "Samantha",
      lastName: "Johnson",
      position: "Manager",
      dateOfJoining: "2018-06-23",
      salary: 150000,
    },
    {
      id: 4,
      firstName: "Eshwar",
      lastName: "Mahadev",
      position: "SDET",
      dateOfJoining: "2018-06-23",
      salary: 60000,
    },
    {
      id: 5,
      firstName: "Omkar",
      lastName: "Patel",
      position: "Admin",
      dateOfJoining: "2018-06-23",
      salary: 40000,
    },
  ];

  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : initialEmployees;
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleInputChange = (id, field, value) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, [field]: value };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const columns = [
    { Header: "ID", accessor: "id", editable: false },
    { Header: "First Name", accessor: "firstName", editable: true },
    { Header: "Last Name", accessor: "lastName", editable: true },
    { Header: "Position", accessor: "position", editable: true },
    {
      Header: "Date of Joining",
      accessor: "dateOfJoining",
      type: "date",
      editable: true,
    },
    { Header: "Salary", accessor: "salary", type: "number", editable: true },
  ];

  return (
    <Box p={4}>
      <Heading mb={4} color="grey">
        Employee Details
      </Heading>
      <DataTable
        columns={columns}
        data={employees}
        onInputChange={handleInputChange}
        colorScheme="cyan"
      />
    </Box>
  );
};

export default EmployeeTable;
