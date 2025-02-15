// import React from "react";
// import { Link } from "react-router-dom";

// export default function(){
//     return(
//         <footer className="bg-white border-y">

//             <div>
//                 <div className="mx-auto w-full max-wscreen-xl p-4 py-6 lg:py-8">
//                     <div className="mb-6 md:mb-0">
//                         <Link to="/" className="flex items-center">
//                             <img src="" alt="Logo" />
//                         </Link>
//                     </div>

//                     <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-colss-3">
//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-90 uppercase">Resources                            
//                             </h2>

//                             <ul className="ext-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <Link to="/" className="hover:underline">
//                                         Home
//                                     </Link>
//                                 </li>
                                
//                                 <li>
//                                     <Link to="/about" className="hover:underline">
//                                         About
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
//                                 Follow us
//                             </h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <a href="https://github.com/hiteshchoudhary" className="hover:underline" target="_blank" rel="noreferrer">
//                                         Github
//                                     </a>
//                                 </li>
                                
//                                 <li>
//                                     <Link to="/" className="hover:underline">
//                                         Discard
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
//                                 Legal
//                             </h2>
//                             <ul className="text-gray-500 font-medium">
//                                 <li className="mb-4">
//                                     <Link to="#" className="hover:underline">
//                                         Privacy Policy
//                                     </Link>
//                                 </li>

//                                 <li>
//                                     <Link to="#" className="hover:underline">
//                                         Terms & amp: Conditions
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>


//                 <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>


//                 <div className="sm:flex sm:items-center sm:justify-between">
//                     <span className="text-sm text-gray-500 sm:text-center">
//                         @2025

//                         <a href="https://github.com/hiteshchoudhary" className="hover:underline">
//                             hitestchoudhary
//                         </a>

//                         . All Rights Reversed
//                     </span>

//                     <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
//                         <Link to="#" className="text-gray-500 hover:text-gray-900">
//                             <svg className="w-4 h-4"
//                             aria-hidden="true" xmls="https://www.org/2000/svg"
//                             fill="currentColor" viewBox="0 0 8 19"
//                             >
//                                 <path fill="evenodd" d=""
//                                 clip-rule="even0dd"
//                                 />
//                             </svg>
                            
//                             <span className="sr-only">FaceBook Page</span>
//                         </Link>

//                         <Link to="#" className="text-gray-500">
//                             <svg className="w-4 h-4"
//                             aria-hidden="true" xmls="https://www.org/2000/svg"
//                             fill="currentColor" viewBox="0 0 21 16"
//                             >
//                                 <path fill="evenodd" d=""
//                                 clip-rule="even0dd"
//                                 />
//                             </svg>
                            
//                             <span className="sr-only">Discard community</span>
//                         </Link>

//                         <Link to="#" className="text-gray-500 hover:text-gray-900">
//                             <svg className="w-4 h-4"
//                             aria-hidden="true" xmls="https://www.org/2000/svg"
//                             fill="currentColor" viewBox="0 0 20 20"
//                             >
//                                 <path fill="evenodd" d=""
//                                 clip-rule="even0dd"
//                                 />
//                             </svg>
                            
//                             <span className="sr-only">Twitter Page</span>
//                         </Link>

//                         <Link to="#" className="text-gray-500 hover:text-gray-900">
//                             <svg className="w-4 h-4"
//                             aria-hidden="true" xmls="https://www.org/2000/svg"
//                             fill="currentColor" viewBox="0 0 20 20"
//                             >
//                                 <path fill="evenodd" d=""
//                                 clip-rule="even0dd"
//                                 />
//                             </svg>
                            
//                             <span className="sr-only">GitHub Account</span>
//                         </Link>

//                         <Link to="#" className="text-gray-500">
//                             <svg className="w-4 h-4"
//                             aria-hidden="true" xmlns="https://www.org/2000/svg"
//                             fill="currentColor" viewBox="0 0 20 20"
//                             >
//                                 <path fill="evenodd" d=""
//                                 clip-rule="even0dd"
//                                 />
//                             </svg>
                            
//                             <span className="sr-only">Dribble Account</span>
//                         </Link>

//                     </div>

//                 </div>

//             </div>
//         </footer>
//     );
// }









import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="mb-6 md:mb-0">
                    <Link to="/" className="flex items-center">
                        <img src="https://th.bing.com/th/id/OIP.FFMODNiMq_FoK-8xVryXMgAAAA?w=221&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Logo" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Resources
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Follow us
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a
                                    href="https://github.com/hiteshchoudhary"
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <Link to="/" className="hover:underline">
                                    Discord
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Legal
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025{" "}
                        <a
                            href="https://github.com/hiteshchoudhary"
                            className="hover:underline"
                        >
                            Hitesh Choudhary
                        </a>{" "}
                        . All Rights Reserved
                    </span>

                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path fillRule="evenodd" d="" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook Page</span>
                        </Link>

                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path fillRule="evenodd" d="" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Discord Community</span>
                        </Link>

                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter Page</span>
                        </Link>

                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">GitHub Account</span>
                        </Link>

                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Dribbble Account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
