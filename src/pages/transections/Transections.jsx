import React, { useContext, useEffect, useState } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../data/data1.js";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/services/transactionSlice.js";
const Transections = () => {
  const { transactions, error, loading } = useSelector(
    (state) => state.transactionState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  console.log(transactions);

  //static columns
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "sm:text-left text-right font-bold",
      width: 100,
      style: { md: { width: 50 } },
    },
    {
      field: "transection_type",
      headerName: "Transaction Type",
      headerClassName: "sm:text-left text-right font-bold",
      width: 300,
      style: { md: { width: 50 } },
    },
    {
      field: "amount",
      headerName: "Amount",
      headerClassName: "sm:text-left text-right font-bold",
      width: 200,
      style: { md: { width: 50 } },
    },
    {
      field: "registred_date",
      headerName: "Registred Date",
      headerClassName: "sm:text-left text-right font-bold",
      width: 200,
      style: { md: { width: 50 } },
    },
    {
      field: "description",
      headerName: "Description",
      headerClassName: "sm:text-left text-right font-bold",
      width: 150,
    },
    {
      field: "options",
      headerName: "Options",
      headerClassName: "sm:text-left text-right font-bold",
      width: 150,
    },
  ];
  const buttons = <button type="button">Edit</button>;
  const rows = transactions.map((row) => ({
    id: row._id,
    transection_type: `${(
      <span className="bg-orange-500">${row.transection_type}</span>
    )}`,
    amount: `$ ${row.amount}`,
    registred_date: row.registred_date,
    description: row.description,
    options: `${(
      <button type="submit" className="bg-green-500">
        Edit
      </button>
    )}`,
  }));
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between p-4">
          <h2 className="font-bold text-xl">All Transections</h2>
          {/* <h2>Welcome Back, Ilyas</h2> */}
          <Link to="/add-transaction">
            <button className="border-2 px-4 py-2 bg-blue-800 text-white rounded-md text-center">
              New Transection
            </button>
          </Link>
        </div>

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
