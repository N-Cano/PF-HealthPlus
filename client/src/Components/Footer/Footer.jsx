import { FaXTwitter } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black flex items-center justify-center h-12">
      <div className="mr-8">
        <a href="" target="_blank" rel="noopener noreferrer">
          <FiInstagram size={24} color="white" />
        </a>
      </div>

      <div className="mr-8">
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer">
          <TfiFacebook size={24} color="white" />
        </a>
      </div>

      <div>
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer">
          <FaXTwitter size={24} color="white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
