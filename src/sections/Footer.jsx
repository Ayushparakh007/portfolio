const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icons flex space-x-4">
                    <a href="https://github.com/Ayushparakh007" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
                    </a>
                    <a href="https://x.com/ayushparakh2004" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="/assets/twitter.svg" alt="X" className="w-8 h-8" />
                    </a>
                    <a href="https://www.instagram.com/ayushparakh2004/?__pwa=1" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="/assets/instagram.svg" alt="Instagram" className="w-8 h-8" />
                    </a>
                </div>

            </div>

            <p className="text-white-500">© 2025 Ayush Parakh. All rights reserved.</p>
        </footer>
    );
};

export default Footer;