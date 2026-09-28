import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

interface Workout {
  id: number;
  name: string;
  image: string;
  description: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  instructions: string[];
}

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  const workout: Workout = await response.json();

  return (
    <>
      <Navbar />

      <main className="workout-details">
        <div className="details-container">

          {/* LEFT SIDE */}
          <div className="details-image">
            <img
              src={workout.image}
              alt={workout.name}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="details-content">

            <h1>{workout.name}</h1>

            <p className="details-description">
              {workout.description}
            </p>

            {/* MUSCLE GROUPS */}
            <div className="details-tags">
              {workout.muscleGroups.map((group) => (
                <span key={group}>
                  {group}
                </span>
              ))}
            </div>

            {/* WORKOUT INFORMATION */}
            <div className="details-info">

              <div className="info-row">
                <span>EQUIPMENT</span>
                <strong>{workout.equipment}</strong>
              </div>

              <div className="info-row">
                <span>DIFFICULTY</span>
                <strong>{workout.difficulty}</strong>
              </div>

              <div className="info-row">
                <span>SETS</span>
                <strong>{workout.sets}</strong>
              </div>

              <div className="info-row">
                <span>REPS</span>
                <strong>{workout.reps}</strong>
              </div>

              <div className="info-row">
                <span>DURATION</span>
                <strong>{workout.duration} min</strong>
              </div>

              <div className="info-row">
                <span>CALORIES</span>
                <strong>{workout.caloriesBurned} kcal</strong>
              </div>

              <div className="info-row">
                <span>RATING</span>
                <strong>★ {workout.rating}</strong>
              </div>

            </div>

            {/* INSTRUCTIONS */}
            <div className="instructions">
              <h2>INSTRUCTIONS</h2>

              <ol>
                {workout.instructions.map((instruction, index) => (
                  <li key={index}>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/* BUTTONS */}
            <div className="details-buttons">
              <button className="plan-button">
                ▣ Add to today&apos;s plan
              </button>

              <button className="save-button">
                ♡ Save for later
              </button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}