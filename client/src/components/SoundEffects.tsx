import { useEffect, useRef } from 'react';

export default function SoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize Web Audio API
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };

    const playHoverSound = () => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.setValueAtTime(800, audioContextRef.current.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1000, audioContextRef.current.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, audioContextRef.current.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.15);

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + 0.15);
    };

    const playClickSound = () => {
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.setValueAtTime(1200, audioContextRef.current.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContextRef.current.currentTime + 0.05);

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContextRef.current.currentTime + 0.005);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.1);

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + 0.1);
    };

    // Add event listeners to interactive elements
    const addSoundEffects = () => {
      const hoverElements = document.querySelectorAll('.magnetic-hover, .premium-card, .nav-link');
      const clickElements = document.querySelectorAll('button, a');

      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          initAudio();
          playHoverSound();
        });
      });

      clickElements.forEach(element => {
        element.addEventListener('click', () => {
          initAudio();
          playClickSound();
        });
      });
    };

    // Delay to ensure DOM is ready
    setTimeout(addSoundEffects, 1000);

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}