import MeTemplate from "@/templates/Me";
import NotFoundTemplate from "@/templates/NotFound";
import UserTemplate from "@/templates/User";
import React from "react";
import { isUuid } from "uuidv4";

const UserPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      {params.id === "me"
        ? <MeTemplate />
        : isUuid(params.id)
        ? <UserTemplate id={params.id} />
        : <NotFoundTemplate />}
    </>
  );
};

export default UserPage;
