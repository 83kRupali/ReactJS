


import React from "react";

export default function Card() {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                {/* Placeholder Image */}
                <img 
                    src="https://th.bing.com/th/id/OIP.88hQwxL9ILYl7PV_HXgWqgHaE8?w=191&h=128&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt="Product"
                    className="rounded-t-lg w-full h-48 object-cover"
                />
            </a>

            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Premium Laptop with High-Performance Specs
                    </h5>
                </a>

                {/* Star Ratings */}
                <div className="flex items-center mt-2.5 mb-4">
                    {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.393a1 1 0 00.95.69h4.623c.969 0 1.371 1.24.588 1.81l-3.743 2.72a1 1 0 00-.364 1.118l1.43 4.393c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.743 2.72c-.785.57-1.84-.197-1.54-1.118l1.43-4.393a1 1 0 00-.364-1.118l-3.743-2.72c-.783-.57-.381-1.81.588-1.81h4.623a1 1 0 00.95-.69l1.43-4.393z"/>
                        </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.393a1 1 0 00.95.69h4.623c.969 0 1.371 1.24.588 1.81l-3.743 2.72a1 1 0 00-.364 1.118l1.43 4.393c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.743 2.72c-.785.57-1.84-.197-1.54-1.118l1.43-4.393a1 1 0 00-.364-1.118l-3.743-2.72c-.783-.57-.381-1.81.588-1.81h4.623a1 1 0 00.95-.69l1.43-4.393z"/>
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded dark:bg-blue-900">
                        4.0
                    </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>

                    <a href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}