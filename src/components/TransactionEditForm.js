import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const URL = process.env.REACT_APP_API_URL;


export default function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    id: uuidv4(),
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  const updateTransaction = () => {
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleInputChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
        setTransaction({ ...response.data });
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div className="editForm">
      <h1>Edit an existed item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleInputChange}
          placeholder="Date"
          required
        />
        <label htmlFor="item_name">Name:</label>
        <input
          id="item_name"
          type="text"
          required
          value={transaction.item_name}
          placeholder="Name"
          onChange={handleInputChange}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
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
        <div className="editButton">
          <button className="btn" type="submit">
            {" "}
            Submit{" "}
          </button>
          <Link to={`/transactions/${index}`}>
            <button className="btn">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
