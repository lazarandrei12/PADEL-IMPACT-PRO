import { useEffect, useRef } from "react";

export default function CursorFX() {
  const spotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let x = tx, y = ty;
    let rx = tx, ry = ty;
    let running = true;

    const lerp = (a, b, t) => a + (b - a) * t;

    const frame = () => {
      if (!running) return;
      x = lerp(x, tx, 0.18);
      y = lerp(y, ty, 0.18);
      rx = lerp(rx, tx, 0.08);
      ry = lerp(ry, ty, 0.08);

      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      root.style.setProperty("--mxpx", x + "px");
      root.style.setProperty("--mypx", y + "px");
      root.style.setProperty("--mx", (x / window.innerWidth).toFixed(3));
      root.style.setProperty("--my", (y / window.innerHeight).toFixed(3));
      requestAnimationFrame(frame);
    };

    if (!isTouch) {
      const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
      const onLeave = () => { tx = window.innerWidth / 2; ty = window.innerHeight / 2; };
      const onOver = (e) => {
        if (e.target.closest("a, button, [role='button']")) {
          spotRef.current?.classList.add("fx-active");
          ringRef.current?.classList.add("fx-active");
        }
      };
      const onOut = (e) => {
        if (e.target.closest && e.target.closest("a, button, [role='button']")) {
          spotRef.current?.classList.remove("fx-active");
          ringRef.current?.classList.remove("fx-active");
        }
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseleave", onLeave);
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);
      requestAnimationFrame(frame);
      return () => {
        running = false;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseleave", onLeave);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
      };
    }

    // Mobile: hide cursors, drive --mx/--my via tilt + scroll
    if (spotRef.current) spotRef.current.style.display = "none";
    if (ringRef.current) ringRef.current.style.display = "none";

    let tiltX = 0, tiltY = 0;
    const onTilt = (e) => {
      tiltX = Math.max(-1, Math.min(1, (e.gamma || 0) / 30));
      tiltY = Math.max(-1, Math.min(1, ((e.beta || 0) - 45) / 30));
    };

    if (typeof DeviceOrientationEvent !== "undefined" && !prm) {
      window.addEventListener("deviceorientation", onTilt, true);
    }

    let t0 = performance.now();
    const mobileFrame = () => {
      if (!running) return;
      const t = (performance.now() - t0) / 1000;
      const drift = prm ? 0 : 0.5;
      const sx = (window.scrollY || 0) / Math.max(1, document.body.scrollHeight - window.innerHeight);
      const mx = 0.5 + tiltX * 0.35 + Math.sin(t * 0.2) * 0.05 * drift;
      const my = 0.5 + tiltY * 0.35 + sx * 0.3;
      root.style.setProperty("--mx", Math.max(0, Math.min(1, mx)).toFixed(3));
      root.style.setProperty("--my", Math.max(0, Math.min(1, my)).toFixed(3));
      root.style.setProperty("--mxpx", mx * window.innerWidth + "px");
      root.style.setProperty("--mypx", my * window.innerHeight + "px");
      requestAnimationFrame(mobileFrame);
    };
    requestAnimationFrame(mobileFrame);

    return () => {
      running = false;
      window.removeEventListener("deviceorientation", onTilt, true);
    };
  }, []);

  return (
    <>
      <div
        ref={spotRef}
        aria-hidden
        className="fx-spot pointer-events-none fixed top-0 left-0 z-[60] will-change-transform"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle at center, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.10) 25%, rgba(59,130,246,0) 60%)",
          mixBlendMode: "screen",
          filter: "blur(4px)",
          opacity: 1,
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="fx-ring pointer-events-none fixed top-0 left-0 z-[61] will-change-transform"
        style={{
          width: 36, height: 36,
          border: "1px solid rgba(59,130,246,0.5)",
          borderRadius: "50%",
          transition: "width .3s, height .3s, border-color .3s, opacity .3s",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
