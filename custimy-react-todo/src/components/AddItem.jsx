import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const StyledAddItem = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;

  button {
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px;
    background: ${({ theme }) => theme.lightGrey};
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    outline: none;
    transition: 0.5s;

    .fa-plus {
      color: ${({ theme }) => theme.darkestGrey};
      font-size: 18px;
    }
  }

  input[type="text"] {
    margin: 10px 0;
    transition: 0.5s;
    margin: 0;
    flex-basis: 0;
    flex-grow: 9;
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: 3px solid ${({ theme }) => theme.lightGrey};
    border-radius: 5px;

    &:focus {
      border: 3px solid ${({ theme }) => theme.darkerGrey};

      & ~ button {
        background-color: ${({ theme }) => theme.darkerGrey};
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    margin: 10px 0;
    box-sizing: border-box;

    @media (max-width: 786px) {
        flex-direction: column;
      }

    input[type="date"] {
      width: 45%;
      background-color: ${({ theme }) => theme.blue};
      padding: 10px;
      font-family: "Roboto Mono",monospace;
      color: ${({ theme }) => theme.white};
      font-size: 18px;
      border: none;
      outline: none;
      border-radius: 5px;
      cursor: pointer;

      @media (max-width: 786px) {
        width: 95%;
        margin-bottom: 10px;
      }
    }
    ::-webkit-calendar-picker-indicator{
      background-color: ${({ theme }) => theme.white};
      padding: 5px;
      cursor: pointer;
      border-radius: 3px;
    }
    select {
      box-sizing: border-box;
      width: 50%;
      padding: 0 15px;
      height: 45px;
      margin-left: auto;
      border-radius: 5px;
      border: none;
      background: ${({ theme }) => theme.lightGrey};
      cursor: pointer;

      @media (max-width: 786px) {
        width: 100%;
      }
    }
  }
`;

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
