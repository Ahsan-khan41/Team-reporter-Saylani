import react from "react";
import './Addteam.css'

function Adddteam() {
    
    return ( 
        <div className='container'>
        <div className='main'>

            <h1 id='firstheading'>Create new team</h1>  
            <input className='input' type='text' placeholder='Team Name' /> <br/>
            <select className='select' >
                <option value="category">Category</option>
                <option value="">abc</option>
                <option value="">abc</option>
                <option value="">abc</option>
            </select> <br/>
            <input className='input' type='text' placeholder='Member (type email)' /> <br/>
            <div>
            <button className='button'   id='createButton'>Create</button>
            <button className='button' id='cancelButton'>Cancel</button>

            </div>
        </div>
        </div>
    )
}

export default Adddteam;