import MenuItem from "./menu/MenuItem";
import { Routes, Route } from "react-router-dom";
import CompanyEntryForm from "./menu/MasterEntry/forms/CompanyEntryForm";
import BankEntryForm from "./menu/MasterEntry/forms/BankEntryForm";
import CategoryEntryForm from "./menu/MasterEntry/forms/CategoryEntryForm";
import DepartmentEntryForm from "./menu/MasterEntry/forms/DepartmentEntryForm";
import DesignationEntryForm from "./menu/MasterEntry/forms/DesignationEntryForm";
import EmployeeEntryForm from "./menu/MasterEntry/forms/EmployeeEntryForm";
import HolidayEntryForm from "./menu/MasterEntry/forms/HolidayEntryForm";
import SalaryGradeEntryForm from "./menu/MasterEntry/forms/SalaryGradeEntryForm";
import ShiftEntryForm from "./menu/MasterEntry/forms/ShiftEntryForm";
import NewCompanyEntryForm from "./menu/MasterEntry/forms/NewCompanyEntryForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MenuItem/>}>
          <Route exact path="menu/company-entry" element={<CompanyEntryForm/>}/>
          <Route exact path="menu/bank-entry" element={<BankEntryForm/>}/>
          <Route exact path="menu/category-entry" element={<CategoryEntryForm/>}/>
          <Route exact path="menu/department-entry" element={<DepartmentEntryForm/>}/>
          <Route exact path="menu/designation-entry" element={<DesignationEntryForm/>}/>
          <Route exact path="menu/employee-entry" element={<EmployeeEntryForm/>}/>
          <Route exact path="menu/holiday-entry" element={<HolidayEntryForm/>}/>
          <Route exact path="menu/salary-grade-entry" element={<SalaryGradeEntryForm/>}/>
          <Route exact path="menu/shift-entry" element={<ShiftEntryForm/>}/>
          <Route exact path="menu/new-company-entry" element={<NewCompanyEntryForm/>}/>

          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
