import { useState, useRef } from "react";
import "../css/Expandable.css";

export default function Expandable({
  direction,
  children,
  title,
  default_visibility = false,
}) {
  const [show, setShow] = useState(default_visibility);
  const ref = useRef(null);

  function toggle(e) {
    e?.stopPropagation();

    const parent = ref.current?.closest(".info-side");

    if (!parent) {
      setShow((prev) => !prev);
      return;
    }

    const prevTop = ref.current.getBoundingClientRect().top;

    setShow((prev) => !prev);

    requestAnimationFrame(() => {
      const newTop = ref.current.getBoundingClientRect().top;

      parent.scrollTop += newTop - prevTop;
    });
  }

  return (
    <div
      ref={ref}
      className={`expandable expandable-${direction?.toLowerCase()}`}
    >
      <div className="expand-header" onClick={toggle}>
        <span className="expand-title">{title}</span>

        <button className="expand-button" onClick={toggle}>
          {show ? "▲" : "▼"}
        </button>
      </div>

      {show && <div className="expand-content">{children}</div>}
    </div>
  );
}
