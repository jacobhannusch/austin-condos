export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium mb-4">Austin Condos</h3>
            <p className="text-sm text-white/70">
              Your guide to high-rise living in downtown Austin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/condos/" className="text-sm text-white/70 hover:text-white transition-colors">
                All Condos
              </a>
              <a href="/condos/#contact" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Get In Touch</h4>
            <p className="text-sm text-white/70">
              Interested in downtown Austin condos? Get in touch to learn more.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">
            © {currentYear} Austin Condos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
