import MeTemplate from "@/templates/Me";
import NotFoundTemplate from "@/templates/NotFound";
import React from "react";
import { isUuid } from "uuidv4";

const UserPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      {params.id === "me"
        ? <MeTemplate />
        : isUuid(params.id)
        ? "Perfil do Usuário"
        : <NotFoundTemplate />}
    </>
  );
};

export default UserPage;
