import Wrapper from "./Wrapper";
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import dribble from "../assets/dribble.png";

const Footer = () => {
  return (
    <div className="bg-[#ECF5FF] py-16 mt-6">
      <Wrapper>
        <div className="flex gap-8 justify-between mr-20">
          <div>
            <img className="w-14" src={logo} alt="" />
            <p className="text-[#475467] font-medium mt-4">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {/* Product */}
          <div className="ml-8">
            <p className="text-[#667085] mb-4 font-semibold">Product</p>
            <div className="space-y-3 text-[#475467] font-semibold">
              <p>Overview</p>
              <p>Features</p>
              <p>Solutions</p>
              <p>Tutorials</p>
              <p>Pricing</p>
              <p>Releases</p>
            </div>
          </div>

          {/* Company */}
          <div className="">
            <p className="text-[#667085] mb-4 font-semibold">Company</p>
            <div className="space-y-3 text-[#475467] font-semibold">
              <p>About Us</p>
              <p>Careers</p>
              <p>Press</p>
              <p>News</p>
              <p>Media kit</p>
              <p>Contact</p>
            </div>
          </div>

          {/* Resources */}
          <div className="">
            <p className="text-[#667085] mb-4 font-semibold">Resources</p>
            <div className="space-y-3 text-[#475467] font-semibold">
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Events</p>
              <p>Help centre</p>
              <p>Tutorials</p>
              <p>Support</p>
            </div>
          </div>

          {/* Social */}
          <div className="">
            <p className="text-[#667085] mb-4 font-semibold">Social</p>
            <div className="space-y-3 text-[#475467] font-semibold">
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Facebook</p>
              <p>GitHub</p>
              <p>AngelList</p>
              <p>Dribbble</p>
            </div>
          </div>

          {/* Legal */}
          <div className="">
            <p className="text-[#667085] mb-4 font-semibold">Legal</p>
            <div className="space-y-3 text-[#475467] font-semibold">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
              <p>Licenses</p>
              <p>Settings</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <hr className="mt-16 mb-8 border-2 border-[#C5E2FF]" />
        <div className="flex justify-between items-center">
          <p className="text-[#667085]">
            © 2024 Heritage- Nest . All rights reserved.
          </p>

          <div className="flex gap-6">
            <img src={twitter} alt="" />
            <img src={linkedIn} alt="" />
            <img src={facebook} alt="" />
            <img src={dribble} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
