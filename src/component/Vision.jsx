import React, { useEffect } from 'react'
import img1 from '../assets/img/cyber.png'
import img2 from '../assets/img/data.png'
import img3 from '../assets/img/wab.png'
import img4 from '../assets/img/app.png'
import img5 from '../assets/img/seo.png'
import img6 from '../assets/img/Graphic.png'
import { motion } from "framer-motion";



const Vision = (index) => {

    return (
        <>

            <div className='container flex flex-col justify-center items-center mx-auto mt-0'>
                <motion.div
                    className="card"
                    initial={{
                        opacity: 0,
                        // if odd index card, slide from right instead of left
                        y: index % 2 === 0 ? -50 : 50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: true }}
                >

                </motion.div>
                <div className='flex flex-col mt-6 sm:flex-row'>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            x: index % 2 === 0 ? 50 : -50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        {/* Left side content */}
                        <div className='w-full sm:w-[550px] p-4 sm:p-10'>
                            <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-black-600'>
                                Our Mission
                            </h1>
                            <p className='text-gray-700'>
                                We take pride in preserving the highly valued services.</p>
                            <p className='text-gray-700'>
                                At Blue Soltech, we always strive to build a better business
                                atmosphere through giving out excellent deliveries. The sole
                                of our mission lies in creating amazing, powerful and premium
                                quality products to serve you better.</p>
                            {/* Add more content as needed */}
                        </div>
                    </motion.div>

                    {/* Right side image */}
                    <div className='w-full sm:w-1/2 order-first sm:order-last'>
                        <motion.div
                            className="card"
                            initial={{
                                opacity: 0,
                                // if odd index card, slide from right instead of left
                                x: index % 2 === 0 ? -50 : 50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <img
                                className='w-[300px] h-auto object-cover'
                                src={img1}
                                alt='Right Side Image'
                            />
                        </motion.div>
                    </div>
                </div>


                <div className='flex flex-col mt-3 sm:flex-row'>
                    <div className='w-full sm:w-1/2'>
                        <motion.div
                            className="card"
                            initial={{
                                opacity: 0,
                                // if odd index card, slide from right instead of left
                                x: index % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >

                            <img
                                className='w-[300px] object-cover'
                                src={img2}
                                alt='Right Side Image'
                            />
                        </motion.div>
                    </div>
                    {/* Right side image */}
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            x: index % 2 === 0 ? -50 : 50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='w-full sm:w-[550px] p-4 sm:p-10'>
                            <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-black-600'>
                                Our Vision
                            </h1>
                            <p className='text-gray-700'> Pioneering Technological Frontiers</p>
                            <p className='text-gray-700'>We see ourselves at the forefront of technological
                                advancements, leading the charge in developing solutions that
                                not only meet the needs of today but anticipate the challenges
                                and opportunities of tomorrow. Our relentless pursuit of
                                innovation ensures that we remain the go-to partner for
                                cutting-edge solutions.</p>
                            {/* Add more content as needed */}
                        </div>
                    </motion.div>
                </div>

                <div className='flex flex-col mt-3 sm:flex-row'>
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            x: index % 2 === 0 ? 50 : -50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='w-full sm:w-[550px] p-4 sm:p-10'>
                            <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-black-600'>
                                Our History
                            </h1>
                            <p className='text-gray-700'> Building Tomorrow: The Legacy of Blue Soltech</p>
                            <p className='text-gray-700'>We see ourselves at the forefront of technological
                                advancements, leading the charge in developing solutions that
                                not only meet the needs of today but anticipate the challenges
                                and opportunities of tomorrow. Our relentless pursuit of
                                innovation ensures that we remain the go-to partner for
                                cutting-edge solutions.</p>
                            {/* Add more content as needed */}
                        </div>
                    </motion.div>
                    {/* Right side image */}
                    <div className='w-full sm:w-1/2 order-first sm:order-last'>
                        <motion.div
                            className="card"
                            initial={{
                                opacity: 0,
                                // if odd index card, slide from right instead of left
                                x: index % 2 === 0 ? -50 : 50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <img
                                className='w-[300px] h-auto object-cover'
                                src={img3}
                                alt='Right Side Image'
                            />
                        </motion.div>
                    </div>
                </div>
                <div className='flex flex-col mt-3 sm:flex-row'>
                    {/* Left side content */}

                    <div className='w-full sm:w-1/2 '>
                        <motion.div
                            className="card"
                            initial={{
                                opacity: 0,
                                // if odd index card, slide from right instead of left
                                x: index % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <img
                                className='w-[320px] object-cover'
                                src={img4}
                                alt='Right Side Image'
                            />
                        </motion.div>
                    </div>
                    {/* Right side image */}
                    <motion.div
                        className="card"
                        initial={{
                            opacity: 0,
                            // if odd index card, slide from right instead of left
                            x: index % 2 === 0 ? -50 : 50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <div className='w-full sm:w-[550px] p-4 sm:p-10'>
                            <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-black-600'>
                                Our Goal
                            </h1>
                            <p className='text-gray-700'> Empowering Progress: Unveiling Our Strategic Goals as a Leader</p>
                            <p className='text-gray-700'>In the dynamic realm of the IT sector, our overarching goal is
                                to redefine excellence through a strategic and visionary
                                approach. At the core of our mission lies a commitment to
                                innovation, anticipating and adapting to the evolving
                                technological landscape. We aim to position ourselves as
                                pioneers, driving progress and setting new standards in the
                                industry.</p>
                            {/* Add more content as needed */}
                        </div>
                    </motion.div>
                </div>

            </div >
        </>
    )
}

export default Vision