import { useNavigate } from "react-router-dom";
import banner from "../../core/assets/banner/logo.png";
import { useAuth } from "../../core/context/AuthContext";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Login = () => {

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Điều hướng đến Home nếu đã đăng nhập
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="overflow-hidden">
      <div
        className=" w-full bg-bg-alt1 py-10 bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-[1100px] m-auto h-full flex items-end justify-end">
          <motion.div
            className="w-[470px] bg-bg rounded-[32px] shadow-custom-shadow"
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <LoginForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Login;
