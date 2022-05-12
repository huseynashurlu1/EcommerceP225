import classes from '../App.module.css';
import ProductData from '../ProductData';


const ProductDetails = (props) => {
    const colorOptions = ProductData.colorOptions.map((item,pos)=>{
        return(
            <div key={pos}>
                <img src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColorOptionClick(pos)}/>
            </div>
        )
    })

    const featureList = ProductData.featureList.map((item,pos)=> {
        return(
            <button className={classes.Button} key={pos} onClick={()=>props.onFeatureItemClick(pos)}>{item}</button>
        )
    })

  return (
    <div className={classes.Right}>
        <h2>{ProductData.title}</h2>
        <p>{ProductData.description}</p>

        <h5>Select Color</h5>
        <div className={classes.ImageAll}>
            {colorOptions}
        </div>
        <div>
            {featureList}
        </div>
    </div>
  )
}
export default ProductDetails