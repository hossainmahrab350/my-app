import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <Link href="/" className="navbar-logo">
        <span className="logo-icon">🏋️</span>
        <span>FITLOG</span>
      </Link>

      {/* CENTER NAVIGATION */}
      <nav className="navbar-center">

        {/* WORKOUTS */}
        <Link href="/" className="navbar-link">
          Workouts
        </Link>

        {/* MY PLAN */}
        <Link href="/plan" className="navbar-link">
          My Plan
        </Link>

      </nav>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {/* PLAN */}
        <Link href="/plan" className="nav-counter-link">
          <span>Plan</span>
          <span className="nav-count">0</span>
        </Link>

        {/* SAVED */}
        <Link href="/plan" className="nav-counter-link">
          <span>Saved</span>
          <span className="nav-count saved-count">0</span>
        </Link>

      </div>

    </header>
  );
}