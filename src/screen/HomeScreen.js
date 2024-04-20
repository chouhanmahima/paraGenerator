import {useState} from 'react'
import './HomeScreen.css';
import data from '../data.json';


const HomeScreen = () => {
    const [paraData , setParaData] = useState([]);

    function clickHandler(e){
        e.preventDefault();
        const paraInput = document.querySelector("#para-count");
        const paraArray = data.paragraphs.slice(0, paraInput.value);
        if(paraInput.value > 8){
            alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀 ")
        }
        setParaData(paraArray);
        paraInput.value = "0"
        // alert(" Ayyo ! you know that you wrote negative input 😵");
    }
  return (
    <div id='container'>
        <header>
                <h1>TIRED OF BORING LOREM IPSUM?</h1>
                <form id="form">
                    <label htmlFor = "para-count">Paragraph:</label>
                    <input id='para-count' type='number' placeholder="Enter count" defaultValue="0" min={0} max={8}/>
                    <button onClick={(e)=>{
                        clickHandler(e);
                    }}>Generate</button>
                </form>
            </header>
            
            <main id="main">
                {
                    paraData.map((elem,index)=>{
                        return(
                            <p key = {index} className="para">{elem.para}</p>
                        )
                    })
                }
            </main>
    </div>
  )
}

export default HomeScreen