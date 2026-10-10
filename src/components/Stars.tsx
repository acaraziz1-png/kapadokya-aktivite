import { Star, StarHalf } from "lucide-react";

export default function Stars({
  rating,
  size = 4,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.4;
  const px = size * 4;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-ember-500 ${className}`}
      aria-label={`5 üzerinden ${rating.toString().replace(".", ",")} puan`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} style={{ width: px, height: px }} className="fill-ember-500" />
      ))}
      {half && (
        <span className="relative inline-flex" style={{ width: px, height: px }}>
          <Star style={{ width: px, height: px }} className="text-ember-500 opacity-30" />
          <StarHalf
            style={{ width: px, height: px }}
            className="absolute inset-0 fill-ember-500"
          />
        </span>
      )}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e${i}`} style={{ width: px, height: px }} className="text-ember-500 opacity-30" />
      ))}
    </span>
  );
}
