import axios from "axios";
import { useEffect } from "react";
import { replace, useLocation, useNavigate } from "react-router-dom"
import { API_BASE } from "./src/config.js";

const VerifyPaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let cancelled = false;

        const VerifyPayment = async () => {
            const params = new URLSearchParams(location.search || "")
            const sessionId = params.get("session_id")

            if (location.pathname === '/appointment/cancel') {
                if (!cancelled)
                    navigate("/appointments?payment_status=cancelled", { replace: true })
                return;
            }

            if (!sessionId) {
                if (!cancelled)
                    navigate("/appointments?payment_status=failed", { replace: true })
                return
            }

            try {
                const res = await axios.get(`${API_BASE}/api/appointment/confirm`, {
                    params: {
                        session_id: sessionId
                    },
                    timeout: 15000,
                })

                if (cancelled) return;
                if (res?.data?.success) {
                    navigate('/appointments?payment_status=Paid', { replace: true })
                } else {
                    navigate('/appointments?payment_status=Failed', { replace: true })
                }
            } catch (error) {
                console.error("Payment verification error", error);
                if (!cancelled) {
                    navigate('/appointments?payment_status=Failed', { replace: true })
                }
            }
        }
        VerifyPayment();
        return () => {
            cancelled = true;
        };
    }, [location, navigate])
    return (
        null
    )
}

export default VerifyPaymentPage