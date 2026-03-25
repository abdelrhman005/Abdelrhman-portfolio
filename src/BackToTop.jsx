import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    useEffect(() => {
        if (isVisible) {
            gsap.to(buttonRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power3.out',
                display: 'flex'
            });
        } else {
            gsap.to(buttonRef.current, {
                opacity: 0,
                y: 20,
                scale: 0.8,
                duration: 0.3,
                ease: 'power3.in',
                onComplete: () => {
                   if (buttonRef.current) buttonRef.current.style.display = 'none';
                }
            });
        }
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            ref={buttonRef}
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{ display: 'none' }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
            <div className="button-glow"></div>
        </button>
    );
};

export default BackToTop;
