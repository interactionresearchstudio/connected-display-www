import { useEffect, useState } from "react"
import axios from 'axios'

function Grid(props) {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    // Get devices
    axios.get('http://irs-iot.ddns.net/devices')
      .then((res) => {
        console.log(res.data)
        setDevices(res.data)
      })
  }, [])

  return(
    <div
      className={`m-10 md:m-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20 items-center`}
    >
      {devices.map(d => 
        <div>
          <img className='' src={`http://irs-iot.ddns.net/uploads/${d}/latest`} alt=""/>
          <h1>{d}</h1>
        </div>
      )}
    </div>
  )

}

export default Grid
