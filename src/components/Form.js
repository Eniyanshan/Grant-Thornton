import { useState,useEffect } from "react";
import CryptoJS from 'crypto-js';
import Spinner from "./Spinner";
import "./Form.css"

function Form(){
    const [inputValue,setInputValue] = useState("")


    const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const [isLoading,setIsLoader] = useState(false);

  const [dataObj, setDataObj] = useState({})

//   useEffect(() => {
//     if (decryptedText) {
//         setTimeout(() => {
//             document.getElementById("decryptedText").classList.add("marquee");
//         }, 5000);
//     }
// }, [decryptedText]);


    function handleSubmit(){
        setIsLoader(true)

        setTimeout(()=>{
        let keysObj = ["first_name","last_name"]
        let valuesobj = inputValue.split("0").filter(e=>e)
        let output = {}
        output["id"] = Number(valuesobj.find(e=> Number(e)))
        valuesobj.splice(valuesobj.findIndex(e=> Number(e)),1)
        keysObj.map((e,index)=>{
            output[e] = valuesobj[index]
        })

        setDataObj(output)

        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(output), 'secret key').toString();
        setEncryptedText(encrypted);
        alert(`Encrypted Data\n${encrypted}`); 




        const decrypted = CryptoJS.AES.decrypt(encrypted, 'secret key').toString(CryptoJS.enc.Utf8);
        setDecryptedText(JSON.parse(decrypted));
        console.log(decrypted)

        setIsLoader(false)
    },2000)
    }


    return(
        <div style={{textAlign:"center"}}>

            {isLoading ? <Spinner/> :
            <div style={{marginTop:"70px"}}>
                {/* <label htmlFor="inputField">Enter Your Text Here:</label> */}
            <input type="text"   placeholder="Enter Your Text Here You want To Convert"  onChange={(e)=>setInputValue(e.target.value)}/>
            <br />
            <button style={{marginTop:"20px"}} onClick={handleSubmit}>Submit</button>
            {/* <hr /> */}

            <div>
                    <p>Your Decrypted Text Shown Below</p>
                    <textarea style={{width:"45.5%",borderRadius:"6px"}} rows="4" cols="50"  readOnly value={JSON.stringify(decryptedText)} />
                </div>
      </div>
}
      
        </div>
    )
}


export default Form