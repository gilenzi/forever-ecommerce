import heroImage from '@assets/hero_img.png';

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center border border-gray-300">
      <div className="flex-1  flex flex-col py-10 sm:py-0 items-center">
        <div className="flex items-center gap-3">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="uppercase font-medium text-sm md:text-base">
            our bestsellers
          </p>
        </div>
        <h1 className="capitalize prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
          latest arrivals
        </h1>
        <div className="flex items-center  gap-3">
          <p className="uppercase font-medium text-sm md:text-base">shop now</p>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
      </div>
      <div className="flex-1">
        <img src={heroImage} alt="Hero image" />
      </div>
    </div>
  );
}
