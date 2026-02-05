import Image from "next/image";

interface ProfilePictureProps {
  image: string;
  name: string;
}

export default function ProfilePicture({ image, name }: ProfilePictureProps) {
  return (
    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 mb-6">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
