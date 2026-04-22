import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const FPS = 10;

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const particleCount = 50;
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 5 + 1,
                    speedX: Math.random() * 3 - 1.5,
                    speedY: Math.random() * 3 - 1.5
                });
            }
        };

        const updateParticles = () => {
            particlesRef.current.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x > canvas.width) particle.x = 0;
                else if (particle.x < 0) particle.x = canvas.width;

                if (particle.y > canvas.height) particle.y = 0;
                else if (particle.y < 0) particle.y = canvas.height;
            });
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDarkTheme = document.body.classList.contains('theme-dark');
            ctx.fillStyle = isDarkTheme ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';

            particlesRef.current.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const animate = () => {
            updateParticles();
            drawParticles();
            animationFrameId = setTimeout(() => {
                animate();
            }, 1000 / FPS);
        };

        resizeCanvas();
        createParticles();
        animate();

        window.addEventListener('resize', resizeCanvas);

        const observer = new MutationObserver(() => {
            drawParticles();
        });

        observer.observe(document.body, { attributes: true });

        return () => {
            clearTimeout(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            observer.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="particle-background"></canvas>;
};

export default ParticleBackground;