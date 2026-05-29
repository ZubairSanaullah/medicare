import { useMemo, useState } from "react"
import { navbarStyles, navbarStylesDr } from "../assets/dummyStyles"
import logo from '../assets/logo.png'
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Calendar, Edit, Home, LogOut, Menu, X } from "lucide-react";

const DoctorNavbar = () => {
    const [open, setOpen] = useState(false);
    const params = useParams();
    const location = useLocation();

    const doctorId = useMemo(() => {
        if (params?.id) return params.id;
        const m = location.pathname.match(/\/doctor-admin\/([^/]+)/);
        if (m) return m[1];
        return null;
    }, [params, location.pathname]);

    const basePath = doctorId
        ? `/doctor-admin/${doctorId}`
        : "/doctor-admin/login";

    const navItems = [
        { name: "Dashboard", to: `${basePath}`, Icon: Home },
        { name: "Appointments", to: `${basePath}/appointments`, Icon: Calendar },
        { name: "Edit Profile", to: `${basePath}/profile/edit`, Icon: Edit },
    ]

    return (
        <>
            <nav className={navbarStylesDr.navContainer}>
                <div className={navbarStylesDr.leftBrand}>
                    <div className={navbarStylesDr.logoContainer}>
                        <img src={logo} alt="logo" className={navbarStylesDr.logoImage} />
                    </div>

                    <div className={navbarStylesDr.brandTextContainer}>
                        <div className={navbarStylesDr.brandTitle}>MedTek</div>
                        <div className={navbarStylesDr.brandSubtitle}>HealthCare Solutions </div>

                    </div>
                </div>

                {/* Desktop Navigation */}

                <div className={navbarStylesDr.desktopMenu}>
                    <div className={navbarStylesDr.desktopMenuItems}>
                        {navItems.map(({ name, to, Icon }) => (
                            <NavLink key={to} to={to} end={to === basePath} className={(({ isActive }) =>
                                `${navbarStylesDr.baseLink} ${isActive ? navbarStylesDr.activeLink : navbarStylesDr.inactiveLink}`
                            )} onClick={() => setOpen(false)}>
                                <span className={navbarStylesDr.linkContent}>
                                    <Icon size={16} className={navbarStylesDr.linkIcon} />
                                    <span className={navbarStylesDr.linkText}>{name}</span>
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className={navbarStylesDr.rightActions}>
                    <button onClick={() => {
                        window.location.href = "/doctor-admin/login"
                    }} className={`${navbarStylesDr.logoutButtonDesktop} cursor-pointer`}>
                        <LogOut size={16} />
                        <span>Log out</span>
                    </button>

                    {/* To Toggle */}
                    <button
                        onClick={() => setOpen((s) => !s)}
                        className={navbarStylesDr.hamburgerButtonMd}
                    >{open ? <X size={24} /> : <Menu size={24} />}</button>

                    <button
                        onClick={() => setOpen((s) => !s)}
                        className={navbarStylesDr.hamburgerButtonLg}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div className={navbarStylesDr.mobileMenuContainer(open)}>
                <div className={navbarStylesDr.mobileMenuContainer}>
                    {navItems.map(({ name, to, Icon }) => (
                        <NavLink key={to} to={to} end={to === basePath} className={({ isActive }) =>
                            `${navbarStylesDr.mobileBaseLink} ${isActive ? navbarStylesDr.mobileActiveLink : navbarStylesDr.mobileInactiveLink}`
                        }
                            onClick={() => setOpen(false)}
                        >
                            <Icon size={18} className="text-emerald-400" />
                            <span>{name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DoctorNavbar