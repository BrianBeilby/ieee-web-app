import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export default function MemberCard({ member }: { member: any }) {
  const SocialIcon = ({ type, href }: { type: string; href: string }) => {
    const icons: { [key: string]: JSX.Element } = {
      twitter: <FaTwitter />,
      linkedin: <FaLinkedin />,
      // Map more social icons as needed
    };
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        {icons[type]}
      </a>
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 p-4">
      <div className="w-24 h-24 mb-3 rounded-full overflow-hidden">
        <Image
          src={member.img}
          alt={member.name}
          width={96}
          height={96}
          objectFit="cover"
        />
      </div>
      <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
        {member.name}
      </h3>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {member.role}
      </span>
      <div className="flex mt-2 space-x-2">
        {Object.entries(member.socials).map(([type, href]) => (
          <SocialIcon key={type} type={type} href={href as string} />
        ))}
      </div>
    </div>
  );
};
