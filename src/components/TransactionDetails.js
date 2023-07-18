import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  const [transactions, setTransactions] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  //SHOW
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch(() => {
        navigate("/*");
      });
  }, [index, navigate]);

  //DELETE
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <article className="detailsCard">
      <div className="card">
        <h2>
          {transactions.item_name}
        </h2>
        <p>ID: {transactions.id}</p>
        <p>Amount: {transactions.amount}</p>
        <p>From: {transactions.from}</p>
        <p>Category: {transactions.category}</p>
      </div>
      <div className="navigationButton">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button className=" btn btn-outline-secondary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button className="btn btn-outline-secondary">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
