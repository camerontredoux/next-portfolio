export const About: React.FC = () => {
  return (
    <div className="text-3xl text-gray-700">
      <div>About</div>
      <div className="text-base text-gray-500 mt-2 font-normal">
        <p className="mb-4">
          My name&apos;s Cameron Tredoux and I&apos;ve lived all around the
          world &mdash; from South Africa to Romania to the United States.
        </p>
        <p className="mb-4">
          I began coding in 2012 and have since turned it into my life&apos;s
          passion. I spend most of my time rock climbing, attending class, and
          learning new things &mdash; recently, I&apos;ve enjoyed learning about
          mentorships and business networking.
        </p>
        This portfolio was a passion project and learning process; it introduced
        me to new React libraries and brought out my creativity, and I hope that
        it &mdash; and my other projects &mdash; showcase my skills.
      </div>
      <ul className="flex flex-col gap-16 text-lg text-gray-500"></ul>
    </div>
  );
};
