import React, { useContext, useEffect, useState } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../data/data1.js";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteTransaction,
  getTransactionByDate,
  getTransactions,
} from "../../redux/services/transactionSlice.js";
import Spinner from "../../components/utils/Spinner.jsx";
const Transections = () => {
  const { transactions, error, loading } = useSelector(
    (state) => state.transactionState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  const [transaction_data, setTransaction] = useState({
    transaction_type: "",
    start_date: "",
    end_date: "",
  });
  const handleInput = (e) => {
    setTransaction({ ...transaction_data, [e.target.name]: e.target.value });
  };
  // check statement form fucntion
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getTransactionByDate(transaction_data));
  };
  // delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Transaction ?")) {
      dispatch(deleteTransaction({ id, toast }));
    }
  };

  // if (loading) return <Spinner />;
  //static columns
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "sm:text-left text-right font-bold",
      width: 100,
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
      field: "registred_date",
      headerName: "Registred Date",
      headerClassName: "sm:text-left text-right font-bold",
      width: 250,
    },
    {
      field: "description",
      headerName: "Description",
      headerClassName: "sm:text-left text-right font-bold",
      width: 200,
    },
    {
      field: "options",
      headerName: "Options",
      headerClassName: "sm:text-left text-right font-bold",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex justify-center items-center gap-0.1">
            <Link
              to="/transaction/id1"
              className="border-2 px-2 py-0.5 bg-green-600 text-white font-medium rounded-md items-center"
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <Link
              to={`/edit-transaction/${params.row.id}`}
              className="border-2 px-2 py-0.5 bg-green-600 text-white font-medium rounded-md items-center"
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Update</div>
            </Link>
            <div
              className="border-2 px-2 py-0.5 bg-[#dc2626] text-white font-medium rounded-md items-center cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  // var countId = 1;

  const rows = transactions?.map((row) => ({
    id: row._id,
    transection_type: row?.transection_type,
    amount: `$ ${row?.amount}`,
    registred_date: row?.registred_date,
    description: row?.description,
    options: (
      <div>
        <button type="submit" className="bg-green-500">
          Edit
        </button>
      </div>
    ),
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
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center gap-5">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="Firstname" className="font-medium">
                    Transaction Type
                  </label>
                  <select
                    name="transaction_type"
                    className="border border-gray-400 py-2 px-3 rounded-md"
                    onChange={handleInput}
                    required
                  >
                    {/* <option value="">Select </option> */}
                    <option value="">Select</option>
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
                    name="start_date"
                    className="border border-gray-400 py-2 px-3 rounded-md"
                    onChange={handleInput}
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
                    name="end_date"
                    className="border border-gray-400 py-2 px-3 rounded-md"
                    onChange={handleInput}
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

export default Transections;
