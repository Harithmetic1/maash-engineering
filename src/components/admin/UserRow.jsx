import React from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteUserButton from "./DeleteUserButton";
import EditUserButton from "./EditUserButton";

const UserRow = ({ id, index, username, email, role, lastLogin }) => {
  const handleTimeStamps = (timeStamp) => {
    const date = new Date(timeStamp);

    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      // timeZoneName: "short",
    };

    return date.toLocaleString("en-US", options);
  };

  return (
    <tr className="w-full h-fit">
      <td className="text-center w-1/12">{index + 1}</td>
      <td className="text-center w-2/12">{username}</td>
      <td className="text-center w-3/12">{email ? email : "No email"}</td>
      <td className="text-center w-2/12">{role}</td>
      <td className="text-center w-2/12">
        {lastLogin ? handleTimeStamps(lastLogin) : "Not yet Logged In"}
      </td>
      <td className="text-center flex justify-center items-center">
        <EditUserButton
          id={id}
          username={username}
          key={id}
          email={email}
          role={role}
        />
        <DeleteUserButton id={id} />
      </td>
    </tr>
  );
};

export default UserRow;
