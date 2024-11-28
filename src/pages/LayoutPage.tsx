export default function LayoutPage() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-14 items-center justify-center border-2 border-solid border-r-black">Header</div>
      <div className="flex h-96 flex-col items-center justify-center">
        test
        <img className="object-cover" src="https://images.unsplash.com/photo-1506947411565-16e2028c9f28" />
        <div className="w-[300px] max-w-[200px]">
          <p className="truncate">sfadfdsgagdsgsgdddddddddddddddddddddddddddddddd</p>
        </div>
        <div className="flex-center flex-col">
          test
          <strong>test2</strong>
        </div>
        <p className="text-[20px] font-medium text-[#a8c4ce]">뭐 뭐 뭐 뭐 뭐</p>
        <div className="h-[300px] w-[200px] rounded-[6px] bg-[#125321] text-[#ffffff]">텍스트</div>
      </div>
    </div>
  );
}
