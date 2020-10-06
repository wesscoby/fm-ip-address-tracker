import React, { FC } from 'react';
import { AddressData } from '../types';


interface ResultItemProps {
  title: string;
  value: string;
  border?: boolean;
}

interface SearchResultProps {
  data: AddressData;
}

const Result: FC<ResultItemProps> = ({ title, value, border = false }) => (
  <div
    className={
      `flex flex-col items-center flex-1 my-1 ${border && 'lg:border-r'} lg:items-start lg:mx-3 xl:mx-4 h-1/4 lg:py-5`
    }
  >
    <p
      className="text-xs font-semibold tracking-widest text-gray-500 uppercase"
    >
        {title}
    </p>
    <h2
      className="pr-2 text-xl font-semibold tracking-widest md:text-2xl lg:text-xl xl:text-2xl"
    >
      {value}
    </h2>
  </div>
)


const SearchResult: FC<SearchResultProps> = ({ data }) => {
  const { location: { city, country, timeZone}, isp, ip } = data;
  const loc = city ? `${city}, ${country}` : 'Unknown';
  const tz = timeZone ? `UTC ${data.location.timeZone}` : 'Unknown';

  return (
    <div
      className="absolute top-0 z-10 flex items-center justify-center w-full h-64 -mt-20 sm:-mt-16 lg:h-32"
    >
      <div
        className="flex flex-col items-center justify-center w-10/12 h-full p-2 bg-white rounded-lg shadow-xl sm:w-2/3 lg:w-4/5 xl:w-3/4 lg:flex-row lg:justify-around lg:items-stretch"
      >
        <Result title="Ip Address" value={ip} border />
        <Result title="Location" value={loc} border />
        <Result title="Timezone" value={tz} border />
        <Result title="ISP" value={isp} />
      </div>
    </div>
  )
}

export default SearchResult;