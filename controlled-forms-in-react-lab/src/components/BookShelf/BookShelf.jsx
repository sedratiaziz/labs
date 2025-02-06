import React, { useState } from 'react'

function BookShelf() {
    const [books, setBooks] = useState([]);

   
    const [formData, setFormData] = useState({
        title: '',
        author: '',
    })

  
    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
      }
    
       
    function handleSubmit(event){
        event.preventDefault()

        const newBook = {
            title: formData.title,
            author: formData.author,
        }
        setBooks([...books, newBook]);
        setFormData({
            title: "",
            author: "",            
        })
    }


    function handleDelete(title) {        

        const filteredBooks = books.filter((oneBook)=>{
            return oneBook.title !== title
        })

        setBooks(filteredBooks)
    }
  return (
    <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">title:</label>
                    <input onChange={handleChange} value={formData.title} required type="text" name="title" id="title" />
                    <br />
                    <label htmlFor="author">author:</label>
                    <input onChange={handleChange} value={formData.author} required type="text" name="author" id="author" />
                    <br />
                    <button>Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((oneBook)=>
                    <div className='bookCard' key={oneBook.title}>
                        <h2>{oneBook.title}</h2>
                        <h3>author: {oneBook.author}</h3>
                        <button onClick={()=>{handleDelete(oneBook.title)}}>delete</button>
                    </div>
                )}
            </div>
        </div>

    </>
  )
}

export default BookShelf