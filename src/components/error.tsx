import React, { FC } from 'react';

import { Err } from '../types';


interface Props {
  error: Err
}

const Error: FC<Props> = ({ error: { status } }) => {
  const code = (status === 422) ? 404 : 500;

  return (
<div className="flex items-center justify-center w-screen h-screen bg-gray-100">
  <div className="container flex flex-col items-center justify-center px-5 text-gray-700">
    <div className="text-5xl font-bold font-dark">{code}</div>
        <p
          className="text-2xl font-light leading-normal md:text-3xl"
        >
          {code === 404 && "Sorry we couldn't find this IP Address"}
          {code === 500 && "Internal Server Error"}
        </p>
        <p
          className="mb-8"
        >
          {code === 404 && "But don't worry, you can search for another"}
          {code === 500 && "Please try again after some time"}
        </p>
          {code === 404 && (
            <a
              href='/'
              className="inline px-4 py-2 text-xs font-medium leading-5 text-white uppercase transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow sm:text-sm focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700"
            >
              back to homepage
            </a>
          )}
    </div>
  </div>
  )
}

export default Error;