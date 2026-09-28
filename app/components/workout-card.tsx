import Link from "next/link";

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

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="workout-card-link"
    >
      <article className="workout-card">

        {/* Workout Image */}
        <div className="workout-image">
          <img
            src={workout.image}
            alt={workout.name}
          />
        </div>

        {/* Workout Content */}
        <div className="workout-content">

          {/* Muscle Groups */}
          <div className="workout-tags">
            {workout.muscleGroups.map((group) => (
              <span key={group}>
                {group}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3>{workout.name}</h3>

          {/* Equipment */}
          <p className="workout-type">
            {workout.equipment}
          </p>

          {/* Workout Stats */}
          <div className="workout-stats">
            <span>
              ◷ {workout.duration} min
            </span>

            <span>
              🔥 {workout.caloriesBurned} kcal
            </span>

            <span>
              ★ {workout.rating}
            </span>
          </div>

        </div>

      </article>
    </Link>
  );
}