import horses from "@/assets/horses.png";
import star from "@/assets/star.gif";

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center mt-5 px-3">
        <img
          src={horses}
          alt="horses"
          className="md:w-xl w-fit border border-dashed border-gray-800 "
        />
        <img src={star} alt="star" className="absolute w-20 grayscale-100" />
      </div>
      <div className="text-center text-gray-800">
        <p className="font-brush md:text-4xl text-2xl mt-5">
          Welcome to our web page!
        </p>

        <p className="font-times uppercase font-bold text-lg mt-3 underline underline-offset-4">
          ★ Please, enjoy your stay ★
        </p>
      </div>
    </section>
  );
}
