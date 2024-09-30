// ChatBubble.tsx
import styled from 'styled-components';
import theme from 'styles/theme';
interface ChatBubbleProps {
  isButton: boolean;
  children: React.ReactNode;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ isButton, children }) => {
  return <BubbleContainer isButton={isButton}>{children}</BubbleContainer>;
};

const BubbleContainer = styled.div<{ isButton: boolean }>`
  padding: 10px;
  border-radius: 2px 14px 14px 14px;
  background-color: ${({ isButton }) =>
    isButton ? `${theme.color.pointColor}` : '#f1f1f1ce'};
  color: ${({ isButton }) => (isButton ? '#000' : '#000')};
  /* margin: 5px 0; */
  align-self: ${({ isButton }) => (isButton ? 'flex-end' : 'flex-start')};
  width: fit-content;
  max-width: 240px;
  display: flex;
  white-space: pre-wrap;
  float: ${({ isButton }) => (isButton ? 'right' : 'left')};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
`;

export default ChatBubble;
