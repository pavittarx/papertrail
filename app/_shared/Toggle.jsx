import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  .toggle-btn-wrapper {
    background: rgba(0, 0, 0, 0.35);
    width: 40px;
    height: 18px;

    border-radius: 20px;
    padding: 2px;

    transition: 0.5s all ease-in;

    .toggle-dot {
      height: 16px;
      width: 16px;
      background: red;

      transition: 0.25s all ease-in;

      margin: 0 2px;
      border-radius: 18px;

      vertical-align: middle;
    }
  }

  .active {
    background: #fdf5f5;

    .toggle-dot {
      margin: 0 22px;
    }
    text-align: right;
  }
`;

const Toggle = ({state, setState, text}) => {
  return <ToggleContainer>
    <div 
    className={"toggle-btn-wrapper" + (state? " active" : "")}
    onClick={() => setState(!state)}
    >
      <div className="toggle-dot" />
    </div>
    <div className="toggle-text">
      {text}
    </div>
  </ToggleContainer>;
}

export default Toggle;