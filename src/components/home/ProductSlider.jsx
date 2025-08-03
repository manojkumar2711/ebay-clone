import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import pd1 from "../../assets/productItem/pd-1.png";
import pd2 from "../../assets/productItem/pd-2.png";

import pd4 from "../../assets/productItem/pd-4.png";
import pd5 from "../../assets/productItem/pd-5.png";
import pd6 from "../../assets/productItem/pd-6.png";
import pd7 from "../../assets/productItem/pd-7.png";
import pd8 from "../../assets/productItem/pd-8.png";

const products = [
  {
    id: 1,
    promo: true,
    title: "Today's Deals",
    subtitle: "All With Free Shipping",
    button: "Shop now",
  },
  {
    id: 2,
    title: "Lenovo Laptop IdeaPad Slim 3",
    desc: '15.6" FHD IPS, Ryzen 5 7520U, AMD Radeon 610M',
    price: "$299.01",
    oldPrice: "$549.99",
    image: pd1,
  },
  {
    id: 3,
    title: "eufy SoloCam S3 Solar Wireless Security Camera",
    desc: "360° PTZ, 3K Dual-Cam, Night Vision",
    price: "$123.32",
    oldPrice: "$199.99",
    image: pd2,
  },
  {
    id: 4,
    title: "LG 77-Inch OLED evo C4 Series TV",
    desc: "webOS 24, 4K Smart TV",
    price: "$1,567.80",
    oldPrice: "$4,199.95",
    image: pd4,
  },
  {
    id: 5,
    title: "Western Digital 2TB WD Elements SE",
    desc: "RWDBEPK0020BBK-WESN Recertified",
    price: "$45.99",
    oldPrice: "$79.99",
    image: pd5,
  },
  {
    id: 6,
    title: "Lenovo Ideapad Pro 5 Gaming ",
    desc: "Intel Ultra 9 185H, RTX 4050, 32GB RAM, 1TB SSD",
    price: "$919.00",
    oldPrice: "$1,118.49",
    image: pd6,
  },
  {
    id: 7,
    title: 'Vizio 30" Dolby Atmos Soundbar',
    desc: "SV200M-0808B-RB 2.0 Ch - Refurbished",
    price: "$44.99",
    oldPrice: "$149.95",
    image: pd7,
  },
  {
    id: 8,
    title: "Play Booster Box - Edge of Eternities",
    desc: "EOE MTG Collectible Cards",
    price: "$131.95",
    oldPrice: "$138.69",
    image: pd8,
  },
];

// while (products.length < 10) {
//   products.push({
//     id: products.length + 1,
//     title: 'Sample Laptop ' + (products.length + 1),
//     desc: 'Intel i5, 8GB RAM, 256GB SSD',
//     price: '$399.00',
//     oldPrice: '$499.00',
//     image: pd + (products.length + 1),
//   });
// }

export default function ProductSlider() {
  return (
    <div className="container px-4 py-6  mx-auto">
      <Swiper spaceBetween={16} slidesPerView={"auto"} className="w-full">
        {products.map((product) => (
          <SwiperSlide key={product.id} className="  !w-[260px] flex-shrink-0">
            {product.promo ? (
              <div className="  bg-black text-white h-[234px] rounded-xl p-6 flex flex-col items-start justify-top text-left shadow-md">
                <h2 className="text-3xl font-bold">{product.title}</h2>
                <p className="text-sm mt-1">{product.subtitle}</p>
                <button className="btn btn-outline btn-sm mt-4 bg-white rounded-full text-black text-[14px]  p-3 pr-5 pl-5 border-white hover:bg-white hover:text-black">
                  {product.button}
                </button>
              </div>
            ) : (
              <div className="rounded-xl p-4 shadow-md flex flex-col h-full bg-white">
                <div className="relative mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[234px] object-contain"
                  />
                  <button className="btn btn-circle btn-sm absolute top-2 right-2 bg-white shadow ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </div>
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <p className="text-xs text-gray-600">{product.desc}</p>
                <div className="mt-2">
                  <span className="text-black font-bold text-lg">
                    {product.price}
                  </span>
                  <span className="line-through text-sm text-gray-500 ml-2">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}




// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../../features/products/productSlice";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/scrollbar";

// export default function ProductSlider() {
//   const dispatch = useDispatch();
//   const { items: products, status } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <div className="container px-4 py-6  mx-auto">
//       <Swiper spaceBetween={16} slidesPerView={"auto"} className="w-full">
//         {status === "loading" ? (
//           <p>Loading...</p>
//         ) : (
//           products.map((product) => (
//             <SwiperSlide
//               key={product._id}
//               className="!w-[260px] flex-shrink-0"
//             >
//               {product.promo ? (
//                 <div className="bg-black text-white h-[234px] rounded-xl p-6 flex flex-col items-start justify-top text-left shadow-md">
//                   <h2 className="text-3xl font-bold">{product.title}</h2>
//                   <p className="text-sm mt-1">{product.subtitle}</p>
//                   <button className="btn btn-outline btn-sm mt-4 bg-white rounded-full text-black text-[14px]  p-3 pr-5 pl-5 border-white hover:bg-white hover:text-black">
//                     {product.button}
//                   </button>
//                 </div>
//               ) : (
//                 <div className="rounded-xl p-4 shadow-md flex flex-col h-full bg-white">
//                   <div className="relative mb-3">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-[234px] object-contain"
//                     />
//                     <button className="btn btn-circle btn-sm absolute top-2 right-2 bg-white shadow ">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="2"
//                         stroke="currentColor"
//                         className="w-4 h-4 text-black"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                   <h3 className="text-sm font-semibold">{product.title}</h3>
//                   <p className="text-xs text-gray-600">{product.desc}</p>
//                   <div className="mt-2">
//                     <span className="text-black font-bold text-lg">
//                       {product.price}
//                     </span>
//                     <span className="line-through text-sm text-gray-500 ml-2">
//                       {product.oldPrice}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </SwiperSlide>
//           ))
//         )}
//       </Swiper>
//     </div>
//   );
// }
