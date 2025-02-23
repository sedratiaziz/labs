import React from 'react'

function MailBoxForm(props) {
  let {handleChange, handleSubmit, formData} = props
  
  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Box Owner Name</label>
        <input required onChange={handleChange} type="text" name="boxOwner" value={formData.boxOwner} id="name" />
        <br />
        <label htmlFor="size">Box Size</label>
        <input required onChange={handleChange} min={0} type="text" name="boxSize" value={formData.boxSize} id="size" />

        <button>submit</button>
      </form>
    </>
  )
}

export default MailBoxForm