interface ExtracurricularsSectionProps {
  extracurriculars: string[];
}

export default function ExtracurricularsSection({
  extracurriculars,
}: ExtracurricularsSectionProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          Extracurriculars
        </h2>
        <ul className="space-y-4">
          {extracurriculars.map((activity, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
            >
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span className="text-lg">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
