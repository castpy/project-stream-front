import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function useAppBar() {
  const router = useRouter();
  const cookie = Cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


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
  }

  const pages = ["Inicio", "Descobrir"];
  const settings = ["Meu Perfil", "Logout"];

  return {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    pages,
    settings,
    cookie,
    handleLogin
  }
}