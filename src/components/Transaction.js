import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    // <div className="showCard">
    <tr>
      <td>
        {transaction.date}
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
