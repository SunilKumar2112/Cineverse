import { Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import ContentQueryStore from '../store/ContentQuery';
import ContentQuery from '../store/ContentQuery';
import { Navigate, useNavigate } from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';


const SearchInput = () => {
  const ref=useRef<HTMLInputElement>(null)
  const{ ContentQuery }=ContentQueryStore()
  const navigate = useNavigate();
  const searchQueryHandler = (event:any) => {
    const query=ContentQuery.Search||''
    if (event?.length>0&&event!=undefined) {
      navigate(`/search/${event}`);
        // setTimeout(() => {
        //     setShowSearch(false);
        // }, 1000);
    }
  }
   
    
  return (
    <>
    {/* <Button>
    <HiOutlineSearch onClick={()=>'hi'} />
    </Button> */}
  
    <form onSubmit={(event)=>{
        event.preventDefault()
        if(ref.current){
       
        searchQueryHandler(ref.current?.value)}
        
    }}>
     
    <InputGroup minWidth={1} >
    <InputLeftElement children={<BsSearch />} />
    <Input ref={ref} borderRadius={20} placeholder='Search....' variant={'filled'}></Input>
    </InputGroup>
    </form>
   
    </>
  )
}

export default SearchInput