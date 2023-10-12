import styled from 'styled-components/macro';

export const StyledAddItem = styled.form`
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

export const StyledTodoItem = styled.li`
display: flex;
padding: 15px 0;

button {
  background: ${({ theme }) => theme.lightGrey};
  border: 0;
  border-radius: 4px 4px 0 0;
  margin-right: 15px;
  padding: 10px;
  cursor: pointer;

  .fa-circle {
    font-size: 16px;
    color: ${({ theme }) => theme.darkerGrey};
  }

  .fa-check-circle {
    color: ${({ theme }) => theme.darkestGrey};
    font-size: 16px;
    display: none;
  }

  &:hover {
    background: ${({ theme }) => theme.darkerGrey};
    transition: 0.3s;

    .fa-circle {
      transition: 0.3s;
      display: none;
    }

    .fa-check-circle {
      display: inline-block;
    }
  }
}

input {
  font-size: 16px;
  color: ${({ theme }) => theme.darkestGrey};
  align-self: center;
  width: 100%;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.backgroundColor};
  text-decoration: ${({ expirationsDays }) => expirationsDays >= 0 ? 'none' : 'line-through'};;
}

.expiration {
  display: flex;
  font-size: 12px;
  margin: 0 5px;
  width: 120px;
  padding: 5px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.lightGrey};
  &:hover {
    background: ${({ theme }) => theme.darkerGrey};
    transition: 0.3s;
  }
}

.main {
  display: flex;
  width: 70%;
  border-bottom: 2px solid ${({ theme }) => theme.lightGrey};

  &:hover {
    border-color: ${({ theme }) => theme.darkerGrey};
    transition: 0.3s;

    button {
      background: ${({ theme }) => theme.darkerGrey};
      transition: 0.3s;
    }

    .fa-circle {
      color: ${({ theme }) => theme.lightGrey};
      transition: 0.3s;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
}
.features {
  width: 30%;
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
    justify-content: flex-end;
  }
}
.fa-exclamation {
  display: ${({ item }) => item.priority === 'URGENT' ? 'inline' : 'none'};
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.normalRed};
  cursor: pointer;
}

.due-date, .priority {
  display: flex;
  font-size: 12px;
  margin: 0 5px;
  width: 120px;
  padding: 15px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
}
.due-date {
  background-color: ${({ theme }) => theme.OtherRed};
  &:hover {
    background: ${({ theme }) => theme.darkRed};
    transition: 0.3s;
  }
}
.priority {
  background-color: ${({ item, theme }) => {
    if (item.priority === 'URGENT') return theme.lightRed
    if (item.priority === 'IMPORTANT') return theme.green
    if (item.priority === 'SECONDARY') return theme.blue
    if (item.priority === 'PRIMARY') return theme.lightBlue
    return null
  }};
}

@media (max-width: 767px) {
  flex-direction: column;
}
`;

export const StyledTodo = styled.div`
  height: auto;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 20px;

  h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.darkestGrey};
    text-align: center;
    padding: 10px;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    margin-top: 0;
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    width: 90%;
    min-width: 230px;
  }
`;

export const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
`;

export const StyledFooter = styled.div`
  margin: 20px 0 40px;
  text-align: center;

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.lightGrey};
  }
`;
