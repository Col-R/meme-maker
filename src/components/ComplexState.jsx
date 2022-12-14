import React from 'react'
import './ComplexState.css'

const ComplexState = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
        
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prev => {
            return {
                ...contact,
                isFavorite: !contact.isFavorite
            }
        })
    }
  return (
    <main className='complex__main'>
        <article className="complex__card">
            <img src="./images/user.png" className="card--image" alt = "user" />
            <div className="card--info">
                <img 
                    src={`../images/${starIcon}`} 
                    className="card--favorite"
                    onClick={toggleFavorite}
                    alt = "star"
                />
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    </main>
  )
}

export default ComplexState