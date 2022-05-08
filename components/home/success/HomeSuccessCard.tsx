import { IconType } from "@react-icons/all-files";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  data: number;
  title: string;
  icon: IconType;
  duration?: number;
}

export default function HomeSuccessCard(props: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  const starttime = useRef<number | null>(null);

  useEffect(() => {
    function animate(timestamp: number) {
      if (!starttime.current) {
        starttime.current = timestamp;
      }

      const runtime = timestamp - starttime.current;
      const relativeProgress = runtime / (props.duration || 1000);

      const final = Math.floor(props.data * relativeProgress);

      valueRef.current = final;
      setValue(final > props.data ? props.data : final);

      if (valueRef.current < props.data) {
        window.requestAnimationFrame(animate);
      }
    }

    if (inView) {
      window.requestAnimationFrame(animate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-5">
      <div className="p-5 rounded-full bg-white text-blue-900">
        <props.icon size={35} />
      </div>
      <div className="text-white font-barlow font-bold text-4xl">{value}+</div>
      <div className="text-slate-200">{props.title}</div>
    </div>
  );
}

export type HomeSuccessCardProps = Props;
