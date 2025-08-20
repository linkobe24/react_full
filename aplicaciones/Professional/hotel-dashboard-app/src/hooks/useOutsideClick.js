import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      // se necesita utilizar el evento en la fase de captura no en la de burbujeo. si es burbujeo no podremos abrir el modal ya que el evento sube primero y es llamado con el click afuera
      document.addEventListener("click", handleClick, listenCapturing);

      return () => removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
