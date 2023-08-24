import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import { Container, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <EmployeeTable />
    </Container>
  );
}

export default Dashboard;
