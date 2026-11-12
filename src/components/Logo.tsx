import { site } from "@/data/site";
import { PixelIcon } from "./PixelIcon";

export function Logo() {
  return (
    <span className="relative inline-flex items-center font-pixel text-3xl leading-none">
      {site.nickname}
      <PixelIcon name="sparkle" className="twinkle -mt-3 ml-0.5 h-3 w-auto" />
    </span>
  );
}
