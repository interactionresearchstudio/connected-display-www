import { useEffect, useState } from "react"
import axios from 'axios'

//const imageHost = 'https://interactionresearchstudio.net'
const imageHost = 'http://irs-iot.ddns.net'

function Grid(props) {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    // Get devices
    axios.get(`${imageHost}/devices/`)
      .then((res) => {
        console.log(res.data)
        // Remove manual device
        let index = res.data.indexOf('manual');
        if (index !== -1) {
          res.data.splice(index, 1);
        }
        setDevices(res.data)
      })
  }, [])

  return(
    <div
      className={`m-10 md:m-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20 items-center`}
    >
      {devices.map((d, index) => 
        <div key={index}>
          <img className='' src={`${imageHost}/uploads/${d}/latest`} alt=""/>
          <h1>{d}</h1>
        </div>
      )}
    </div>
  )

}

export default Grid
