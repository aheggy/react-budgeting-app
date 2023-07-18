import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {



  return (
    // <div className="showCard">
    <tr>
      <td>
        {new Date(transaction.date).toLocaleString("en-US", { month: "long", day: "numeric" })}
      </td>
      <td>
        <a href={`/transactions/${index}`}>
          {transaction.item_name}
        </a>
      </td>
      <td>
        <a href={`/transactions/${index}`}>
          {transaction.amount}
        </a>
      </td>
    </tr>
    // </div>
  );
}

export default Transaction;
