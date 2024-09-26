import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Text, Image } from 'react-konva';
import useImage from 'use-image';

const KonvaTextOnImage = () => {
  // 상태 관리: 텍스트 및 이미지 설정
  const [text, setText] = useState('여기에 문구를 입력하세요');
  const [image] = useImage(
    `${process.env.PUBLIC_URL}/images/moono/sample-image.png`
  );
  const stageRef = useRef(null);

  // 입력된 텍스트 값을 업데이트
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>사진에 추가할 텍스트를 입력하세요</h3>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <div
        style={{
          border: '1px solid black',
          width: '400px',
          height: '400px',
          margin: '0 auto',
        }}
      >
        <Stage width={400} height={400} ref={stageRef}>
          <Layer>
            {/* 이미지 렌더링 */}
            <Image image={image} width={400} height={400} />
            {/* 텍스트 렌더링 */}
            <Text
              text={text}
              fontSize={24}
              x={50}
              y={50}
              fill="white" // 텍스트 색상
              draggable // 텍스트를 드래그할 수 있도록 설정
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default KonvaTextOnImage;
