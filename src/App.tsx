import { Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/employeeList/EmployeeList";
import EmployeeList1 from "./pages/employeeList1/EmployeeList";
import EmployeeList2 from "./pages/employeeList2/EmployeeList";
import Layout from "./components/layout/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employees1" element={<EmployeeList1 />} />
        <Route path="/employees2" element={<EmployeeList2 />} />
      </Route>
    </Routes>
  );
}

export default App;
