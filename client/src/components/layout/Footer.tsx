import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-cyan-500 mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link href="/">
                <span className="text-gray-300 hover:text-cyan-400 cursor-pointer">Calculator</span>
              </Link>
              <Link href="/rules">
                <span className="text-gray-300 hover:text-cyan-400 cursor-pointer">Rules</span>
              </Link>
              <Link href="/privacy">
                <span className="text-gray-300 hover:text-cyan-400 cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="text-gray-300 hover:text-cyan-400 cursor-pointer">Terms of Service</span>
              </Link>
              <Link href="/help">
                <span className="text-gray-300 hover:text-cyan-400 cursor-pointer">Help</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-cyan-500 mb-4">Disclaimer</h3>
            <p className="text-gray-300">
              This is a fan-made calculator and is not officially affiliated with EXP.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-cyan-500 mb-4">Contact</h3>
            <p className="text-gray-300">
              For support: <a href="mailto:ExpCalculator@gmail.com" className="text-cyan-500 hover:text-cyan-400">ExpCalculator@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cyan-500/30 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EXP Interest Calculator. All rights reserved.</p>
          <p className="mt-2 text-cyan-500/70">v1.12</p>
        </div>
      </div>
    </footer>
  );
}
