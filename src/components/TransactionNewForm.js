import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const URL = process.env.REACT_APP_API_URL

const TransactionNewForm = () => {
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    itemName: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  const addTransaction = async (newTransaction) => {
    try {
      await axios.post(`${URL}/transactions`, newTransaction);
      setTransaction({
        itemName: "",
        amount: "",
        date: "",
        from: "",
        category: "",
      });
      navigate(`/transactions`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setTransaction((prevTransaction) => ({
        ...prevTransaction,
        [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
  };

  return (
    <div className="newform">
      <h1>Add a new item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleInputChange}
          placeholder="Date"
          required
        />
        <label htmlFor="itemName">Name:</label>
        <input
          id="itemName"
          type="text"
          required
          value={transaction.itemName}
          placeholder="Name"
          onChange={handleInputChange}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          name="amount"
          value={transaction.amount}
          placeholder="Amount"
          onChange={handleInputChange}
        />

        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          placeholder="From"
          onChange={handleInputChange}
        />

        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={transaction.category}
          placeholder="Category"
          onChange={handleInputChange}
        />

        <br />

        <button className="btn btn-outline-secondary" type="submit">
          CREATE NEW ITEM
        </button>
      </form>
    </div>
  );
};

export default TransactionNewForm;