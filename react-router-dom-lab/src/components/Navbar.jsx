import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/mailboxes'>Mail Boxes</Link>
        <br />
        <Link to='/new-mailbox'>New Mail Box</Link>
    </>
  )
}

export default Navbar