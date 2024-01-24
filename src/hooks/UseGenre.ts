
import UseData from './UseData';
export interface genre {
    id: any;
    name:string;
   
  }
 
const UseGenre = () => UseData<genre>('genre/movie/list','genres')

export default UseGenre