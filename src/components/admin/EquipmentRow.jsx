import { useStore } from '@/store/store';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react'

const EquipmentRow = ({ serial, model, name, year, thumbnail, rate, condition, id, index }) => {
    const { deleteEquipment } = useStore((state) => state);

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        queryKey: "deleteEquipment",
        mutationFn: (id) => deleteEquipment(id),
        onSuccess: () => {
            queryClient.invalidateQueries("equipments");
        }
    });

    const handleDelete = () => {
        alert("Are you sure you want to delete this equipment?");
        mutate(id);
    }

  return (
    <tr className="w-full h-fit" key={id}>
                  <td className="w-1/12 h-[50px] text-center">{index + 1}</td>
                  <td className="w-fit h-[50px] table-cell text-center">
                    <div className="m-auto">
                      {thumbnail &&
                        <Image
                        src={thumbnail}
                        alt={name}
                        width={40}
                        height={40}
                        className="object-cover rounded-s-sm m-auto"
                      />}
                    </div>
                  </td>
                  <td className="w-2/12 h-[50px] text-center">{serial}</td>
                  <td className="w-2/12 h-[50px] text-center">{name}</td>
                  <td className="w-1/12 h-[50px] text-center">{model}</td>
                  <td className="w-2/12 h-[50px] text-center">N {rate ? rate : "null"}</td>
                  <td className="w-1/12 h-[50px] text-center">{year}</td>
                  <td className="w-1/12 h-[50px] text-center">{condition}</td>
                  <td className="w-2/12 h-[50px] text-center">
                    <button className="text-admin-secondary px-3 py-1 rounded-md">
                      <FontAwesomeIcon icon={faEdit} width={15} height={15} />
                    </button>
                    <button className="text-admin-secondary py-1 rounded-md" onClick={() => handleDelete()}>
                      <FontAwesomeIcon icon={faTrash} width={15} height={15} />
                    </button>
                  </td>
                </tr>
  )
}

export default EquipmentRow;