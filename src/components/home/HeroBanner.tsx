export default function HeroBanner() {
  return (
    <section className="w-full rounded-xl bg-[#1e2128] text-left text-white p-4 sm:p-6 md:p-8 lg:p-10 mb-8 flex flex-col items-start">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-5">
        Nghe thử miễn phí,{" "}
        <span className="text-white">không giới hạn sách mỗi tháng</span>
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#ededed] font-medium mb-2 sm:mb-2 md:mb-2">
        Ứng dụng sách nói hàng đầu Việt Nam, với kho Sách nói Bản quyền Chất
        lượng cao, Bán chạy nhất.
      </p>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#ededed] font-medium mb-4 sm:mb-6 md:mb-8">
        Hơn{" "}
        <span className="text-orange-500 font-bold text-lg sm:text-xl md:text-2xl align-middle">
          15,000
        </span>{" "}
        nội dung kiến thức đa dạng: Sách nói, Podcast, Sách tóm tắt, Thiền, Học
        tiếng Anh.
      </p>
      <button className="px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-xl text-sm sm:text-base md:text-lg drop-shadow font-extrabold bg-orange-500 hover:bg-orange-600 transition-colors">
        TẢI NGAY
      </button>
    </section>
  );
}
