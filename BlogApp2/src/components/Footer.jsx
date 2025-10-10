import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">WriteIt</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            WriteIt is a space for writers to express, explore, and connect.  
            Whether you’re a beginner or an expert, your stories have a home here.
          </p>
        </div>

        {/* Support / Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white transition">Help Center</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Community</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/guidelines" className="hover:text-white transition">Writing Guidelines</Link></li>
            <li><Link to="/contributors" className="hover:text-white transition">Top Contributors</Link></li>
            <li><Link to="/newsletter" className="hover:text-white transition">Subscribe to Newsletter</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <p className="text-sm mb-3 text-gray-400">Join our growing writing community.</p>
          <div className="flex space-x-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} WriteIt — Made with ❤️ by creators, for creators.
      </div>
    </footer>
  );
}
