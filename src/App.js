// import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {
  const [inputarr, setinputarr] = useState([])
  const [input, setinput] = useState({URL1 :""},{URL2 :""},{URL3 :""})
  
  function handleChange(event){
    setinput({...input,[event.target.name]:event.target.value})
  }

  let {URL1,URL2,URL3}=input;
  // let {URL2}=input;
  // let {URL3}=input;

  function handleSubmit(e){e.preventDefault();
    setinputarr([...inputarr,{URL1,URL2,URL3}]);
    console.log(inputarr);
    console.log(input);
  }

  
  return (
    <div className="App">
      <div className="head"><h1>Image Loader</h1></div>
      <form>
        <table>
          <label>Image URL 1</label><br></br>
          <input type="text" name="URL1" placeholder="Enter the Image URL 1" value={input.URL1} onChange={handleChange} /><br></br>
          <label>Image URL 2</label><br></br>
          <input type="text" name="URL2" placeholder="Enter the Image URL 2" value={input.URL2} onChange={handleChange} /><br></br> 
          <label>Image URL 3</label><br></br>
          <input type="text" name="URL3" placeholder="Enter the Image URL 3" value={input.URL3} onChange={handleChange} />
        </table>
          <input type="submit" value="Create" onClick={handleSubmit}/>
      </form>
      <h1>Image List</h1>
      <div className='output'>
        {
          inputarr.map((info, ind)=>{
                return(
                  <div class="row" key={ind}>
                    <img src={info.URL1} alt="Url1"/>
                    <img src={info.URL2} alt="Url2"/>
                    <img src={info.URL3} alt="Url3"/>
                  </div>
                );
            }
          )
        }
        </div>
    </div>
  );
}

export default App;
