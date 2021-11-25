import { Text } from "domelementtype";
import styled from "styled-components";

const TextContainer = styled.div`

  label {
    font-size: 0.9rem;
    padding-left: 0.5rem;
  }

  .input-ctr{
    input{
      border: 0;
      outline: 0;

      border-bottom: 1px solid #ccc;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  .text-input-error{
    color: var(--error);
    font-size: 0.9rem;
    padding-left: 0.5rem;
  }

`;

const TextInput = ({ placeholder, type, value, setValue, label, error }) => {
  return (
    <TextContainer>
      {label && <label> {label} </label>}

      <div className="input-ctr">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {error?.length > 0 && <div className="text-input-error"> {error} </div>}
    </TextContainer>
  );
};

export default TextInput;
