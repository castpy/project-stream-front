import { useCustomerCookie } from "@/context/cookie.context";
import { useCustomer } from "@/context/customer.context";
import { getMeService } from "@/services/customer/get.me.service";
import { useState } from "react";

export default function useMe() {
  const { currentCookie } = useCustomerCookie();
  const { customer, setCustomer } = useCustomer();
  const [loading, setLoading] = useState(false);

  const handleGetMeService = async () => {
    try {
      setLoading(true);
      const response = await getMeService();
      if (response.status === 200) {
        setCustomer(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    customer,
    currentCookie,
    loading,
    handleGetMeService,
  };
}
