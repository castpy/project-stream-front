import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function useAppBar() {
  const router = useRouter();
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
  const settings = ["Meu Perfil", "Logout"];
  const routesSettings = ["/profile", "/"];

  const handleMenuItemClick = (route: string) => {
    router.push(route);
  }

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
  };
}
