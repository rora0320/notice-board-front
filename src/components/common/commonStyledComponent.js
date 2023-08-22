import styled from "styled-components";
export const WrapForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  border: 1px solid red;

  .inputs_textfield {
    width: 400px;
    border-bottom: 1.5px solid #9e9e9e;
    margin: 20px;

    input {
      width: 140px;
      padding-left: 14px;
      color: #e4e4e4;
      border-bottom: 1.5px solid #9e9e9e;
    }
  }
`