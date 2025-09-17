import React, { useState } from 'react';
import '../Component/Login.css'
function Home() {
    const [form, setForm] = useState({name:'', email:'', message:''});
  const user = JSON.parse(localStorage.getItem('user'));
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]: e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Thank you ${form.name}, we received your message!`);
    setForm({name:'', email:'', message:''});
  }
   const[selected,setSelceted]=useState(null)

  
    const handleAddToCart=(product)=>
    {
       setSelceted(product)
    }

    const  handleRemoveToCart=()=>
    {
       setSelceted(null)
    }

  return (
    < >
  <div className='home-container'>
      <header className='home-header'>
        <h1>{user ? `Welcome, ${user.name}!` : 'Welcome to Our Store!'}</h1>
        <p>Discover the best products at unbeatable prices.</p>
      </header>

      <section className='featured-products'>
        <h2>Featured Products</h2>
        <div className='product-grid'>
          {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
            <div className='product-card' key={item}>
              <img src={`https://picsum.photos/200?random=${item}`} alt={`Product ${item}`} />
              <h3>Product {item}</h3>
              <p>$ {10*item}</p>
              <button onClick={()=>handleAddToCart({
                id: item,
               name: `Product ${item}`,
               price: 10 * item,
            img: `https://picsum.photos/200?random=${item}`

              })
              }>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
    {selected && (
  <div
    style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>{selected.name}</h2>
      <p>Price: ${selected.price}</p>
      <img src={selected.img} alt={selected.name} width="200" />
      <br />
      <button onClick={handleRemoveToCart} style={{ marginTop: "10px" }}>
        Close
      </button>
    </div>
  </div>
)}

    
      <div className='about-container'>
      <img src='https://picsum.photos/400/300' alt='About Us'/>
      <div className='about-text'>
        <h1>About Our Store</h1>
        <p>
          We provide the best products at the best prices. Our goal is to make shopping easy and fun. 
          Quality and customer satisfaction is our top priority.
        </p>
      </div>
    </div>


    <div className='footer'>
      <h1>Contact Us</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Your Name' value={form.name} onChange={handleChange} required/>
        <input type='email' name='email' placeholder='Your Email' value={form.email} onChange={handleChange} required/>
        <textarea name='message' placeholder='Your Message' value={form.message} onChange={handleChange} required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
    </>
  )
}

export default Home