import { useEffect, useState } from "react"
import axios from 'axios'

const imageHost = 'https://interactionresearchstudio.net'

function Slideshow(props) {
  const [devices, setDevices] = useState([])
  const [deviceIndex, setDeviceIndex] = useState(0)

  useEffect(() => {
    // Get devices
    axios.get(`${imageHost}/devices`)
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (deviceIndex === devices.length - 1) {
        setDeviceIndex(0)
      }
      else {
        setDeviceIndex(deviceIndex + 1)
      }
    }, 8000)
    return () => clearInterval(interval)
  }, [deviceIndex])

  return(
    <div
      className={`w-[100vw] h-[100vh] relative overflow-hidden`}
    >
      <img className='object-cover min-w-full min-h-full' src={`${imageHost}/uploads/${devices[deviceIndex]}/latest`} alt=""/>
      <div className='absolute bottom-4 left-4 bg-white p-2'><h1>{devices[deviceIndex]}</h1></div>
    </div>
  )

}

export default Slideshow
