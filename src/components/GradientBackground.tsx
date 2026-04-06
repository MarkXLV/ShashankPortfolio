export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="orb orb-blue" />
      <div className="orb orb-purple" />
      <div className="orb orb-cyan" />
    </div>
  );
}
