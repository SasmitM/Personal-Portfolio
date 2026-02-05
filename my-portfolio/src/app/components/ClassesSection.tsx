interface ClassesSectionProps {
  classes: string[];
}

export default function ClassesSection({ classes }: ClassesSectionProps) {
  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Classes Taken
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((className, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700"
            >
              <p className="text-zinc-700 dark:text-zinc-300">{className}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
