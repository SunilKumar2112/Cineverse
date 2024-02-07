import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import ContentQueryStore from '../store/ContentQuery';


const SearchInput = () => {
    const ref=useRef<HTMLInputElement>(null)
    const{ SetSearch }=ContentQueryStore()
    
  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        if(ref.current)
        SetSearch(ref.current?.value);
        
    }}>
    <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input ref={ref} borderRadius={20} placeholder='Search....' variant={'filled'}></Input>
    </InputGroup>
    </form>
  )
}

export default SearchInput