import PropTypes from 'prop-types';
import css from './data.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
}.isRequired;

export default Statistics;
