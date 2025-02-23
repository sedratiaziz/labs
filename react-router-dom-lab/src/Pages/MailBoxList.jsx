import React from 'react'

function MailBoxList(props) {
  let { mailBoxes } = props

  return (
    <>
    <ul>
      {mailBoxes.map((oneMailBox)=>
        <li>
          <h3>{oneMailBox._id}</h3>
          <h3>{oneMailBox.boxSize}</h3>
          <h3>{oneMailBox.boxOwner}</h3>
        </li>
      )}
    </ul>
    </>
  )
}

export default MailBoxList