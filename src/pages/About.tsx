import beers from "@/assets/beers.png";

export default function About() {
  return (
    <>
      <div className="flex items-center justify-center mt-5 px-3">
        <img
          src={beers}
          alt="cheering beers"
          className="md:w-xl w-fit border border-dashed border-gray-800"
        />
      </div>
      <div className="text-center text-gray-800">
        <p className="font-brush md:text-4xl text-2xl mt-5">
          Listen to the music!
        </p>
      </div>
    </>
  );
}
