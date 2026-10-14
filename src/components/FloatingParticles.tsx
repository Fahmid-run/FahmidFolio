import Particles from "@tsparticles/react";

export default function FloatingParticles() {
  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 h-full w-full pointer-events-none"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 90 },
          color: { value: "#8b5cf6" },
          opacity: { value: { min: 0.15, max: 0.6 } },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 1.5,
            random: true,
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
}
