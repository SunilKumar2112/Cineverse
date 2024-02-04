
import { useState } from 'react';
import UseData from './UseData';
export interface genre {
    id: any;
    name:string;
   
  }
 interface props{
  selectedType:string
 }
const UseGenre = (selectedType:any) =>{
  
  if(selectedType==null){
    selectedType='movie'
    
  }

 
  

  
return UseData<genre>(`genre/${selectedType}/list`,'genres', {}, [selectedType])


}

export default UseGenre