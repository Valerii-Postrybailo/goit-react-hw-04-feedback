import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log(options)
  return (
    <ul className={css.ul}>
      {Object.keys(options).map(key => 
        <li key = {key}>
          <button type = "button"
            onClick = {() => onLeaveFeedback(key)}
            className = {css.btn}>
            {key}
          </button>
        </li>
      )}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions