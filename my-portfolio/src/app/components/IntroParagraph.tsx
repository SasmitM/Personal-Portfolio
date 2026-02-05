interface IntroParagraphProps {
  text: string;
}

export default function IntroParagraph({ text }: IntroParagraphProps) {
  return (
    <p className="text-lg leading-7 text-zinc-700 dark:text-zinc-300">
      {text}
    </p>
  );
}
