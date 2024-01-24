
import UseData from './UseData';
export interface genre {
    id: number;
    name:string;
   
  }
 
const UseGenre = () => UseData<genre>('genre/movie/list','genres')

export default UseGenre