import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [devices, setDevices] = useState([])
  const [deviceIndex, setDeviceIndex] = useState(0)

  useEffect(() => {
    // Get devices
    axios.get('http://irs-iot.ddns.net/devices')
      .then((res) => {
        console.log(res.data)
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
    }, 5000)
    return () => clearInterval(interval)
  }, [deviceIndex])

  return (
    <div
      className={`w-[100vw] h-[100vh]`}
    >
      <img className='block w-full h-full object-cover' src={`http://irs-iot.ddns.net/uploads/${devices[deviceIndex]}/latest`} alt=""/>
      <div className='absolute bottom-4 left-4 bg-white p-2'><h1>{devices[deviceIndex]}</h1></div>
    </div>
  )
}

export default App