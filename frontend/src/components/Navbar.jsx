import { useLocation, useNavigate, Link } from "react-router-dom";
import { navbarStyles } from "../assets/dummyStyles"
import { useState, useRef } from "react"
import logo from '../assets/public/logo.png'
import { useClerk, useAuth } from "@clerk/react"
import { User } from "lucide-react";

const STORAGE_KEY = "doctorToken_v1";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(() => {
        try {
            return Boolean(localStorage.getItem(STORAGE_KEY));
        } catch {
            return false;
        }
    });
    const location = useLocation();
    const navRef = useRef(null);
    const clerk = useClerk();
    const { isSignedIn, isLoaded } = useAuth();
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Doctors", href: "/doctors" },
        { label: "Services", href: "/services" },
        { label: "Appointments", href: "/appointments" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            <div className={navbarStyles.navbarBorder}></div>
            <nav className={`${navbarStyles.navbarContainer} ${showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden}`}
            >
                <div className={navbarStyles.contentWrapper}>
                    <div className={navbarStyles.flexContainer}>
                        {/* Logo */}
                        <Link to='/' className={navbarStyles.logoLink}>
                            <div className={navbarStyles.logoContainer}>
                                <div className={navbarStyles.logoImageWrapper}>
                                    <img
                                        src={logo}
                                        alt='logo'
                                        className={navbarStyles.logoImage}
                                    />
                                </div>
                            </div>
                            <div className={navbarStyles.logoTextContainer}>
                                <h1 className={navbarStyles.logoTitle}>
                                    MediCare
                                </h1>
                                <p className={navbarStyles.logoSubtitle}>
                                    Heal with care + Quality care for all
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className={navbarStyles.desktopNav}>
                            <div className={navbarStyles.navItemsContainer}>
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.href;

                                    return (
                                        <Link
                                            key={item.href}
                                            to={item.href}
                                            className={`${navbarStyles.navItem} ${isActive ? navbarStyles.navItemActive : navbarStyles.navItemInactive}`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right side */}
                        <div className={navbarStyles.rightContainer}>
                            {isLoaded && !isSignedIn && (
                                <Link to='/doctor-admin/login' className={navbarStyles.doctorAdminButton}
                                >
                                    <User className={navbarStyles.doctorAdminIcon} />
                                    <span className={navbarStyles.doctorAdminText}>
                                        Doctor Admin
                                    </span>
                                </Link>
                            )}
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar