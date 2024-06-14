import { GetUserService } from "@/types/public/get.user.service";
import axios from "axios";

export const getUser = async (id: string) => {
  try {
    return axios.get<GetUserService>(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`
    );
  } catch (error) {
    throw error;
  }
}