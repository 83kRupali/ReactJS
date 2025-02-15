import React from "react";

export default function Contact() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Contact Us</h2>
                    
                    <form className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="Write your message..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit"
                                className="px-6 py-3 bg-orange-700 text-white font-medium rounded-lg hover:bg-orange-800 transition duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
