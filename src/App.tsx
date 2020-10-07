import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import mapConfig from './map-config';
import { useIpify } from './hooks/ipify';
import { SearchForm, SearchResult, Spinner, Error } from './components';
import { Err } from './types';


const libraries = ["places"];

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const { data, error, isError, isLoading } = useIpify(ipAddress);
  const { containerStyle, options } = mapConfig;

  if(isLoading) return <Spinner />
  if(isError) return <Error error={error as Err} />

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
      loadingElement={<Spinner />}
    >
      <div
        className="flex items-center justify-center h-screen antialiased text-gray-900 font-rubik"
      >
        <div className="flex flex-col w-full h-full">
          <div className="">
            <div
              className="relative flex items-center justify-center h-64 bg-cover sm:h-1/3 bg-pattern"
            >
              <h1
                className="absolute top-0 mt-6 text-3xl font-semibold tracking-wide text-gray-100 sm:tracking-wider sm:font-bold lg:text-4xl sm:mt-6"
              >
                IP Address Tracker
              </h1>
              <SearchForm ip={ipAddress} setter={setIpAddress} />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-full">
              <SearchResult data={data!} />
              <GoogleMap
                options={options}
                mapContainerStyle={containerStyle}
                zoom={15}
                center={data!.location.coordinates}
              >
                <Marker position={data!.location.coordinates} icon='/images/icon-location.svg' />
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </LoadScript>
  );
}

export default App;
