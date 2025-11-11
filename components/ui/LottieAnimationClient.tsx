'use client';

import { useEffect, useState } from 'react';

export default function LottieAnimationClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-52 bg-gray-200 animate-pulse rounded-lg" />;
  }

  return (
    <img 
      src="/confetti.gif" 
      alt="confetti" 
      className="w-full h-auto max-w-xs mx-auto"
      loading="lazy"
    />
  );
}