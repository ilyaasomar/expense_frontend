import React, { useContext, useEffect, useState } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data1.js";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { TransectinContext } from "../context/transectionContex";
const Transections = () => {
  // const { transections } = useContext(TransectinContext);
  // console.log(transections);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "sm:text-left text-right font-bold",
      width: 100,
      style: { md: { width: 50 } },
    },
    {
      field: "name",
      headerName: "Full Name",
      headerClassName: "sm:text-left text-right font-bold",
      width: 300,
      style: { md: { width: 50 } },
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "sm:text-left text-right font-bold",
      width: 200,
      style: { md: { width: 50 } },
    },
    {
      field: "phone",
      headerName: "Phone",
      headerClassName: "sm:text-left text-right font-bold",
      width: 200,
      style: { md: { width: 50 } },
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "sm:text-left text-right font-bold",
      width: 150,
    },
  ];
  const rows = data.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    status: row.status,
  }));
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between p-4">
          <h2 className="font-bold text-2xl">Customers Data</h2>
          {/* <h2>Welcome Back, Ilyas</h2> */}
          <Link to="/element-form">
            <button className="border-2 px-4 py-2 bg-blue-800 text-white rounded-md text-center">
              New Transection
            </button>
          </Link>
        </div>
        {/* <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="bg-gray-200 rounded-sm my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span className="font-bold">Name</span>
              <span className="sm:text-left text-right font-bold">Email</span>
              <span className="hidden md:grid font-bold">Last Order</span>
              <span className="hidden sm:grid font-bold">Method</span>
            </div>
            <ul>
              <DataGrid
                columns={columns}
                rows={rows}
                pageSize={10}
                rowsPerPageOptions={[10]}
                className="w-full min-h-[70vh]"
              />
            </ul>
          </div>
        </div> */}
        <div className="p-4">
          <div className="w-full h-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <ul>
              <DataGrid
                columns={columns}
                rows={rows}
                pageSize={10}
                rowsPerPageOptions={[10]}
                className="max-w-full min-h-[70vh]"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transections;
