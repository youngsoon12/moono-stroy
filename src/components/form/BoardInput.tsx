import React from 'react';
import { TextField } from '@mui/material';

const BoardInput = (props: any) => {
  return (
    <TextField
      variant="standard"
      sx={{
        width: '350px',
        '& .MuiInput-underline:before': {
          borderBottom: '2px solid',
          borderColor: '#8a8a8a',
        },
        '& .MuiInput-underline:after': {
          borderBottom: '2px solid',
          borderColor: '#EA3636',
        },
        '& .MuiInput-underline:hover:before': {
          borderBottom: '2px solid',
          borderColor: 'black',
        },
        '& .MuiInputBase-input': {
          color: '#fff', // 입력 텍스트 색상
        },
      }}
      InputProps={{
        style: { color: '#fff' }, // 이 부분 추가
      }}
      {...props}
    />
  );
};

export default BoardInput;
