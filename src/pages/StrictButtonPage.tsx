import StrictButton from '../components/common/StrictButton';

export default function StrictButtonPagePage() {
  return (
    <div className="flex flex-col gap-lg">
      <StrictButton>기본형</StrictButton>
      <StrictButton variant="grey">그레이타입</StrictButton>
      <StrictButton variant="grey" size="md">
        사이즈 지정
      </StrictButton>
    </div>
  );
}
