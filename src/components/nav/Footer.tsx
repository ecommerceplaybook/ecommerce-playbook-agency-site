import Link from "next/link";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "CRO Audits", href: "/audits" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Work With Us", href: "/work-with-us" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "CRO Calculator", href: "/tools/cro-uplift-calculator" },
  { label: "Free Resources", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Main Links */}
          <div>
            <Link href="/" className="text-lg font-semibold block mb-4">
              eCommerce Playbook
            </Link>
            <nav className="flex flex-col gap-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <nav className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} eCommerce Playbook. All rights reserved.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-6 h-6 border border-gray-300 rounded"></div>
              <div className="w-6 h-6 border border-gray-300 rounded"></div>
              <div className="w-6 h-6 border border-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


