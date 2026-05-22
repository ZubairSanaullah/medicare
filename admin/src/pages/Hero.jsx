import React from 'react'
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