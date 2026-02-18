import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-white text-black font-bold text-2xl p-2">
      User:{userId}
    </div>
  );
}

export default User;
