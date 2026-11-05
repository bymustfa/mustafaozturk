const bands = [
  {
    blur: "2px",
    mask: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 40%, transparent 58%)",
  },
  {
    blur: "5px",
    mask: "linear-gradient(to bottom, transparent 30%, #000 50%, #000 72%, transparent 88%)",
  },
  {
    blur: "10px",
    mask: "linear-gradient(to bottom, transparent 54%, #000 78%, #000 100%)",
  },
];

export default function ViewportFade() {
  return (
    <div className="viewport-fade" aria-hidden="true">
      {bands.map((band) => (
        <div
          key={band.blur}
          className="viewport-fade__blur"
          style={{
            ["--fade-blur" as string]: band.blur,
            maskImage: band.mask,
            WebkitMaskImage: band.mask,
          }}
        />
      ))}
      <div className="viewport-fade__tint" />
    </div>
  );
}
