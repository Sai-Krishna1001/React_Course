import React, {useState} from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const toggle = ()=>{
        setIsOn(!isOn);
    }
  return (
    <div>
      <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>
    </div>
  )
}

export default Toggle
