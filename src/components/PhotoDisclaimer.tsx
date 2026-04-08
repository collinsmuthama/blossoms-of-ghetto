import { ShieldAlert } from "lucide-react";

const PhotoDisclaimer = () => {
  return (
    <div
      className="fixed left-0 right-0 top-16 md:top-20 z-40 border-b border-border/60 bg-secondary text-secondary-foreground"
      role="note"
      aria-label="Photo use disclaimer"
    >
      <div className="container">
        <div className="flex items-start gap-2 py-2.5 text-xs sm:text-sm leading-snug">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            <span className="font-semibold">Disclaimer:</span> Please do not download, copy, repost, or share photos from this website without written permission from Blossoms of Ghetto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDisclaimer;

