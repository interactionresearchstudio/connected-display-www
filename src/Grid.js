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
      className={``}
    >
      {devices.map(d => <img className='' src={`http://irs-iot.ddns.net/uploads/${d}/latest`} alt=""/>)}
    </div>
  )

}

export default Grid
