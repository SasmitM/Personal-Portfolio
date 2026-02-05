interface InterestsListProps {
  interests: string[];
}

export default function InterestsList({ interests }: InterestsListProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {interests.map((interest, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
        >
          {interest}
        </span>
      ))}
    </div>
  );
}
