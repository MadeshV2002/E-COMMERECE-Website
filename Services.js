// import '../Component/Login.css'

// import { Truck, RefreshCcw, CreditCard, Headphones } from "lucide-react";

// // npm install lucide-react

// const services = [
//   {
//     icon: <Truck className="w-10 h-10 text-blue-500" />,
//     title: "Fast Delivery",
//     description: "Get your products delivered within 2-3 days with real-time tracking.",
//   },
//   {
//     icon: <RefreshCcw className="w-10 h-10 text-green-500" />,
//     title: "Easy Returns",
//     description: "Hassle-free returns within 7 days of delivery for most items.",
//   },
//   {
//     icon: <CreditCard className="w-10 h-10 text-purple-500" />,
//     title: "Secure Payments",
//     description: "All transactions are encrypted with SSL for secure and safe payments.",
//   },
//   {
//     icon: <Headphones className="w-10 h-10 text-orange-500" />,
//     title: "24/7 Support",
//     description: "Our team is available round-the-clock to assist you with your queries.",
//   },
// ];
// function Services() {
  
//   return (
//     <>
//      <div className="services">
//       <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition duration-300"
//           >
//             <div className="mb-4 flex justify-center">{service.icon}</div>
//             <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
//             <p className="text-gray-600 text-sm">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }

// export default Services;



import '../Component/Login.css'
import { Truck, RefreshCcw, CreditCard, Headphones } from "lucide-react";


import deliveryImg from "../Assets/delivery.jpg";
import returnsImg from "../Assets/returns.jpg";
import paymentImg from "../Assets/payment.jpg";
import supportImg from "../Assets/support.jpg";

const services = [
  {
    icon: <Truck className="w-10 h-10 text-blue-500" />,
    title: "Fast Delivery",
    description: "Get your products delivered within 2-3 days with real-time tracking.",
    img: deliveryImg,
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-green-500" />,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days of delivery for most items.",
    img: returnsImg,
  },
  {
    icon: <CreditCard className="w-10 h-10 text-purple-500" />,
    title: "Secure Payments",
    description: "All transactions are encrypted with SSL for secure and safe payments.",
    img: paymentImg,
  },
  {
    icon: <Headphones className="w-10 h-10 text-orange-500" />,
    title: "24/7 Support",
    description: "Our team is available round-the-clock to assist you with your queries.",
    img: supportImg,
  },
];


 function Services() {
  return (
    <div className="services py-12 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
         Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {/* Image Box */}
            <div className="image-wrapper">
              <img
                src={service.img}
                alt={service.title}
                className="service-img"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
