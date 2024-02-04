import { ChevronDownIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';
export interface SortProps{
    selectedSort:(sortOder:string)=>void
}

const ContentSorting = ({selectedSort}:SortProps) => {
  
    return (
        <Select placeholder='Sort By' icon={<ChevronDownIcon />} onChange={(e) => selectedSort(e.target.value)} width='200px'>
       <option  value="popularity.desc">Popularity Descending</option>
       <option value="popularity.asc">Popularity  Ascending</option>
       <option value="vote_average.desc">Rating  Descending</option>
       <option value="vote_average.asc">Rating  Ascending</option>
       <option value="primary_release_date.desc">release Date Descending</option>
       <option value="primary_release_date.asc">release  Date  Ascending</option>
       
      </Select>
      );
  
}

export default ContentSorting