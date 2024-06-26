import Image from "next/image";
import profile from "../../assets/Profile.png";
import bgimg from "../../assets/mountains-bg.png";

const ProfilePage = ({ theme }) => {
  return (
    <div className="border-slate-400 p-3 border-2 w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl">
      <div
        className="w-full p-2 rounded-md"
        style={{ background: theme.color }}
      >
        <div className="relative border-dashed p-1 border-2 border-gray-300 rounded-md">
          <Image
            src={bgimg}
            alt="bg img"
            width={500}
            height={300}
            objectFit="cover"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-4 transform translate-y-1/2 rounded-full border-dashed p-1 border-2 border-gray-300">
            <Image
              src={profile}
              alt="Profile img"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="pt-12 pb-6 px-4 text-center">
          <h1 className="text-2xl font-bold">Mason Parker</h1>
          <p className="text-gray-500">Graphics & UI/UX Designer</p>
          <p className="text-gray-500">📍Denver, United States</p>
          <p className="mt-8 text-gray-700 text-l rounded border-dashed border-2 border-gray-500">
            I am a visionary Graphics and UI/UX Designer, seamlessly blending
            artistic flair with technical expertise. With a degree in Graphic
            Design, I consistently deliver visually stunning and user-centric
            solutions, leaving an indelible mark on the digital landscape. As a
            trusted collaborator, I am dedicated to crafting pixel-perfect UIs
            and captivating graphics that elevate user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
