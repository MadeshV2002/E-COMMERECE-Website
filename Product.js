// // import React, { useState } from 'react'
// // import '../Component/Login.css'

// // function Product() {
// //   const[selectProduct,setSelectProduct]=useState(null)
  
// //   const products = [
// //     {id:1, name:'Shoes', price:50, img:'https://picsum.photos/200?1'},
// //     {id:2, name:'Bag', price:70, img:'https://picsum.photos/200?2'},
// //     {id:3, name:'Watch', price:120, img:'https://picsum.photos/200?3'},
// //     {id:4, name:'Sunglasses', price:90, img:'https://picsum.photos/200?4'},
// //     {id:5, name:'phone', price:190, img:'https://picsum.photos/200?5'},
// //     {id:6, name:'remote', price:145, img:'https://picsum.photos/200?6'},
// //   ];


// //     const handleAddToCart=(product)=>
// //     {
// //        setSelectProduct(product)
// //     }

// //     const  handleRemoveToCart=()=>
// //     {
// //        setSelectProduct(null)
// //     }

// //   return (
// //     <div className='product-page'>
// //       <h1>Our Products</h1>
// //       <div className='product-grid'>
// //         <div style={{ display: "flex", gap: "20px", flexWrap:'wrap',justifyContent: "center",}}>
// //         {products.map((item) => (
// //           <div
// //             key={item.id}
// //             style={{
// //               border: "1px solid #ddd",
// //               padding: "10px",
// //               borderRadius: "10px",
// //               backgroundColor:"#fff",
// //             }}
// //           >
// //             <img src={item.img} alt={item.name} width="200" height="120" />
// //             <h3>{item.name}</h3>
// //             <p>${item.price}</p>
// //             <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
// //           </div>
// //         ))}
// //       </div>

// //     {/* Modal Div */}
// //       {selectProduct && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: "0",
// //             left: "0",
// //             width: "100%",
// //             height: "100%",
// //             background: "rgba(0,0,0,0.6)",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div
// //             style={{
// //               background: "#fff",
// //               padding: "20px",
// //               borderRadius: "10px",
// //               textAlign: "center",
// //             }}
// //           >
// //             <h2>{selectProduct.name}</h2>
// //             <p>Price: ${selectProduct.price}</p>
// //             <img
// //               src={selectProduct.img}
// //               alt={selectProduct.name}
// //               width="200"
// //             />
// //             <br />
// //             <button onClick={ handleRemoveToCart} style={{ marginTop: "10px" }}>
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Product;






import React, { useState } from 'react';
import '../Component/Login.css';

function Product({ cartItems, handleAddToCart }) {
  const [modalProduct, setModalProduct] = useState(null);

  const products = [
    { id: 1, name: 'Shoes', price: 50, img: 'https://picsum.photos/200?1' },
    { id: 2, name: 'Bag', price: 70, img: 'https://picsum.photos/200?2' },
    { id: 3, name: 'Watch', price: 120, img: 'https://picsum.photos/200?3' },
    { id: 4, name: 'Sunglasses', price: 90, img: 'https://picsum.photos/200?4' },
    { id: 5, name: 'Phone', price: 190, img: 'https://picsum.photos/200?5' },
    { id: 6, name: 'Remote', price: 145, img: 'https://picsum.photos/200?6' },
  ];

  return (
    <div className='product-page'>
      <h1>Our Products</h1>
      <div className='product-grid'>
        {products.map(item => {
          const inCart = cartItems.find(ci => ci.id === item.id);

          return (
            <div key={item.id} className='product-card'>
              <img
                src={item.img}
                alt={item.name}
                width="200"
                height="120"
                onClick={() => setModalProduct(item)}
              />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              {inCart && <p>In Cart: {inCart.qty}</p>}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          );
        })}
      </div>

      {/* Product Modal */}
      {modalProduct && (
        <div className="modal-overlay" onClick={() => setModalProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalProduct.name}</h2>
            <p>Price: ${modalProduct.price}</p>
            <img src={modalProduct.img} alt={modalProduct.name} width="200" />
            <br />
            <button onClick={() => setModalProduct(null)} style={{ marginTop: "10px" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
