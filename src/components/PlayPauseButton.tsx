import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export function PlayPauseButton({
  onClick,
  isPlaying,
}: {
  onClick: () => void;
  isPlaying: boolean;
}) {
  return (
    <button
      className={twMerge(
        "transition ease-in flex justify-center items-center w-8 h-8 rounded-full shadow-md",
        isPlaying
          ? "bg-gray-700 hover:bg-gray-800"
          : "bg-green-500 hover:bg-gray-700"
      )}
      onClick={onClick}>
      {isPlaying ? (
        <BsFillPauseFill className="h-6 w-6" />
      ) : (
        <BsFillPlayFill className="h-6 w-6" />
      )}
    </button>
  );
}
