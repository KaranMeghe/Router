import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center">
      User: {userid}{" "}
      <p>
        Anything can come into value. it can be id or username Anything come to
        url you will get it acess. <br />
        on that basis you want to display it or want to make a call on db
        depends on you
      </p>
    </div>
  );
};

export default User;
