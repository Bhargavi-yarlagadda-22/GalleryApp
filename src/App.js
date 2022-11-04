
import {useEffect,useState} from "react";
import './App.css';
const App=()=>{
  const [data,setData]=useState([]);
  useEffect(() => {
    const url = "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.photos.photo);
        setData(json.photos.photo)
      } catch (error){
        console.log("error", error);
      }
    };
  fetchData();
}, []);
return(
    <div className="container">
      <div class="row justify-content-center">
        {data && data.map(imgObj=>
        <div className="col-sm-12 col-md-4 col-xl-3 m-2 result">
          <img src={`https://farm${imgObj.farm}.staticflickr.com/${imgObj.server}/${imgObj.id}_${imgObj.secret}.jpg`} alt="nature" className="photo"/>
          <h2 className="heading">{imgObj.title}</h2>
        </div>) }
      </div>
      
    </div>
   )
}
export default App;