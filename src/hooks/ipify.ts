import { useQuery } from 'react-query';

import { Api } from '../services';


export function useIpify(ip: string) {
  return useQuery(
    [{ip}], async() => await Api.get(ip)
  )
}