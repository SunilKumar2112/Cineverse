import React from 'react'
import AppClient from '../Services/api-clients';
import { Content } from '../entities/Content';
import { useQuery } from '@tanstack/react-query';

const useCredits = (url:string) => {
    const apiClients = new AppClient<Content>(url);
 
    return useQuery({
        queryKey: [url],
        queryFn: () => apiClients.getDetails(),
      });
}

export default useCredits

