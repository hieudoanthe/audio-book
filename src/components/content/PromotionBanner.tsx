"use client";

export default function PromotionBanner() {
  return (
    <section className="my-8 -mx-6 lg:-mx-10 -mr-4 lg:-mr-6">
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px] overflow-hidden cursor-pointer group">
        <img
          src="https://picsum.photos/1190/420?img=2"
          alt="Promotion Banner"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </section>
  );
}

