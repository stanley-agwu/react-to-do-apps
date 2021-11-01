import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { StyledAddItem } from './styled';

const AddItem = ({ addItem }) => {
  const [todoText, setTodoText] = useState('');
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('')

  const displayPriority = () => {
    const priorities = [
      {type: 'URGENT', id: 1},
      {type: 'IMPORTANT', id: 2},
      {type: 'SECONDARY', id: 3},
      {type: 'PRIMARY', id: 4}
    ]
    return priorities.map(item => (
      <option key={item.id} value={item.type}>{item.type}</option>
      )
    )
  }

  return (
    <StyledAddItem
      onSubmit={(event) => {
        event.preventDefault();
        addItem(todoText, dueDate, priority);
        setTodoText('');
        setDueDate('');
        setPriority('');
      }}
    >
      <input
        type="text"
        value={todoText}
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
        placeholder="New todo..."
        required
      />

      <div>
        <input
          type="date"
          value={dueDate}
          onChange={(event) => {
            setDueDate(event.target.value);
          }}
          required
        />
        <select
          value={priority}
          required
          onChange={(event) => {
            setPriority(event.target.value);
          }}>
          <option value="">Select Priority</option>
          {displayPriority()}
        </select>
      </div>
      <button type="submit">
        <FontAwesomeIcon className="fa-plus" icon={faPlus} />
      </button>
    </StyledAddItem>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default AddItem;
