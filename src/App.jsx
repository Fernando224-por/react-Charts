import './App.css'
import { BarChart } from '@mui/x-charts'
import axios from 'axios'

const dataResource = await axios.get('https://fakestoreapi.com/products?limit=5')
const dataChart = dataResource.data

let etiquetas = [];
let valores = [];

if( Array.isArray(dataChart) && dataChart !== undefined ){
  console.log('esto es un array de data, Tratando data')
  dataChart.map((row) => (
    etiquetas.push(row.id),
    valores.push(row.price)
  ))
} else {
  console.error('esto no es un arreglo')
}

function App() {
  console.log("Data:",dataChart)
  console.log(etiquetas)
  console.log(valores)
    return (
    <>
    <BarChart 
      xAxis={[{ scaleType: 'band', data: etiquetas }]}
      series={[{data: valores}]}
      width={500}
      height={300}
    />
    </>
  )
}

export default App
