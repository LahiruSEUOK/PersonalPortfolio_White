import { Mail, Phone, MessageCircle, Linkedin, Facebook, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Lahiru Sandeepa
            </h3>
            <p className="text-sm text-[#8B9096] mb-4">
              Project Manager | Business Analyst | Solution Designer
            </p>
            <p className="text-sm text-[#8B9096] leading-relaxed">
              Transforming business challenges into scalable software
              solutions through strategic planning, technical expertise,
              and proven agile methodologies.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#8B9096] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Me', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Process', path: '/process' },
                { name: 'Projects', path: '/projects' },
                { name: 'Blog', path: '/#blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-xs font-semibold text-[#8B9096] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Solution Design',
                'Agile Consulting',
                'Business Analysis',
                'Project Management',
                'Custom Software Development',
              ].map((item, index) => (
                <li key={index}>
                  <Link to="/services" className="hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[#8B9096] uppercase tracking-wider mb-4">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-500 shrink-0" />
                <a
                  href="mailto:lahirusandeepa22@gmail.com"
                  className="hover:text-blue-600 transition-colors break-all"
                >
                  lahirusandeepa22@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-500 shrink-0" />
                <a
                  href="tel:+94711186028"
                  className="hover:text-blue-600 transition-colors"
                >
                  +94 71 118 6028
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-gray-500 shrink-0" />
                <a
                  href="https://wa.me/94711186028"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  +94 71 118 6028
                </a>
              </li>
            </ul>

            <button className="mt-6 border border-gray-400 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition-all">
              Schedule a Call
            </button>
          </div>

          {/* Column 5 - Follow Me */}
          <div>
            <h4 className="text-xs font-semibold text-[#8B9096] uppercase tracking-wider mb-4">
              Follow Me
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Linkedin size={16} className="text-gray-500 shrink-0" />
                <a
                  href="https://linkedin.com/in/lahiru-sandeepa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Facebook size={16} className="text-gray-500 shrink-0" />
                <a
                  href="https://www.facebook.com/share/17EZTVPzR1/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Facebook
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Briefcase size={16} className="text-gray-500 shrink-0" />
                <a
                  href="https://lahirusandeepa.online"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Lahiru Sandeepa. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};