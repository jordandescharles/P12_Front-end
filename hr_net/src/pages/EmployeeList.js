import { useSelector } from "react-redux";
import { selectAllEmployees } from "../redux/employeeSlice";
import DataTable from 'react-data-table-component';
import mockedUser from "../datas/mockdatas";
import FilterComponent from 'react-data-table-component';
import { Link } from "react-router-dom";

import React from 'react'
import Header from "../components/Header";


const EmployeeList = () => {

  const employees = useSelector(selectAllEmployees)

  const datas = mockedUser // CHANGE THIS TO mockedUser TO SEE PAGINATION

  const [filterText, setFilterText] = React.useState('');
  const onfilter = e => setFilterText(e.target.value)
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  const filteredItems = datas.filter(
    item =>
      item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.birthDate.includes(filterText.toLowerCase()) ||
      item.startDate.includes(filterText.toLowerCase()) ||
      item.department.toLowerCase().includes(filterText.toLowerCase()) ||
      item.usState.toLowerCase().includes(filterText.toLowerCase()) ||
      item.street.toLowerCase().includes(filterText.toLowerCase()) ||
      item.city.toLowerCase().includes(filterText.toLowerCase()) ||
      item.zipCode.includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);


  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
    },
    {
      name: 'Date of birth',
      selector: row => row.birthDate,
      sortable: true,
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.usState,
      sortable: true,
    },
    {
      name: 'Zip code',
      selector: row => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <>
    <Header/>
    <Link to="/">Home</Link>

      <div className="searchField">
      <label htmlFor="search" >Search : </label>
        <input type="text" id="search" onChange={onfilter} />
      </div>
    <div className="table">
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        striped
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeaderComponent={subHeaderComponentMemo}
      />
      </div>

    </>
  )
}

export default EmployeeList