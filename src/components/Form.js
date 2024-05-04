import { useState } from "react";
import CryptoJS from 'crypto-js';
import Spinner from "./Spinner";
import "./Form.css"

function Form(){
    const [inputValue,setInputValue] = useState("")


    const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const [isLoading,setIsLoader] = useState(false);

  const [dataObj, setDataObj] = useState({})


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
        alert(encrypted)


        const decrypted = CryptoJS.AES.decrypt(encrypted, 'secret key').toString(CryptoJS.enc.Utf8);
        setDecryptedText(JSON.parse(decrypted));
        console.log(decrypted)

        setIsLoader(false)
    },2000)
    }


    return(
        <div style={{textAlign:"center"}}>

            {isLoading ? <Spinner/> :
            <div style={{marginTop:"50px"}}>
            <input type="text"  onChange={(e)=>setInputValue(e.target.value)}/>
            <br />
            <button style={{marginTop:"20px"}} onClick={handleSubmit}>Submit</button>
           

        <div>
        {/* <p>Encrypted Text: {encryptedText}</p> */}
        <p>Decrypted Text: {JSON.stringify(decryptedText)}</p>
      </div>
      </div>
}
      
        </div>
    )
}


export default Form