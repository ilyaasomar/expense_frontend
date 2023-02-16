import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getTransaction,
  updateTransaction,
} from "../../redux/services/transactionSlice";

const UpdateTransection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  const { transactions, error } = useSelector(
    (state) => state.transactionState
  );
  // console.log(transactions);
  const [transaction_data, setTransaction] = useState({
    transection_type: "",
    amount: "",
    registred_date: "",
    description: "",
  });
  useEffect(() => {
    if (id) {
      const signleTransaction = transactions.find(
        (transaction) => transaction._id === id
      );
      setTransaction({ ...signleTransaction });
      // dispatch(getTransaction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleChange = (event) => {
    setTransaction({
      ...transaction_data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTransaction({ id, transaction_data, toast, navigate }));
    console.log(transaction_data);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="font-bold text-xl">Update Transection Form</h2>
        <h2>Welcome Back, Ilyas</h2>
      </div>
      <div className="p-4">
        <div className="w-[70%] pb-4 border rounded-lg bg-white overflow-y-auto">
          {/* starting form */}
          <div className="w-full py-0 px-12 md:px-3">
            <form onSubmit={handleSubmit}>
              <div className="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Transection Type
                </label>
                <select
                  className="border border-gray-400 py-2 px-3 rounded-md"
                  name="transection_type"
                  onChange={handleChange}
                  value={transaction_data?.transection_type}
                  required
                >
                  <option value="">Select</option>
                  <option value="deposit">Deposit</option>
                  <option value="withdraw">Withdraw</option>
                </select>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  value={transaction_data?.amount}
                  placeholder="Enter the amount"
                  className="border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Registred Date
                </label>
                <input
                  type="date"
                  name="registred_date"
                  onChange={handleChange}
                  value={transaction_data?.registred_date}
                  className="border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Description
                </label>
                <textarea
                  className="border border-gray-400 py-2 px-3 rounded-md"
                  rows={3}
                  name="description"
                  onChange={handleChange}
                  value={transaction_data?.description}
                ></textarea>
              </div>

              <div className="mt-5 w-72 flex gap-2">
                <button
                  type="submit"
                  className="w-2/3 bg-blue-500 py-3 text-center text-white rounded-md"
                >
                  Update Transaction
                </button>
                <Link
                  to="/transactions"
                  className="w-1/3 bg-blue-500 py-3 text-center list-none decoration-none text-white rounded-md"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
          {/* ending form */}
        </div>
      </div>
    </div>
  );
};

export default UpdateTransection;
