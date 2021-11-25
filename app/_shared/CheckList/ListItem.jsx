import styled from "styled-components";

const ListItemContainer = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1.5px solid var(--background);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  .list-item {
    margin-top: 0rem;
    padding: 0.25rem;
    border: 2px solid var(--background);

    border-radius: 0.5rem;

    .item-tracker {
      padding: 0.5rem;
      border-radius: 0.25rem;
      transition: 0.2s ease-in all;
    }

    .item-done {
      background: var(--background);
    }
  }

  .list-text {
    line-height: 1.5rem;

    .item-time {
      font-size: 0.9rem;
      line-height: 1.25rem;
    }
  }
`;

const RadioInput = ({ text, time, value, setValue }) => {
  return (
    <ListItemContainer>
      <div className="list-item" onClick={() => setValue(!value)}>
        {<div className={"item-tracker" + (value? ' item-done': "")} />}
      </div>
      <div className="list-text">
        <div>{text}</div>
        {time && <div className="item-time">{time.toFormat("HH:mm a")}</div>}
      </div>
    </ListItemContainer>
  );
};

export default RadioInput;
