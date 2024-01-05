import Image from "next/image";
import emptyStar from "@/public/star-empty.svg";
import filledStar from "@/public/star-filled.svg";

const RATINGS = [1, 2, 3, 4, 5];

export default function StarRating({ value = 1 }) {
  return (
    <span>
      {RATINGS.map((rating) =>
        value >= rating ? (
          <Image key={rating} src={filledStar} alt="★" />
        ) : (
          <Image key={rating} src={emptyStar} alt="✩" />
        )
      )}
    </span>
  );
}
