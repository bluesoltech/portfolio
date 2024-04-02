import React, { useState, useRef } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from 'emailjs-com';


const Getstarted = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_753ii5h",
                "template_86nhiri",
                form.current,
                "bNKjzy4nFc2UTxzYI"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    alert("Your form has been sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div
            className="bg-[#0F0E0E]"

        >
            <div className="container mx-auto  p-6 flex flex-wrap md:flex-nowrap">
                <div className="justify-center items-center w-full">
                    <form onSubmit={sendEmail} className="max-w-md mx-auto" ref={form}>
                        <h2 className="text-center text-2xl font-bold text-white mt-12 mb-4">
                            Don't Be A Stranger Just Say Hello.
                        </h2>
                        <p className="text-white text-xl justify-center text-center">
                            We do fast phone repair. In most cases, we’ll normally get your
                            phone connected within minutes.
                        </p>
                        <div className="mb-4">
                            <label
                                htmlFor="user_name"
                                className="block text-white text-sm font-bold mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="user_email"
                                className="block text-white text-sm font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="user_phonenumber"
                                className="block text-white text-sm font-bold mb-2"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="user_phonenumber"
                                name="user_phonenumber"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-white text-sm font-bold mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="text-sm font-semibold leading-6 text-white bg-gradient-to-r from-[#161928] to-[#4E598E] px-4 py-2 rounded-lg"
                                type="submit"
                            >
                                Send  Message
                            </button>{" "}
                        </div>
                    </form>
                </div>
                <div className="flex flex-col items-start w-full">
                    <div className="mb-10">
                        <h2 className="text-center text-2xl font-bold text-white mt-12 mb-4">
                            Get Information
                        </h2>
                        <p className="text-white text-xl justify-center text-center">
                            Our Contact information Details and Follow us on social media
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-white p-2 rounded-full inline-flex items-center justify-center">
                            <IoLocationSharp size={40} />
                        </span>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-white">
                                Corporate Office
                            </h3>
                            <p className="text-white mt-2">
                                102, Solaris Business Hub,Opp. The National Higher Secondary
                                School Nr. Parshwnath Jain Mandir, Bhuyangdev, Sola Road,
                                Ahmedabad, Gujarat 380013
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-white p-2 rounded-full inline-flex items-center justify-center">
                            <FaPhoneAlt size={40} />
                        </span>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-white">Phone</h3>
                            <p className="text-white mt-2">+91 9274682710</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-white p-2 rounded-full inline-flex items-center justify-center">
                            <IoMdMail size={40} />
                        </span>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-white">Email</h3>
                            <p className="text-white mt-2">
                                bluesoltech@gmail.com
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

};


export default Getstarted