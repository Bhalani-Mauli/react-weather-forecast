import { DependencyList, EffectCallback, useEffect, useRef } from "react";

const useFirstRender = (
  func: EffectCallback,
  deps: DependencyList | undefined
) => {
  const didMount = useRef(false); // {current:false}

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useFirstRender;
