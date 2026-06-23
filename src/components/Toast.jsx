import { useState, useCallback, useRef } from 'react';

let toastSetterRef = null;

export function useToast() {
  const [toast, setToast] = useState({ message: '', visible: false, warn: false });
  const timeoutRef = useRef(null);
  toastSetterRef = setToast;

  const showToast = useCallback((message, warn = false) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast({ message, visible: true, warn });
    timeoutRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2800);
  }, []);

  return { toast, showToast };
}

export default function Toast({ message, visible, warn }) {
  return (
    <div className={`toast ${visible ? 'show' : ''} ${warn ? 'warn' : ''}`}>
      {message}
    </div>
  );
}
