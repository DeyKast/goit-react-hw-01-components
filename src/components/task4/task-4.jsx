import PropTypes from 'prop-types';
import css from './transactions.module.css';

const Transactions = props => {
  const { data } = props;

  return (
    <table className={css.transaction_history}>
      <thead className={css.transaction_table_header}>
        <tr>
          <th className={css.transaction_table_header_title}>Type</th>
          <th className={css.transaction_table_header_title}>Amount</th>
          <th className={css.transaction_table_header_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.transaction_table_body_text}>{type}</td>
              <td className={css.transaction_table_body_text}>{amount}</td>
              <td className={css.transaction_table_body_text}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Transactions;
