'use client';

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
	start: number;
	end: number;
	duration: number; // in milliseconds
    prefix?: string
    sufix?: string
    className?: string
}


const CountUp: React.FC<CountUpProps> = ({ start, end, duration, prefix, sufix, className }) => {
	const [count, setCount] = useState(start);
	const [hasStarted, setHasStarted] = useState(false);
	const spanRef = useRef<HTMLSpanElement | null>(null);
	const startTimeRef = useRef<number | null>(null);
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
		if (!spanRef.current) return;
		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);
				}
			},
			{ threshold: 0.2 }
		);
		observer.observe(spanRef.current);
		return () => {
			observer.disconnect();
		};
	}, [hasStarted]);

	useEffect(() => {
		if (!hasStarted) return;
		setCount(start);
		startTimeRef.current = null;

		const step = (timestamp: number) => {
			if (!startTimeRef.current) startTimeRef.current = timestamp;
			const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
			const value = Math.floor(start + (end - start) * progress);
			setCount(value);
			if (progress < 1) {
				rafRef.current = requestAnimationFrame(step);
			}
		};

		rafRef.current = requestAnimationFrame(step);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [hasStarted, start, end, duration]);

	return (
        <div className={`flex ${className}`}>
            {prefix && <span>{prefix}</span>}
            <span className={className} ref={spanRef}>{count}</span>
            {sufix && <span>{sufix}</span>}
        </div>
    )
};

export default CountUp;
