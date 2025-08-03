import React, { useState } from 'react';

function Tittlebar() {
  const items = [
    'eBay Live',
    'Saved',
    'Electronics',
    'Motors',
    'Fashion',
    'Collectibles and Art',
    'Sports',
    'Health & Beauty',
    'Industrial equipment',
    'Home & Garden',
    'Deals',
    'Sell'
  ];

  const firstTwo = items.slice(0, 3);
  const rest = items.slice(3);

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-16 py-2 min-h-[2rem] flex flex-col gap-2">
      <ul className="flex flex-wrap justify-center gap-6 text-sm">
        {/* First 2 items: always visible */}
        {firstTwo.map((item, index) => (
          <li key={index}>
            <a
              className="no-underline hover:underline hover:underline-offset-4  decoration-[2px] hover:decoration-[#1A77F2] hover:text-[#1A77F2] transition"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}

        {/* "More" dropdown — only on mobile (md:hidden) */}
        <li className="block md:hidden relative">
          <button
            className="text-sm no-underline hover:underline hover:text-[#1A77F2] hover:decoration-[#1A77F2] transition"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            More ▾
          </button>
          {showDropdown && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
              {rest.map((item, idx) => (
                <li key={idx}>
                  <a
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#1A77F2] transition"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Rest of the items: only visible on md+ screens */}
        {rest.map((item, index) => (
          <li key={index + 2} className="hidden md:block">
            <a
              className="no-underline hover:underline hover:underline-offset-4  hover:decoration-[#1A77F2] hover:text-[#1A77F2] transition"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tittlebar;
