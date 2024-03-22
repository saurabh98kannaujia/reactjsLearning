import View from "./View";
function ListRendering () {
    const data = ["ABC", "MNO", "XYZ", "GHI"];;
    let temp = data.map(ele=>(
        <View key="unique" name={ele} />
    ))
    return  <div>{temp}</div>
}
export default ListRendering;