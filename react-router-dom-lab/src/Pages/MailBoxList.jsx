import React from 'react'
import { Link } from 'react-router'

function MailBoxList(props) {
  let { mailBoxes } = props

  return (
    <>
    <ul>
      {mailBoxes.map((oneMailBox)=>
        <li key={oneMailBox._id}>
          <h3>{oneMailBox.boxOwner}'s MailBox</h3>
          <Link to={`/mailboxes/${oneMailBox._id}`}>Details</Link>
        </li>
      )}
    </ul>
    </>
  )
}

export default MailBoxList