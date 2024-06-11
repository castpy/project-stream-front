import { useRouter } from "next/navigation";
import { useState } from "react";
import customerAuthService from "./services/customer.auth.service";
import { AxiosError } from "@/config/axios/types/axios.error";
import { setCookie } from "@/utils/setCookie";
import { useCustomerCookie } from "@/context/cookie.context";

export default function useLogin() {
  const router = useRouter();
  const cookieProvider = useCustomerCookie();
  const [loading, setLoading] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(true);
  const [enableButton, setEnableButton] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [severity, setSeverity] = useState<
    "error" | "success" | "info" | "warning" | undefined
  >("error");

  const handleCreateAccount = () => {
    router.push("/signup");
  };

  const createAlertMessage = (
    message: string,
    severity: "error" | "success" | "info" | "warning",
    time: number = 5000
  ) => {
    setError(message);
    setSeverity(severity);
    setTimeout(() => {
      setError(undefined);
      setSeverity(undefined);
    }, time);
  };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        setLoading(true);
        setShowButton(false);
        const response = await customerAuthService({ email, password });
        if (response.status === 201) {
          cookieProvider.setCurrentCookie(response.data.token, true);
          createAlertMessage("Seja bem-vindo!", "success");
          setTimeout(() => {
            router.push("/");
          }, 3000);
        }
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data) {
          createAlertMessage(axiosError.response.data.message, "error");
        } else {
          createAlertMessage("Erro inesperado", "error");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleCreateAccount,
    error,
    setError,
    severity,
    setSeverity,
    createAlertMessage,
    enableButton,
    setEnableButton,
    handleSubmit,
    showButton,
    loading,
  };
}
