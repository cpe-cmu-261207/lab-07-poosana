import {PixelPainterStore, selColor} from '../stores/PixelPainterStore'
type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {

  const state = PixelPainterStore.useState()
  //modify this function to highlight correctly
  const computeRingSize = (select: string) => {
    if(select === color){
      return "ring-8 ring-green-400"
    }else{
      return ""
    }
    

    
  }

  return (
    <div className={`${computeRingSize(state.currcolor)} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick = { () => {selColor(color)}}
    >
    </div>
  )
}

export default SelectColorButton