import styled from 'styled-components';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 480px; /* 모바일에서 최대 너비 고정 */
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #ffffff;
  /* overflow-y: scroll; */
`;

export default Contents;
