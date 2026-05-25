import { Calendar, Calendar1, Clock, Heart, PhoneCall, Ribbon, Star, Stethoscope, Users } from "lucide-react"
import { bannerStyles } from "../assets/dummyStyles"
import { useNavigate } from "react-router-dom";
import banner from '../assets/BannerImg.png';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className={bannerStyles.bannerContainer}>
            <div className={bannerStyles.mainContainer}>
                <div className={bannerStyles.borderOutline}>
                    <div className={bannerStyles.outerAnimatedBand}></div>
                    <div className={bannerStyles.innerWhiteBorder}></div>
                </div>

                <div className={bannerStyles.contentContainer}>
                    <div className={bannerStyles.flexContainer}>
                        <div className={bannerStyles.leftContent}>
                            <div className={bannerStyles.headerBadgeContainer}>
                                <div className={bannerStyles.stethoscopeContainer}>
                                    <div className={bannerStyles.stethoscopeInner}>
                                        <Stethoscope className={bannerStyles.stethoscopeIcon} />
                                    </div>
                                </div>

                                <div className={bannerStyles.titleContainer}>
                                    <h1 className={bannerStyles.title}>
                                        Medi
                                        <span className={bannerStyles.titleGradient}>Care+</span>
                                    </h1>

                                    {/* Stars */}
                                    <div className={bannerStyles.starsContainer}>
                                        <div className={bannerStyles.starsInner}>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    className={bannerStyles.starIcon}
                                                    key={star}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tagline */}
                            <p className={bannerStyles.tagline}>
                                Experience premium healthcare services with ease.
                                <span className={`block ${bannerStyles.taglineHighlight}`}>
                                    Trusted doctors, simple appointments, and quality care for everyone.
                                </span>
                            </p>
                            <div className={bannerStyles.featuresGrid}>
                                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderGreen}`}>
                                    <Ribbon className={bannerStyles.featureIcon} />
                                    <span className={bannerStyles.featureText}>
                                        Certified Medical staff
                                    </span>
                                </div>

                                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderBlue}`}>
                                    <Clock className={bannerStyles.featureIcon} />
                                    <span className={bannerStyles.featureText}>
                                        24/7 Support
                                    </span>
                                </div>

                                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderEmerald}`}>
                                    <Heart className={bannerStyles.featureIcon} />
                                    <span className={bannerStyles.featureText}>
                                        Safe &amp; Sound
                                    </span>
                                </div>

                                <div className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderPurple}`}>
                                    <Users className={bannerStyles.featureIcon} />
                                    <span className={bannerStyles.featureText}>
                                        500+ Doctors
                                    </span>
                                </div>
                            </div>

                            <div className={bannerStyles.ctaButtonsContainer}>
                                <button
                                    onClick={() => navigate('/doctors')}
                                    className={`${bannerStyles.bookButton} cursor-pointer`}
                                >
                                    <div className={bannerStyles.bookButtonOverlay}></div>
                                    <div className={bannerStyles.bookButtonContent}>
                                        <Calendar1 className={bannerStyles.bookButtonIcon} />
                                        <span>
                                            Book an Appointment
                                        </span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => (window.location.href = 'Tel:+923121212')}
                                    className={`${bannerStyles.emergencyButton} cursor-pointer`}
                                >
                                    <div className={bannerStyles.emergencyButtonContent}>
                                        <PhoneCall className={bannerStyles.emergencyButtonIcon} />
                                        <span>Emergency Call</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className={bannerStyles.rightImageSection}>
                            <div className={bannerStyles.imageContainer}>
                                <div className={bannerStyles.imageFrame}>
                                    <img src={banner} alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner