import { motion } from "framer-motion";
import { 
  RiRocketLine, 
  RiTwitterXFill, 
  RiInstagramLine, 
  RiGithubFill, 
  RiLinkedinBoxFill,
  RiMapPin2Fill,
  RiMailFill,
  RiPhoneFill,
  RiGlobalLine,
  RiArrowUpLine,
  RiHeartFill,
  RiAppleFill
} from "react-icons/ri";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    destinations: [
      { name: "Mars Colony", href: "/mars" },
      { name: "Lunar Base", href: "/moon" },
      { name: "Space Station", href: "/station" },
      { name: "Asteroid Belt", href: "/asteroids" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Safety", href: "/safety" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
    ],
  };

  return (
    <footer className="relative mt-20 bg-[#0A0A0F]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/80" />

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <RiRocketLine className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                CosmicVoyages
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Pioneering the future of space travel, making interplanetary exploration accessible to everyone.
            </p>
            <div className="flex space-x-4">
              {[RiTwitterXFill, RiInstagramLine, RiGithubFill, RiLinkedinBoxFill].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 capitalize">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 2 }}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-white/10">
          {[
            { icon: RiMapPin2Fill, text: "123 Space Station, Orbit City, Mars Colony" },
            { icon: RiMailFill, text: "contact@cosmicvoyages.space" },
            { icon: RiPhoneFill, text: "+1 (888) SPACE-TRIP" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center space-x-3 text-gray-400"
            >
              <item.icon className="h-5 w-5 text-purple-500" />
              <span className="text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <RiAppleFill className="h-4 w-4" />
            <span>Made with</span>
            <RiHeartFill className="h-4 w-4 text-red-500 animate-pulse" />
            <span>in the Cosmos</span>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm">Back to Top</span>
              <RiArrowUpLine className="h-5 w-5 group-hover:text-purple-500 transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;