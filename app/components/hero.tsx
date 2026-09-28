import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      {/* Left side */}
      <div className="hero-content">

        <p className="hero-label">
          WORKOUT LIBRARY
        </p>

        <h1>
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <p className="hero-description">
          FitLog is a dark, no-nonsense gym companion:
          pick a lift, lock it into today&apos;s plan,
          and watch the week&apos;s work add up.
        </p>

        <button className="hero-button">
          BROWSE WORKOUTS
        </button>

      </div>

      {/* Right side */}
      <div className="hero-image">

        <Image
          src="/images/banner.png"
          alt="Workout"
          fill
          priority
        />

      </div>

    </section>
  );
}