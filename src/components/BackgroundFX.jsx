export default function BackgroundFX() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none grid-bg opacity-70" />
      <div className="fixed -top-32 -right-40 h-112 w-md rounded-full bg-cyan-400/10 orb orb-one pointer-events-none" />
      <div className="fixed top-[40%] -left-56 h-120 w-120 rounded-full bg-violet-500/10 orb orb-two pointer-events-none" />
      <div className="noise fixed inset-0 pointer-events-none" />
    </>
  );
}
