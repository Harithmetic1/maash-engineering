import React from 'react'
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserRow = ({ id, index, username, email, role, lastLogin }) => {
  return (
    <tr className="w-full h-fit">
    <td className="text-center">{index + 1}</td>
    <td className="text-center">{username}</td>
    <td className="text-center">{email ? email : "No email"}</td>
    <td className="text-center">{role}</td>
    <td className="text-center">{lastLogin ? lastLogin : "Not yet Logged In"}</td>
    <td className="text-center flex justify-center items-center">
      <button className="text-admin-secondary px-3 py-2 rounded-md">
        <FontAwesomeIcon icon={faEdit} width={20} height={20} />
      </button>
      <button className="text-admin-secondary px-3 py-2 rounded-md">
        <FontAwesomeIcon icon={faTrash} width={20} height={20} />
      </button>
    </td>
  </tr>
  )
}

export default UserRow;