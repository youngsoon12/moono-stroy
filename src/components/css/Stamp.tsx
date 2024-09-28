import styled from 'styled-components';
import theme from 'styles/theme';

const Stamp = ({ page, completed }: { page: string; completed: boolean }) => {
  return (
    <Outside completed={completed}>
      <Inside completed={completed}>
        <div
          style={{ fontSize: '0.7em', textAlign: 'center', marginTop: '10px' }}
        >
          {page}
        </div>
        {completed && <CompletedText>완 료</CompletedText>}
      </Inside>
    </Outside>
  );
};

export default Stamp;

const Outside = styled.div<{ completed: boolean }>`
  display: flex; /* Flexbox를 사용하여 중앙 정렬 */
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 100px;
  background-color: ${({ completed }) =>
    completed ? `${theme.color.mainColor}` : '#fff'};
  border-radius: 50%;
  margin: 0 7px;
  color: ${({ completed }) => (completed ? '#fff' : '#121212')};
`;

const Inside = styled.div<{ completed: boolean }>`
  position: absolute; /* Inside는 절대 위치로 설정 */
  width: 85px;
  height: 85px;
  border-radius: 50%;
  border: ${({ completed }) =>
    completed ? '1px solid #ffff' : '1px solid #b7b7b7'};
  display: flex; /* 텍스트를 중앙 정렬하기 위해 flex 사용 */
  align-items: center; /* 텍스트를 상단으로 정렬 */
  /* justify-content: center; 수평 중앙 정렬 //상단 여백 추가 */
  flex-direction: column;
`;

const CompletedText = styled.div`
  font-size: 1.6em;
  text-align: center;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
`;
