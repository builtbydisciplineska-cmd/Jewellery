// Web Audio API subtle luxury crystalline harmonic chime
let audioCtx: AudioContext | null = null;

export const playLuxuryChime = () => {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Harmonic frequencies resembling a crystal glass / platinum bell
    const freqs = [1046.5, 1318.51, 1567.98, 2093.0]; // C6, E6, G6, C7

    freqs.forEach((freq, index) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.04);

      gain.gain.setValueAtTime(0.0001, now + index * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.03 / (index + 1), now + index * 0.04 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + index * 0.04 + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + index * 0.04);
      osc.stop(now + index * 0.04 + 1.3);
    });
  } catch (err) {
    // Audio autoplay restrictions or unsupported
    console.debug('Audio ambiance note skipped', err);
  }
};
