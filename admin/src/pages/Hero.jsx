import Navbar from '../components/Navbar'
import { heroStyles } from '../assets/dummyStyles'
import logoImg from '../assets/logo.png'

const Hero = ({ role = 'admin', userName = "Doctor" }) => {
    const isDoctor = role === 'doctor';

    return (
        <div className={heroStyles.container}>
            <Navbar />
            <main className={heroStyles.mainContainer}>
                <section className={heroStyles.section}>
                    <div className={heroStyles.decorativeBg.container}>
                        <div className={heroStyles.decorativeBg.blurBackground}>
                            <div className={heroStyles.decorativeBg.blurShape}></div>
                        </div>

                        <div className={heroStyles.contentBox}>
                            <div className={heroStyles.logoContainer}>
                                <img src={logoImg} alt="logo" className={heroStyles.logo} />
                            </div>

                            <h1 className={heroStyles.heading}>
                                {isDoctor
                                    ? `Welcome, Dr. ${userName}`
                                    : 'Welcome to MediCare'
                                }
                            </h1>
                            <p className={heroStyles.description}>
                                {isDoctor
                                    ? "Access your patient records, manage appointments, and review medical reports securely from your dashboard."
                                    : "Manage hospital operations, doctors, staff, patient records, and system settings from a centralized control panel."
                                }
                            </p>

                            {/* Info Card */}
                            <div className={heroStyles.infoCards.container}>
                                <div className={heroStyles.infoCards.card}>
                                    <h3 className={heroStyles.infoCards.cardTitle}>
                                        Secure & Reliable
                                    </h3>
                                    <p className={heroStyles.infoCards.cardText}>
                                        Role-based access control ensures that sensitive information is protected and only accessible to authorized users.
                                    </p>
                                </div>

                                <div className={heroStyles.infoCards.card}>
                                    <h3 className={heroStyles.infoCards.cardTitle}>
                                        Real-time Management
                                    </h3>
                                    <p className={heroStyles.infoCards.cardText}>
                                        Real-time management capabilities allow for immediate updates and adjustments to hospital operations and patient care.
                                    </p>
                                </div>

                                <div className={heroStyles.infoCards.card}>
                                    <h3 className={heroStyles.infoCards.cardTitle}>
                                        User-Friendly Interface
                                    </h3>
                                    <p className={heroStyles.infoCards.cardText}>
                                        An intuitive and easy-to-use interface designed to streamline workflows and enhance productivity for all users.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Hero