import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getMeService } from "@/services/customer/get.me.service";
import { useCustomer } from "@/context/customer.context";
import { useCustomerCookie } from "@/context/cookie.context";

export function useAppBar() {
  const router = useRouter();
  const { setCustomer } = useCustomer();
  const { setCurrentCookie } = useCustomerCookie();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const pages = ["Inicio", "Descobrir"];
  const routesPage = ["/", "/discover"];
  const settings = ["Meu Perfil", "Sair"];
  const routesSettings = ["/user/me", "/login"];

  const handleMenuItemClick = (
    route: string,
    title?: string,
  ) => {
    if (title == "Sair") {
      setCustomer(undefined);
      setCurrentCookie(undefined, false);
      router.push(route);
    }
    router.push(route);
  };

  const handleGetMeService = async () => {
    const response = await getMeService();
    if (response.status === 200) {
      setCustomer(response.data);
    }
  };

  return {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    pages,
    settings,
    routesPage,
    routesSettings,
    handleLogin,
    handleMenuItemClick,
    handleGetMeService,
  };
}
