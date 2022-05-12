import classes from '../App.module.css';

const ProductPreview = (props) => {

        const hour = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
        const minute = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()
        const second = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()


  return (
    <div className={classes.Left}>
        <img className={classes.FeatureImage} src={props.currentPreviewImage} alt="" />
        {
            props.currentSelectedFeature ? <div className={classes.HeartRate}>
            <i className="fa-solid fa-heart-pulse"></i>
            <p>75</p>
        </div> : <p className={classes.Time}>{hour}:{minute}:{second}</p>
        }
    </div>
  )
}
export default ProductPreview