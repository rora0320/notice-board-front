import styled from 'styled-components';

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
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  padding: 20px;
  border-radius: 5px;
  background-color: #313131;
  color: #e4e4e4;

  z-index: 1;
`;

export const TitleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  font-size: 25px;

  .titleHead {
    position: absolute;
    left: 37%;
    text-align: center;
  }

  svg:hover {
    cursor: Pointer;
  }
`;

export const ContentWrap = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //border: 1px solid red;
`;