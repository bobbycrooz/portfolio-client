import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="footer w-full h-16 z-10 sticky bottom-0 p-2  justify-center bg-primary">
      <div className="social_icon flex space-x-4 p-2 items-center justify-center ">
        <div className="icon p-1">
          <FaGithub className="text-textRead text-xl" />
        </div>
        <div className="icon p-1">
          <SiLinkedin className="text-textRead text-xl" />
        </div>
        <div className="icon p-1">
          <AiFillTwitterCircle className="text-textRead text-xl" />
        </div>
      </div>
    </div>
  );
}
