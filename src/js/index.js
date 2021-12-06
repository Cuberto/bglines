import SmoothScrollbar from 'smooth-scrollbar';
import ScrollTriggerPlugin from 'vendor/smooth-scrollbar/ScrollTriggerPlugin';
import SoftScrollPlugin from 'vendor/smooth-scrollbar/SoftScrollPlugin';
import Lines from "lines";
import gsap from "gsap";

// GSAP ScrollTrigger & Soft Edges plugin for SmoothScroll
SmoothScrollbar.use(ScrollTriggerPlugin, SoftScrollPlugin);

// Init smooth scrollbar
const view = document.getElementById('view-main');
const scrollbar = SmoothScrollbar.init(view, {
    renderByPixels: false,
    damping: 0.075
});

// Create lines
const canvas = document.querySelector('.cb-lines');
const lines = new Lines(canvas, {
    color: [0.72, 0.76, 0.9, 1], // color RGBA%
    position: 0.3, // x position from -1 to 1
    speed: 0.7, // speed
    lines: 20, // lines count
    density: 30, // lines density
    scale: 15, // stage scale
    segments: 2, // curve segments
    intensity: 10 // bend intensity
});

// Move lines with scroll
scrollbar.addListener(() => {
    gsap.to(lines.material.uniforms.scroll, {
        value: scrollbar.scrollTop,
        duration: 1
    });
});