import ProfilePicture from "./ProfilePicture";
import InterestsList from "./InterestsList";
import IntroParagraph from "./IntroParagraph";

interface HeroSectionProps {
  profile: {
    name: string;
    image: string;
  };
  interests: string[];
  intro: string;
}

export default function HeroSection({
  profile,
  interests,
  intro,
}: HeroSectionProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Picture and Interests */}
          <div className="flex flex-col items-center md:items-start">
            <ProfilePicture image={profile.image} name={profile.name} />
            <InterestsList interests={interests} />
          </div>

          {/* Right Column: Intro Paragraph */}
          <div className="flex items-center">
            <IntroParagraph text={intro} />
          </div>
        </div>
      </div>
    </section>
  );
}
