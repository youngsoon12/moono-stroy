import React, { useState, useRef } from 'react';
import { Stage, Layer, Text, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import { saveAs } from 'file-saver';

const Test: React.FC = () => {
  const stageRef = useRef<any>(null);
  const [text, setText] = useState('');
  const [images, setImages] = useState<string[]>([]); // 저장된 이미지를 담을 배열
  const [balloonImage] = useImage(`${process.env.PUBLIC_URL}/favicons/Moono.png`); // 말풍선 이미지 경로
  console.log(images);
  // 텍스트 입력 핸들러
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 입력된 이미지를 저장하는 함수
  const handleSaveImage = () => {
    const uri = stageRef.current.toDataURL(); // 현재 캔버스 상태를 이미지로 저장
    setImages([...images, uri]); // 저장된 이미지를 배열에 추가
    setText(''); // 다음 텍스트 입력을 위해 초기화
  };

  // 모든 이미지를 세로로 합치는 함수
  const handleCombineImages = () => {
    const canvas = document.createElement('canvas');
    const totalHeight = images.length * 500; // 각 이미지가 500px 높이라고 가정
    canvas.width = 500; // 말풍선 이미지의 가로 크기 
    canvas.height = totalHeight;

    const ctx = canvas.getContext('2d');
    images.forEach((imgSrc, index) => {
      const img: HTMLImageElement = new Image();
      img.src = imgSrc;
      img.onload = () => {
        ctx!.drawImage(img, 0, index * 500, 500, 500); // 이미지를 세로로 나열해서 그리기
        if (index === images.length - 1) {
          const finalUri = canvas.toDataURL();
          saveAs(finalUri, 'combined-image.png'); // 세로로 나열된 이미지를 다운로드
        }
      };  
    });
  };

  return (
    <div>
      {/* 캔버스: 말풍선과 텍스트 */}
      <Stage ref={stageRef} width={500} height={500}>
        <Layer>
          <KonvaImage image={balloonImage} x={0} y={0} width={500} height={500} />
          <Text text={text} fontSize={30} fill="black" x={300} y={70} width={200} align="center" />
        </Layer>
      </Stage>

      {/* 텍스트 입력 필드 */}
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="말풍선 안에 텍스트를 입력하세요"
        style={{ marginTop: '20px', width: '300px', height: '40px', fontSize: '20px' }}
      />

      {/* 각 말풍선 이미지를 저장하는 버튼 */}
      <button onClick={handleSaveImage} style={{ marginTop: '20px', padding: '10px 20px' }}>
        현재 말풍선 저장하기
      </button>

      {/* 저장된 이미지들을 세로로 합치는 버튼 */}
      <button onClick={handleCombineImages} style={{ marginTop: '20px', padding: '10px 20px' }}>
        이미지 합치기
      </button>

      {/* 저장된 말풍선 이미지를 미리보기로 나열 */}
      <div style={{ marginTop: '20px' }}>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`말풍선 ${index}`}
            style={{ marginBottom: '10px', width: '500px', height: '500px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
