import { GetMeService } from "@/types/customer/get.me.service";
import axios from "axios";
import Cookies from "js-cookie";

export const getMeService = async () => {
  try {
    return await axios.get<GetMeService>(
      `${process.env.NEXT_PUBLIC_API_URL}/customer/me`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(
            process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string
          )}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};
