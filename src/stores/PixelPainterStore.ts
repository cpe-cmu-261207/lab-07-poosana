import { Store } from 'pullstate'
import SelectColorButton from '../components/SelectColorButton'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  currcolor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const setrandomColor = () => {
  const output: string[][] = []
  const color: string[] = ['#000000', '#804000', '#FE0000','#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF' , '#B100FE', '#FF006E']
  
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      const x = Math.floor(Math.random()*12)
      output[i].push(color[x])
    }
  }
  return output
}

export const randomColor = () => {
  PixelPainterStore.update(
    s => { s.canvas = setrandomColor() }
  )
}

export const selColor = (color: string) => {
  PixelPainterStore.update(
    s => { s.currcolor = color}
  )
}

const setEmpty = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const emptyCanvas = () => {
  PixelPainterStore.update(
    s => { s.canvas = setEmpty() }
  )
}

export const setCell = (y:number , x:number) => {
  PixelPainterStore.update(
    s => { s.canvas[y][x] = s.currcolor}
  )
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  currcolor: ""
})