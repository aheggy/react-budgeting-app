import Transaction from "./Transaction";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  let balance = 0;
  for (let elemnt of transactions) {
    balance += Number(elemnt.amount);
  }
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("catch", error));
  }, []);
  console.log(transactions)
  return (
    <div className="transactions">
      <section>
        <h1
          className={balance > 100 ? "green" : balance >= 0 ? "yellow" : "red"}
        >
          Bank Account Total: {balance}
        </h1>
        <table>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
