import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 10dvh;
  max-width: 480px; /* 모바일에서 최대 너비 고정 */
  padding: 20px 30px;
  box-sizing: border-box;
  border: 1px solid #333333;
  overflow: auto;
`;

export default Header;
