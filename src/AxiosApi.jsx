import { useState ,useEffect, useContext} from 'react'
import { photoContext } from './App';
import Form from './Form'
import axios from "axios";
import Image from './Image.jsx';
import './AxiosApi.css'
import {API_KEY} from './key'


function LoadImages(){
  const {input}=useContext(photoContext)
    const [data, setdata] = useState([])
    const [imgArray,setImgArray]=useState([])
   
  useEffect(()=>{

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${input}&per_page=24&format=json&nojsoncallback=1`)
   
    .then((response)=>{
      setdata(response.data.photos.photo)
    })
  },[input])
  let array;
    useEffect(()=>{
      array=
        data.map((photo) => {
        let imgurl=getFlickrImageURL(photo, 'q');
        return <Image value={imgurl}/>
      })
       setImgArray(array)
      //console.log(array);
    },[data])
  
  
function getFlickrImageURL(photo, size) {

    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
    if (size) {
      // Configure image size
      url += `_${size}`;
    }
    url += '.jpg';
    return url;
  };
  
  
  return (
    <>
    <Form/>
    <div >
    <ul className='App'>{imgArray}</ul>
    </div>
    </>
  )
  

}

export default LoadImages