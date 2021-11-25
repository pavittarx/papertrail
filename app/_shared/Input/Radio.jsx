import styled from "styled-components";

const RadioContainer = styled.div``;

const RadioInput = ({ text, value, setValue }) => {
  return (
    <RadioContainer>
      <div className="radio-btn" onClick={() => setValue(!value)}>
        {value && <div className="radio-active" />}
      </div>
      {text}
    </RadioContainer>
  );
};

export default RadioInput;
