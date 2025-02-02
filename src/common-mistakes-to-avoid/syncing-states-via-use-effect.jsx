import { useState } from "react";

export default function SyncingStateViaUseEffect (){
const [ age,setAge ]=useState("");
const [isValidAge,setIsValidAge]=useState(false);

const handleChange=(event)=>{
const {value}=event.target;
setAge(value);
if (value >=20) {
   setIsValidAge(true)
 }
 else {
       setIsValidAge(false)
   }
}

//avoid it
// useEffect(()=>{
// if (age >=20) {
//   setIsValidAge(true)
// }
//   else {
//     setIsValidAge(false)
//   }

// },[age])

return <form>
 <label htmlFor="input">Enter your Age</label>
 <input type="text" id="id_age" name="age" value={age} onChange={handleChange} />
 { !isValidAge && <span>you need to be older</span> }

</form>

} 