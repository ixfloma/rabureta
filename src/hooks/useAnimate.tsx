import React, { useEffect, useState } from "react";

interface IProps {
  trigger: boolean;
  duration?: number;
}

const useAnimate = ({
  trigger,
  duration = 250,
}: IProps): { transition: boolean; isVisible: boolean } => {
  const [transition, setTransition] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!trigger) {
      setTransition(false);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
    } else {
      setIsVisible(true);
      timer = setTimeout(() => {
        setTransition(true);
      }, 50);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
  return { transition, isVisible };
};

export default useAnimate;
