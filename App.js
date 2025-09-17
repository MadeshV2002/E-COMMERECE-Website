
// import Login from './Component/Login';
// import Navbar from './Component/Navbar';
// import Home from './pages/Home';
// import Product from './pages/Product';
// import  Services from './pages/Services';
// import  Orders from './pages/Orders';
// import { Routes, Route, useLocation ,Navigate} from 'react-router-dom';
// import { useState } from 'react';

// function App() {
  
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
//   const location = useLocation();

//   // paths where Navbar should not show
//   const hideNavbarPaths = ['/login'];

// // Add to cart 

//   const [cartItems, setCartItems] = useState([]);


//   return (
//     <>
      

//       {/* Show Navbar only when logged in AND path not in hidden list */}
//       {isLoggedIn && !hideNavbarPaths.includes(location.pathname) && (
//         <Navbar setIsLoggedIn={setIsLoggedIn} />
//       )}

//       {/* Routes */}
//       <Routes>
      
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/home" element={<Home />} />
//         {/* <Route path="/product" element={<Product/>} /> */}
//         <Route path="/services" element={<Services/>} />
//         {/* <Route path="/orders" element={<Orders/>} /> */}
//          <Route path="/product" element={<Product cartItems={cartItems} handleAddToCart={handleAddToCart} />} />
//          <Route path="/orders" element={<Orders cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />

        
        
//         {/* Redirect "/" to login */}
//         <Route path="/" element={<Navigate to="/login" />} />
        
//       </Routes>
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Services from './pages/Services';
import Orders from './pages/Orders';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  const hideNavbarPaths = ['/login'];

  // Add product to cart
  const handleAddToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Remove one quantity
  const handleRemoveFromCart = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, qty: item.qty - 1 }
          : item
      ).filter(item => item.qty > 0)
    );
  };

  // Delete full product
  const handleDeleteFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <>
      {isLoggedIn && !hideNavbarPaths.includes(location.pathname) && (
        <Navbar
          setIsLoggedIn={setIsLoggedIn}
          cartCount={cartItems.reduce((acc, item) => acc + item.qty, 0)}
        />
      )}

      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home cartItems={cartItems} handleAddToCart={handleAddToCart} />} />
        <Route path="/product" element={<Product cartItems={cartItems} handleAddToCart={handleAddToCart} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/orders" element={
          <Orders
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
            handleDeleteFromCart={handleDeleteFromCart}
          />
        } />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
