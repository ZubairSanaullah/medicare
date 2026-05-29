import { useState } from "react";
import { contactPageStyles } from "../assets/dummyStyles";
import { MapPin, Phone, User2, MessageSquare, Activity, Send } from "lucide-react";

const ContactPage = () => {
    const initial = {
        name: "",
        email: "",
        phone: "",
        department: "",
        service: "",
        message: "",
    };

    const [form, setForm] = useState(initial);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const departments = [
        "General Physician",
        "Cardiology",
        "Orthopedics",
        "Dermatology",
        "Pediatrics",
        "Gynecology",
    ];

    const servicesMapping = {
        "General Physician": [
            "General Consultation",
            "Adult Checkup",
            "Vaccination",
            "Health Screening",
        ],
        Cardiology: [
            "ECG",
            "Echocardiography",
            "Stress Test",
            "Heart Consultation",
        ],
        Orthopedics: ["Fracture Care", "Joint Pain Consultation", "Physiotherapy"],
        Dermatology: ["Skin Consultation", "Allergy Test", "Acne Treatment"],
        Pediatrics: ["Child Checkup", "Vaccination (Child)", "Growth Monitoring"],
        Gynecology: ["Antenatal Care", "Pap Smear", "Ultrasound"],
    };

    const genericServices = [
        "General Consultation",
        "ECG",
        "Blood Test",
        "X-Ray",
        "Ultrasound",
        "Physiotherapy",
        "Vaccination",
    ];

    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Full name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(form.email))
            e.email = "Enter a valid email";
        if (!form.phone.trim()) e.phone = "Phone number is required";
        else if (!/^[0-9]{10}$/.test(form.phone))
            e.phone = "Phone number must be exactly 10 digits";

        if (!form.department && !form.service) {
            e.department = "Please choose a department or service";
            e.service = "Please choose a department or service";
        }

        if (!form.message.trim()) e.message = "Please write a short message";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === "department") {
            setForm((prev) => ({ ...prev, department: value, service: "" }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }

        setErrors((prev) => ({ ...prev, [name]: undefined }));

        if (name === "department" || name === "service") {
            setErrors((prev) => {
                const copy = { ...prev };
                if (
                    (name === "department" && value) ||
                    (name === "service" && value) ||
                    form.department ||
                    form.service
                ) {
                    delete copy.department;
                    delete copy.service;
                }
                return copy;
            });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;

        const text = `*Contact Request*\nName: ${form.name}\nEmail: ${form.email
            }\nPhone: ${form.phone}\nDepartment: ${form.department || "N/A"
            }\nService: ${form.service || "N/A"}\nMessage: ${form.message}`;

        const url = `https://wa.me/923019170936?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");

        setForm(initial);
        setErrors({});
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    }

    const availableServices = form.department
        ? servicesMapping[form.department] || []
        : genericServices;
    return (
        <div className={contactPageStyles.pageContainer}>
            <div className={contactPageStyles.bgAccent1}></div>
            <div className={contactPageStyles.bgAccent2}></div>

            <div className={contactPageStyles.gridContainer}>
                <div className={contactPageStyles.formContainer}>
                    <h2 className={contactPageStyles.formTitle}>Contact Us</h2>
                    <p className={contactPageStyles.formSubtitle}>
                        Ready to get started? Send us a message and we’ll get back to
                        you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className={contactPageStyles.formSpace}>
                        <div className={contactPageStyles.formGrid}>
                            <div>
                                <label className={contactPageStyles.label}>
                                    <User2 size={16} /> Full Name
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className={contactPageStyles.input}
                                />
                                {errors.name && (
                                    <p className={contactPageStyles.error}>{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className={contactPageStyles.label}>
                                    <User2 size={16} /> Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com"
                                    className={contactPageStyles.input}
                                />
                                {errors.email && (
                                    <p className={contactPageStyles.error}>{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className={contactPageStyles.label}>
                                    <Phone size={16} /> Phone
                                </label>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="1234567890"
                                    className={contactPageStyles.input}
                                    maxLength="10"
                                    aria-invalid={!!errors.phone}
                                />
                                {errors.phone && (
                                    <p className={contactPageStyles.error}>{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <label className={contactPageStyles.label}>
                                    <MapPin size={16} /> Department
                                </label>
                                <select
                                    name="department"
                                    value={form.department}
                                    onChange={handleChange}
                                    className={contactPageStyles.input}
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((d) => (
                                        <option key={d} value={d}>
                                            {d}
                                        </option>
                                    ))}
                                </select>
                                {errors.department && (
                                    <p className={contactPageStyles.error}>
                                        {errors.department}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className={contactPageStyles.label}>
                                <Activity size={16} /> Service
                            </label>
                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                className={contactPageStyles.input}
                            >
                                <option value="">Select Service</option>
                                {availableServices.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            {errors.service && (
                                <p className={contactPageStyles.error}>{errors.service}</p>
                            )}
                        </div>

                        <div>
                            <label className={contactPageStyles.label}>
                                <MessageSquare size={16} /> Message
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                className={contactPageStyles.textarea}
                                rows={4}
                            />
                            {errors.message && (
                                <p className={contactPageStyles.error}>{errors.message}</p>
                            )}
                        </div>

                        <div className={contactPageStyles.buttonContainer}>
                            <button type="submit" className={contactPageStyles.button}>
                                <Send size={16} /> Send Message
                            </button>
                            {sent && (
                                <span className={contactPageStyles.sentMessage}>
                                    Message sent successfully!
                                </span>
                            )}
                        </div>
                    </form>
                </div>

                {/* Info Container */}
                <div className={contactPageStyles.infoContainer}>
                    <div className={contactPageStyles.infoCard}>
                        <h3 className={contactPageStyles.infoTitle}>Get In Touch</h3>
                        <p className={contactPageStyles.infoText}>
                            We're here to help and answer any question you might have.
                        </p>
                        <div className="mt-4 space-y-3">
                            <div className={contactPageStyles.infoItem}>
                                <MapPin className="text-emerald-600" size={20} />
                                <span>123 Medical Center Drive, Cityville, State 12345</span>
                            </div>
                            <div className={contactPageStyles.infoItem}>
                                <Phone className="text-emerald-600" size={20} />
                                <span>(123) 456-7890</span>
                            </div>
                            <div className={contactPageStyles.infoItem}>
                                <MessageSquare className="text-emerald-600" size={20} />
                                <span>contact@medicare.com</span>
                            </div>
                        </div>
                    </div>

                    <div className={contactPageStyles.hoursContainer}>
                        <h4 className={contactPageStyles.hoursTitle}>Working Hours</h4>
                        <p className={contactPageStyles.hoursText}>Mon - Fri: 8:00 AM - 8:00 PM</p>
                        <p className={contactPageStyles.hoursText}>Sat - Sun: 9:00 AM - 5:00 PM</p>
                        <p className={contactPageStyles.hoursText}>Emergency Services: 24/7</p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.460792853461!2d80.98709187529213!3d26.870382662861033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2ae3cea2421%3A0x6c0de12e8a77818f!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731769000000!5m2!1sen!2sin"
                        className={contactPageStyles.map}
                        title="Gomti Nagar Map"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

        </div>
    )
}

export default ContactPage