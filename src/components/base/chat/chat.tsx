import Image from "next/image";

export default function Chat() {
  return (
    <div className="hidden lg:block fixed bottom-0 right-0 z-50 cursor-pointer w-[400px]">
      <div className="flex items-center gap-2 bg-[#ef1b28] pt-1 pb-1 pl-2 pr-2 rounded-tl-lg">
        <div>
          <Image
            src="/images/icons/web/chat.svg"
            alt="chat"
            width={20}
            height={20}
          />
        </div>
        <div>
          <span className="text-white text-sm">
            <b>Chat tư vấn </b>- Giải đáp mọi thắc mắc
          </span>
        </div>
      </div>
    </div>
  );
}
