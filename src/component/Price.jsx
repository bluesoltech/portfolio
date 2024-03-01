import React from 'react'
import { motion } from "framer-motion";



const Price = (index) => {
  return (
    <div class="container mx-auto justify-center ">
      <div class="mb-8 mt-8">
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
          <h5 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-gray-600">
            Price</h5>

        </motion.div>
      </div>
      <div className='flex flex-col  xl:flex-row justify-center gap-8 mt-[74px]'>
        <div class="w-full max-w-sm p-4 bg-[#252424] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black">
          <h5 class="mb-4 text-xl font-medium text-white  dark:text-white-600 text-center">Standard plan</h5>
          <div class="flex items-baseline text-white-900 dark:text-white text-center">
            <span class="text-3xl text-white font-semibold">$</span>
            <span class="text-5xl text-white font-extrabold tracking-tight">49</span>
            <span class="ms-1 text-xl font-normal text-white dark:text-white-400">/month</span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
          </ul>
          <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>
        <div class="w-full max-w-sm p-4 bg-[#252424]  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black">
          <h5 class="mb-4 text-xl font-medium text-white  dark:text-white-600 text-center">Standard Plan</h5>
          <div class="flex items-baseline text-white-900 dark:text-white text-center">
            <span class="text-3xl text-white font-semibold">$</span>
            <span class="text-5xl text-white font-extrabold tracking-tight">49</span>
            <span class="ms-1 text-xl font-normal text-white dark:text-white-400">/month</span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
          </ul>
          <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>
        <div class="w-full max-w-sm p-4 bg-[#252424]  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black">
          <h5 class="mb-4 text-xl font-medium text-white  dark:text-white-600 text-center">Premium Plan</h5>
          <div class="flex items-baseline text-white-900 dark:text-white text-center">
            <span class="text-3xl text-white font-semibold">$</span>
            <span class="text-5xl text-white font-extrabold tracking-tight">49</span>
            <span class="ms-1 text-xl font-normal text-white dark:text-white-400">/month</span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
            <li class="flex items-center">
              <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-white dark:text-white-400 ms-3">2 team members</span>
            </li>
          </ul>
          <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>
      </div>
    </div>
  )
}

export default Price