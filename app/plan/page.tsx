import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PlanPage() {
  return (
    <div className="plan-page-wrapper">
      <Navbar />

      <main className="plan-page">

        {/* Header */}
        <section className="plan-header">
          <p className="section-label">MY PLAN</p>

          <h1>MY PLAN</h1>

          <p className="plan-subtitle">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>


        {/* Statistics */}
        <section className="plan-stats">

          <div className="stat-item">
            <span>Exercises</span>
            <strong>0</strong>
          </div>

          <div className="stat-item">
            <span>Minutes</span>
            <strong>0</strong>
          </div>

          <div className="stat-item">
            <span>Calories</span>
            <strong>0</strong>
          </div>

        </section>


        {/* Controls */}
        <div className="plan-controls">

          <div className="plan-tabs">
            <button className="active-tab">
              Todays Plan
            </button>

            <button>
              Saved
            </button>
          </div>


          <div className="sort-box">
            <span>Sort By</span>

            <select defaultValue="duration">
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>

        </div>


        {/* Empty State */}
        <section className="empty-plan">

          <h2>NOTHING HERE YET</h2>

          <p>
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="browse-button"
          >
            GO TO WORKOUTS
          </Link>

        </section>

      </main>

      <Footer />
    </div>
  );
}

