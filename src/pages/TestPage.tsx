import React from 'react';
import Button from '../components/common/Button';

export default function TestPage() {
  const [isFontChange, setIsFontChange] = React.useState(true);
  const handleClickButton = () => {
    setIsFontChange((prev) => !prev);
  };

  return (
    // 마진 >> m, 마진 탑 >> mt, 마진 레프트 >> ml
    <div className="mt-12 flex flex-col gap-12">
      <Button onClick={handleClickButton} isFontChange={isFontChange}>
        클릭
      </Button>
      <Button>긴글 길게 써보는 글 길게 써보는 버튼</Button>
    </div>
  );
}
