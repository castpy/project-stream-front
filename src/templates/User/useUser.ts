import { getUser } from "@/services/public/get.user.service";
import { GetUserService } from "@/types/public/get.user.service";
import { useState } from "react";

export default function useUser() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<GetUserService | null>(null);

  const handleGetUser = async (id: string) => {
    try {
      setLoading(true)
      const response = await getUser(id)
      setUser(response.data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    handleGetUser
  }
}