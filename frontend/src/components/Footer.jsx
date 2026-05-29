import { footerStyles } from "../assets/dummyStyles"
import logo from '../assets/logo.png'
import { Stethoscope, Activity, MapPin, Phone, Mail, MapPinCheck, ChevronRight, Send } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Doctors", href: "/doctors" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
        { name: "Appointments", href: "/appointments" },
    ];

    const services = [
        { name: "Blood Pressure Check", href: "/services" },
        { name: "Blood Sugar Test", href: "/services" },
        { name: "Full Blood Count", href: "/services" },
        { name: "X-Ray Scan", href: "/services" },
        { name: "Blood Sugar Test", href: "/services" },
    ];

    const socialLinks = [
        {
            Icon: FaFacebook,
            color: footerStyles.facebookColor,
            name: "Facebook",
            href: "https://www.facebook.com/people/Hexagon-Digital-Services/61567156598660/",
        },
        {
            Icon: FaTwitter,
            color: footerStyles.twitterColor,
            name: "Twitter",
            href: "https://www.linkedin.com/company/hexagondigtial-services/",
        },
        {
            Icon: FaInstagram,
            color: footerStyles.instagramColor,
            name: "Instagram",
            href: "http://instagram.com/hexagondigitalservices?igsh=MWp2NG1oNTlibWVnZA%3D%3D",
        },
        {
            Icon: FaLinkedin,
            color: footerStyles.linkedinColor,
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/hexagondigtial-services/",
        },
        {
            Icon: FaYoutube,
            color: footerStyles.youtubeColor,
            name: "YouTube",
            href: "https://youtube.com/@hexagondigitalservices?si=lxEFYNCP42t6AoDJ",
        },
    ];
    return (
        <footer className={footerStyles.footerContainer}>
            <div className={footerStyles.floatingIcon1}>
                <Stethoscope className={footerStyles.stethoscopeIcon} />
            </div>
            <div className={footerStyles.floatingIcon2} style={{ animationDelay: '3s' }}>
                <Activity className={footerStyles.activityIcon} />
            </div>

            <div className={footerStyles.mainContent}>
                <div className={footerStyles.gridContainer}>
                    <div className={footerStyles.companySection}>
                        <div className={footerStyles.logoContainer}>
                            <div className={footerStyles.logoWrapper}>
                                <div className={footerStyles.logoImageContainer}>
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className={footerStyles.logoImage}
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className={footerStyles.companyName}>MediCare</h2>
                                <p className={footerStyles.companyTagline}>
                                    Healthcare Solutions
                                </p>
                            </div>
                        </div>

                        <p className={footerStyles.companyDescription}>
                            Your trusted partner for reliable and convenient healthcare services.
                            We are committed to providing the best medical care with compassion and professionalism.

                        </p>

                        <div className={footerStyles.contactContainer}>
                            <div className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconWrapper}>
                                    <Phone className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>+92 312 4903447</span>
                            </div>

                            <div className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconWrapper}>
                                    <Mail className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>zubairsanaullah1122@gmail.com</span>
                            </div>

                            <div className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconWrapper}>
                                    <MapPinCheck className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>Lahore, Punjab, Pakistan</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className={footerStyles.linksSection}>
                        <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
                        <ul className={footerStyles.linksList}>
                            {quickLinks.map((link, index) => (
                                <li key={index} className={footerStyles.linkItem}>
                                    <a href={link.href} className={footerStyles.quickLink}>
                                        <div className={footerStyles.quickLinkIconWrapper}>
                                            <ChevronRight className={footerStyles.quickLinkIcon} />
                                        </div>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className={footerStyles.linksSection}>
                        <h3 className={footerStyles.sectionTitle}>Services</h3>
                        <ul className={footerStyles.linksList}>
                            {services.map((service, index) => (
                                <li key={index} className={footerStyles.linkItem}>
                                    <a href={service.href} className={footerStyles.serviceLink}>
                                        <div className={footerStyles.serviceIcon}></div>
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Social Section */}
                    <div className={footerStyles.newsletterSection}>
                        <h3 className={footerStyles.newsletterTitle}>Newsletter</h3>
                        <p className={footerStyles.newsletterDescription}>
                            Subscribe to our newsletter to get updates on our latest services.
                        </p>

                        <form className={footerStyles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                            <div className={footerStyles.mobileNewsletterContainer}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={footerStyles.emailInput}
                                />
                                <button type="submit" className={footerStyles.mobileSubscribeButton}>
                                    <Send className={footerStyles.mobileButtonIcon} /> Subscribe
                                </button>
                            </div>

                            <div className={footerStyles.desktopNewsletterContainer}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={footerStyles.desktopEmailInput}
                                />
                                <button type="submit" className={footerStyles.desktopSubscribeButton}>
                                    <Send className={footerStyles.desktopButtonIcon} />
                                    <span className={footerStyles.desktopButtonText}>Subscribe</span>
                                </button>
                            </div>
                        </form>

                        <div className={footerStyles.socialContainer}>
                            {socialLinks.map((social, index) => {
                                const Icon = social.Icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`${footerStyles.socialLink} ${social.color}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className={footerStyles.socialIconBackground}></div>
                                        <Icon className={footerStyles.socialIcon} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={footerStyles.bottomSection}>
                    <div className={footerStyles.copyright}>
                        &copy; {currentYear} MediCare. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer