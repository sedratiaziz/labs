import React from 'react'
import { Link, useParams } from 'react-router'

function MailBoxDetails(props) {
  const { id } = useParams()
  let { findBox } = props

  const foundBox = findBox(id)

  if (foundBox) {
    return (
      <>
      <h2>MailBox ID: {foundBox._id}</h2>
      <h2>Owner Name: {foundBox.boxOwner}</h2>
      <h2>Size: {foundBox.boxSize}</h2>
      <Link to='/mailboxes'><button>Back</button></Link>
      </>
    )
  } else {
    return (
      <h1>No MailBox found with the id {id}!</h1>
    )
  }
  
}

export default MailBoxDetails