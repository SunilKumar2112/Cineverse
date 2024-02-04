import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { BsSearch } from "react-icons/bs";
interface props{
    onSearch:(searchText:string)=>void
}

const SearchInput = ({onSearch}:props) => {
    const ref=useRef<HTMLInputElement>(null)
    
    
  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        if(ref.current)
        onSearch(ref.current?.value);
        
    }}>
    <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input ref={ref} borderRadius={20} placeholder='Search....' variant={'filled'}></Input>
    </InputGroup>
    </form>
  )
}

export default SearchInput