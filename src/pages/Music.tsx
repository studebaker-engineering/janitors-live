import promoArt from "@/assets/promo-art.png";

const YOUTUBE_LINK = "https://www.youtube.com/watch?v=DtGziv-Odvs";

export default function Music() {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="grid grid-cols-2 gap-4 max-w-4xl px-5">
        {/* Title Column */}
        <div className="col-span-2 mb-3">
          <h2 className="text-center text-2xl font-brush">
            Promotional Tape is Now Available Worldwide!
          </h2>
        </div>
        {/* Info Column */}
        <div className="col-span-2 md:col-span-1 order-last md:order-2 md:px-3 px-9">
          {/* Title */}
          <h3 className="font-times font-bold text-2xl uppercase">
            Janitors Promotional Tape
          </h3>
          <p className="font-times text-sm">November 30th, 2025</p>
          {/* Credits */}
          <p className="font-times mt-3">
            Recorded by <span className="font-bold">Luke Reddick</span> at the{" "}
            <span className="font-bold">U-Store</span> in Washington, D.C.
          </p>
          <p className="font-times">
            Mixed by <span className="font-bold">Brendan Reichhardt</span> at
            Dream <span className="font-bold">Home Sound</span>
          </p>
          {/* Tracks */}
          <p className="font-times mt-3 underline font-bold">Track List:</p>
          <ol className="list-decimal list-inside font-times mb-3">
            <li>U-Store</li>
            <li>First Pitch</li>
            <li>Two Lives</li>
            <li>Time is on Your Side</li>
          </ol>
          {/* Listen Button */}
          <a
            href={YOUTUBE_LINK}
            className="border-2 border-dashed border-gray-800 md:text-xl text-lg px-2 font-typewriter font-bold text-soft-blue bg-gray-800 uppercase hover:bg-gray-700 transition-colors"
          >
            Listen Now
          </a>
        </div>
        {/* Artwork Column */}
        <div className="col-span-2 md:col-span-1 order-2 md:order-last relative md:px-3 px-9">
          <a
            href={YOUTUBE_LINK}
            target="_blank"
            rel="noopener"
            className="block"
          >
            <img
              src={promoArt}
              alt="Janitors promotional tape artwork"
              className="aspect-square w-max border border-dashed border-gray-800"
            />
            <div
              className="bg-gray-800 text-soft-blue font-brush font-bold text-sm 
                absolute md:-right-3 -top-6 right-2 
                rounded-full h-14 aspect-square 
                flex items-center justify-center 
                animate-spin [animation-duration:10s]"
            >
              New!
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
