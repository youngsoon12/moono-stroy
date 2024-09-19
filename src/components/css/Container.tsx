import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  max-width: 480px; /* 모바일에서 최대 너비 고정 */
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow-y: hidden;
`;
export default Container;

