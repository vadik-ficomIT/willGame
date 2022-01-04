import { useEffect, useRef } from "react";


export  function useDidUpdateEffect(fn, inputs) { // как юзефект только не выполняется при первом рендере
    const didMountRef = useRef(false);
    useEffect(
        () => {
            if (didMountRef.current)
                fn();
            else
                didMountRef.current = true;
        },
        inputs
    )
}