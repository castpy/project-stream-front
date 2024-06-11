import axios from "axios";
import {
  CustomerAuthService,
  CustomerAuthServiceResponse,
} from "../types/customer.auth.service";

export default function customerAuthService(data: CustomerAuthService) {
  try {
    return axios.post<CustomerAuthServiceResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/customer/auth`,
      data
    );
  } catch (error) {
    throw error;
  }
}
