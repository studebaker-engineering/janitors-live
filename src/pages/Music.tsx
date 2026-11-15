import promoArt from "@/assets/promo-art.png";

export default function Music() {
  return (
    <div className="">
      {/* <h2 className="text-center text-2xl font-times uppercase mt-5">
        Our promotional tape is now available
      </h2> */}
      <div className="flex items-center justify-center mt-3">
        <img
          src={promoArt}
          alt="Janitors promotional tape artwork"
          className="aspect-square h-75 "
        />
      </div>
    </div>
  );
}
