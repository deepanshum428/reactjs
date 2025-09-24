import React from "react";
import users from "../data/data.json";

const Card = (props) => {
  return (
    <div className="mt-15">
      <h1 className="flex justify-center mb-8 text-2xl ">
        Users data from Json file
      </h1>
      {/* {console.log("data print")} */}
      {/* {JSON.stringify(users)} */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.title} {user.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
