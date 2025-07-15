"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./CountersSection.module.scss";

const counters = [
  { value: 60, label: "casais auxiliados" },
  { value: 20, label: "pessoas que venceram a depressão" },
  { value: 10, label: "anos de experiência" },
  { value: 150, label: "vidas impactadas" },
];

function useCountUp(to: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(to / (duration / 16));
    function step() {
      start += increment;
      if (start >= to) {
        setCount(to);
        return;
      }
      setCount(start);
      ref.current = setTimeout(step, 16);
    }
    step();
    return () => { if (ref.current) clearTimeout(ref.current); };
  }, [to, duration]);
  return count;
}

const CountersSection: React.FC = () => {
  return (
    <section className={styles.countersSection}>
      <div className={styles.grid}>
        {counters.map((c, idx) => {
          const count = useCountUp(c.value);
          return (
            <div className={styles.counterCard} key={idx}>
              <span className={styles.value}>+{count}</span>
              <span className={styles.label}>{c.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CountersSection;
