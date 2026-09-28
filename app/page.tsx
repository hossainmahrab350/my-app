import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WorkoutCard from "./components/workout-card";
import Footer from "./components/footer";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
}

async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="workout-library">
          <div className="library-heading">
            <p>THE LIBRARY</p>
            <h2>WORKOUT LIBRARY</h2>
            <span>
              Twelve lifts covering every major muscle group.
            </span>
          </div>

          <div className="workout-grid">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}