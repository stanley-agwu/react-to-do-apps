import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { StyledTodoItem } from './styled';

const TodoItem = ({ deleteItem, item, editItem }) => {
  const [value, setValue] = useState(item.todo || '');

  const editHandler = useCallback(
    debounce(async (originalItem, editedItemValue) => {
      await editItem(originalItem, editedItemValue);
    }, 500),
    [],
  );

  useEffect(() => {
    if (value !== item.todo) {
      editHandler(item, value);
    }
  }, [item, value]);

  const daysDiff = (date) => {
    const today = new Date()
    const selectedDate = new Date(date)
    const millsecondPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((selectedDate.getTime() - today.getTime()) / millsecondPerDay)
  }

  const expirationsDays = daysDiff(item.dueDate)

  const nrOfDaysToExpiration = (expiration) => {
    switch(true) {
      case (expiration > 0):
        return `expires in ${expirationsDays} days`;
      case (expiration === 0):
          return 'expires Today';
      case (expiration < 0):
        return 'expired task'
      default:
        return null;
    }
  }

  return (
    <StyledTodoItem item={item} expirationsDays={expirationsDays}>
      <div className="main">
        <button type="button" onClick={() => deleteItem(item)}>
          <FontAwesomeIcon className="fa-circle" icon={faCircle} />
          <FontAwesomeIcon className="fa-check-circle" icon={faCheckCircle} />
        </button>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            editHandler();
          }}
        />{
          expirationsDays <= 0 &&
        <span className="expiration">{nrOfDaysToExpiration(expirationsDays)}</span>
        }
      </div>
      <div className="features">
        <span className="due-date">{item.dueDate.split('-').reverse().join('/')}</span>
        <span className="priority">{item.priority}</span>
        <FontAwesomeIcon className="fa-exclamation" icon={faExclamation} />
      </div>
    </StyledTodoItem>
  );
};

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    identifierKey: PropTypes.string,
    todo: PropTypes.string,
    dueDate: PropTypes.string,
    priority: PropTypes.string
  }).isRequired,
};

export default TodoItem;
