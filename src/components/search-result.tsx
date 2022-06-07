import React, { FC } from 'react';
import { AddressData } from '../types';


interface ResultItemProps {
  title: string;
  value: string;
	className?: string;
}

interface SearchResultProps {
  data: AddressData;
}

const Result: FC<ResultItemProps> = ({ title, value, className = '' }) => (
  <div className={` ${className}`}>
    <p
      className="text-xs text-center lg:text-left font-semibold tracking-widest text-gray-500 uppercase"
    >
        {title}
    </p>
    <h2
      className="pr-2 text-lg md:text-xl font-semibold tracking-widest text-center lg:text-left lg:mt-1"
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
      className="absolute top-0 z-10 flex items-center justify-center w-full h-auto -mt-20 sm:-mt-16 lg:h-32"
    >
      <div
				className="bg-white w-10/12 h-full shadow-xl rounded-lg lg:grid lg:grid-cols-4 lg:divide-x py-4 lg:py-6 lg:px-4"
      >
        <Result title="Ip Address" value={ip} />
        <Result title="Location" value={loc} className="lg:pl-6 mt-4 lg:mt-0" />
        <Result title="Timezone" value={tz} className="lg:pl-6 mt-4 lg:mt-0" />
        <Result title="ISP" value={isp} className="lg:pl-6 mt-4 lg:mt-0" />
      </div>
    </div>
  )
}

export default SearchResult;