import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  max-width: 480px; /* 모바일에서 최대 너비 고정 */
  padding: 10px 30px;
  box-sizing: border-box;
  /* border: 1px solid #333333; */
`;

export default Header;
