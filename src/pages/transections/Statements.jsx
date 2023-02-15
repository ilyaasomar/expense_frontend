import React, { useContext, useEffect, useState } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../data/data1.js";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteTransaction,
  getTransactions,
} from "../../redux/services/transactionSlice.js";
import Spinner from "../../components/utils/Spinner.jsx";
const Statements = () => {
  const { transactions, loading } = useSelector(
    (state) => state.transactionState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  // check statement form fucntion
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  // delete

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Transaction ?")) {
      dispatch(deleteTransaction({ id, toast }));
    }
  };

  if (loading) return <Spinner />;
  //static columns
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "sm:text-left text-right font-bold",
      width: 100,
    },
    {
      field: "registred_date",
      headerName: "Registred Date",
      headerClassName: "sm:text-left text-right font-bold",
      width: 250,
    },
    {
      field: "transection_type",
      headerName: "Transaction Type",
      headerClassName: "sm:text-left text-right font-bold",
      width: 170,
      renderCell: (params) => {
        return params.row.transection_type === "deposit" ? (
          <div className="bg-green-600 text-white border-2 px-2 py-0.5 rounded-full">
            <span className="font-normal text-md">
              {params?.row?.transection_type}
            </span>
          </div>
        ) : (
          <div className="bg-red-400 text-white border-2 px-2 py-0.5 rounded-full">
            <span className="font-normal text-md">
              {params?.row?.transection_type}
            </span>
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      headerClassName: "sm:text-left text-right font-bold",
      width: 100,
    },

    {
      field: "balance",
      headerName: "Balance",
      headerClassName: "sm:text-left text-right font-bold",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <span className="font-bold text-md">{params?.row?.balance}</span>
          </div>
        );
      },
    },
  ];
  let countId = 1;
  let balance = 0;
  const rows = transactions?.map((row) => ({
    id: countId++,
    transection_type: row?.transection_type,
    amount: `$ ${row?.amount}`,
    registred_date: row?.registred_date,
    balance: `$ ${
      row.transection_type === "deposit"
        ? (balance += row.amount)
        : (balance -= row.amount)
    }`,
  }));
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between p-4">
          <h2 className="font-bold text-xl">All Statements</h2>
          <h2>Transactions / Statement</h2>
        </div>

        <div className="p-4">
          <div className="w-full h-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            {/* top bar */}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center gap-5">
                <div class="flex flex-1 flex-col gap-2">
                  <label htmlFor="Firstname" className="font-medium">
                    Transaction Type
                  </label>
                  <select
                    className="border border-gray-400 py-2 px-3 rounded-md"
                    required
                  >
                    {/* <option value="">Select </option> */}
                    <option value="all">All</option>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                  </select>
                </div>
                {/* from date */}
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="Firstname" className="font-medium">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="registred_date"
                    className="border border-gray-400 py-2 px-3 rounded-md"
                    required
                  />
                </div>
                {/* to date */}
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="Firstname" className="font-medium">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="registred_date"
                    className="border border-gray-400 py-2 px-3 rounded-md"
                    required
                  />
                </div>
                {/* button */}
                <div className="flex flex-1 flex-col">
                  {/* this input i use aligment for button if you remote button will be up */}
                  <input type="text" />
                  <button
                    type="submit"
                    className="bg-blue-500 py-3 text-center text-white rounded-md"
                  >
                    Check Transaction
                  </button>
                </div>
              </div>
            </form>
            {/* data bar */}
            <ul className="py-10">
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

export default Statements;
