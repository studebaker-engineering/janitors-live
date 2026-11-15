interface PropTypes {
  marqueeItems: string[];
}

export const ScrollingMarquee = ({ marqueeItems }: PropTypes) => (
  <div className="marquee bg-gray-800 text-soft-blue py-1 text-sm">
    <ul className="marquee-content">
      {marqueeItems.map((item) => (
        <li key={`primary-${item}`}>item</li>
      ))}
    </ul>

    <ul aria-hidden="true" className="marquee-content">
      {marqueeItems.map((item) => (
        <li key={`copy-${item}`}>item</li>
      ))}
    </ul>
  </div>
);
