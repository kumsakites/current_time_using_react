import React from 'react';
import classes from'./App.module.css';
import ProductData from './ProductData'
function App() {
  const curentHour=new Date().getHours()> 9 ? new Date().getHours(): '0' +new Date().getHours();
  const curentMinute= new Date().getMinutes()> 9 ? new Date().getMinutes(): '0' + new Date().getMinutes();
  return (
    
    <div className="App">
      <header className="App-header">
     <nav className={classes.Topbar}>
      <img src={require('./images/hu_logo.png')}/>
     </nav>
      </header>
      <div className={classes.MainContainer}>
      <div className={classes.ProductPreview}>
<img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>
     {/* <div className={classes.TimeSection}>
      <p>{`${curentHour}:${curentMinute}`}</p>
     </div> */}
     <div className={classes.HeartBeatSection}>
      <i class="fas fa-heartbeat"></i>
      <p>78</p>
     </div>
      </div>
      <div className={classes.ProductData}>
     <h1 className={classes.ProductTitle}>FitBit 19 - The Smartest Watch</h1>
      <p className={classes.ProductDescription}>{ProductData.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png' alt='Black Colored Watch'/>
        <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='Red Colored Watch'/>
        <img className={classes.ProductImage} src='https://m.media-amazon.com/images/I/61XVr-6oazL._AC_SL1500_.jpg' alt='Blue Colored Watch'/>
        <img className={classes.ProductImage} src='https://imgur.com/xSIK4M8.png' alt='Purple Colored Watch'/>
      

      </div>
      <h3 className={classes.SectionHeading}>Features</h3>
<div>
  <button className={[classes.FeatureItem, classes.SelectedFeaturedItem].join(' ')}>Time</button>
  <button className={classes.FeatureItem}>Heart Rate</button>
</div>
<button className={classes.PrimaryButton}>Buy Now</button>
      </div>

      </div>
      
    </div>
  );
}

export default App;
