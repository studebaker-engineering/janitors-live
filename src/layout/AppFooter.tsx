import { ScrollingMarquee } from "@/components/ScrollingMarquee";

export const AppFooter = () => (
  <footer className="mt-20 w-full text-center">
    <p className="font-times text-gray-800 mb-3">
      &copy;2026 Janitors. All Rights Reserved.
    </p>
    <ScrollingMarquee
      marqueeItems={[
        "Janitors Promotional Tape available now on www.youtube.com!",
        "Janitors Promotional Tape available now on www.youtube.com! ",
        "Janitors Promotional Tape available now on www.youtube.com!  ",
      ]}
    />
  </footer>
);
