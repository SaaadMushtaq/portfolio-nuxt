import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://www.linkedin.com/in/saad-mushtaq007/",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/saad-mushtaq007/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} target="_blank">
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
