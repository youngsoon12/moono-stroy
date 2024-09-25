import React from 'react';
import { TextField } from '@mui/material';

const BoardInput = (props: any) => {
  return (
    <TextField
      variant="standard" // outlined가 아닌 standard로 변경하여 커스텀 스타일 적용
      sx={{
        width: '350px',
        '& .MuiInput-underline:before': {
          borderBottom: '2px solid', // bottom에만 border 적용
          borderColor: 'black', // 원하는 색상 지정
        },
        '& .MuiInput-underline:after': {
          borderBottom: '2px solid', // 선택 상태일 때도 bottom에만 border 적용
          borderColor: '#EA3636', // 활성화 시 색상 지정
        },
        '& .MuiInput-underline:hover:before': {
          borderBottom: '2px solid', // hover 시에도 하단 border 유지
          borderColor: 'black',
        },
      }}
      {...props}
    />
  );
};

export default BoardInput;
