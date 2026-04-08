import watermark from "@/assets/logos/watermark.png";
import { cn } from "@/lib/utils";

type PhotoWatermarkProps = {
  className?: string;
  sizeClassName?: string;
};

const PhotoWatermark = ({ className, sizeClassName }: PhotoWatermarkProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-2 left-2 z-10",
        className,
      )}
      aria-hidden="true"
    >
      <img
        src={watermark}
        alt=""
        className={cn(
          // Keep visible on both dark + bright photos (no background box).
          // `drop-shadow` adds contrast without adding a solid backdrop.
          "h-14 w-14 opacity-90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]",
          sizeClassName,
        )}
        draggable={false}
      />
    </div>
  );
};

export default PhotoWatermark;

