import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  min-width: 300px;
  max-width: 480px; //바일에서 최대 너비 고정
  margin: 0 auto;
  box-sizing: border-box;
  /* background-color: #ffffff; */
  /* background-color: #272727; */
  background-color: #ffffff;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  }
`;
export default Container;
