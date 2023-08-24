import { useState } from "react";
import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";

function Dashboard() {
  return (
    <section>
      <EmployeeForm />
      <EmployeeTable />
    </section>
  );
}

export default Dashboard;
