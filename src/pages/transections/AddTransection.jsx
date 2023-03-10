import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError } from "../../redux/services/transactionSlice";
import { createTransaction } from "../../redux/services/transactionSlice";

const AddTransection = () => {
  const { error } = useSelector((state) => state.transactionState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState({
    transection_type: "",
    amount: null,
    registred_date: "",
    description: "",
  });

  useEffect(() => {
    error &&
      toast.error(error, {
        position: "top-right",
        autoClose: 1000,
      });
    dispatch(clearError());
  }, [error, dispatch]);

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.name]: event.target.value });
  };
  const clear = () => {
    setTransaction({
      transection_type: "",
      amount: "",
      registred_date: "",
      description: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = Number(transaction.amount);
    if (amount <= 0) {
      toast.error("Amount muste greater then 0", {
        position: "top-right",
        autoClose: 1000,
      });
      return false;
    }
    dispatch(createTransaction({ transaction, toast, navigate }));
    clear();
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="font-bold text-xl">Transection Form</h2>
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
                  placeholder="Enter the amount"
                  className="border border-gray-400 py-2 px-3 rounded-md"
                  required
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
                  className="border border-gray-400 py-2 px-3 rounded-md"
                  required
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
                  required
                ></textarea>
              </div>

              <div className="mt-5 w-44">
                <button
                  type="submit"
                  className="w-full bg-blue-500 py-3 text-center text-white rounded-md"
                >
                  Create Transaction
                </button>
              </div>
            </form>
          </div>
          {/* ending form */}
        </div>
      </div>
    </div>
  );
};

export default AddTransection;
