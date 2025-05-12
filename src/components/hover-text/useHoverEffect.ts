import { useSpring } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

export interface UseHoverEffectProps {
  flashlightRadius?: number;
}

export function useHoverEffect({
  flashlightRadius = 150,
}: UseHoverEffectProps = {}) {
  const [isHovering, setIsHovering] = useState(false);

  const springX = useSpring(0, { damping: 25, stiffness: 200 });
  const springY = useSpring(0, { damping: 25, stiffness: 200 });

  const radiusSpring = useSpring(0, { damping: 18, stiffness: 150 });
  const [animatedRadius, setAnimatedRadius] = useState(0);

  const [jellyPosition, setJellyPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const unsubscribeX = springX.onChange((x) => {
      setJellyPosition((prev) => ({ ...prev, x }));
    });

    const unsubscribeY = springY.onChange((y) => {
      setJellyPosition((prev) => ({ ...prev, y }));
    });

    const unsubscribeRadius = radiusSpring.onChange((radius) => {
      setAnimatedRadius(radius);
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
      unsubscribeRadius();
    };
  }, [springX, springY, radiusSpring]);

  useEffect(() => {
    if (isHovering) {
      radiusSpring.set(flashlightRadius);
    } else {
      radiusSpring.set(0);
    }
  }, [isHovering, flashlightRadius, radiusSpring]);

  const handleMouseMove = <T extends HTMLDivElement | null>(
    e: React.MouseEvent,
    containerRef: RefObject<T>
  ) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      springX.set(x);
      springY.set(y);
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return {
    isHovering,
    jellyPosition,
    animatedRadius,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}
