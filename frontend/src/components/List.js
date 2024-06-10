import React from 'react'

import { BiEditAlt } from "react-icons/bi"
import { BsTrash } from "react-icons/bs"

const List = ({id, task, setupdateUI, updateMode}) => {
  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEditAlt />
        <BsTrash />
      </div>
    </li>
  )
}

export default List