import WatchTemplate from "@/templates/Watch";
import React from "react";

const WatchPage = ({ params }: { params: { id: string } }) => {
  return <WatchTemplate id={params.id} />;
};

export default WatchPage;
