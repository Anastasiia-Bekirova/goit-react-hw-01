import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
     <table className={styles.table}>
  <thead className={styles.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => {
        return (<tr className={styles.tr}key={item.id}>
        <td className={styles.type}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            
              </tr>);
    }) }
    </tbody>
</table>
 );
}

export default TransactionHistory;