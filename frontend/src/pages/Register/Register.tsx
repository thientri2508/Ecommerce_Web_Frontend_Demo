import banner from "../../core/assets/banner/logo.png";
import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";
import { useAuth } from "../../core/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {

  // const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/"); 
  //   }
  // }, [isAuthenticated, navigate]);

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
            <RegisterForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Register;
