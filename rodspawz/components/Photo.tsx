"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shows /images/<file>. If the photo hasn't been added to public/images yet,
 * a burlap-pattern placeholder with the label appears instead.
 */
export default function Photo({
  file,
  alt,
  className = "",
}: {
  file: string;
  alt: string;
  className?: string;
}) {
  const [missing, setMissing] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The image may have failed before React hydrated, so check on mount too.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  if (missing) {
    return (
      <div className={`photo photo--placeholder ${className}`} role="img" aria-label={alt}>
        <span className="photo__paw" aria-hidden>
          🐾
        </span>
        <span className="photo__label">{alt}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={`photo ${className}`}
      src={`/images/${file}`}
      alt={alt}
      onError={() => setMissing(true)}
    />
  );
}
