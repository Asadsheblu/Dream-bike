import React from 'react';
import img from './bike-1.jpg'
const Slider = () => {
    return (
        <div className='row container-fluid'>
             <div className='col-md-6 container'>
            <img className='img-fluid'  src={img} alt=""></img>
            </div>
             <div className='col-md-6 pt-5'>
             <h6 className='mt-5'>WellCome To Your Dream Bike Store</h6>
                <p>
                Bike trailers are designed as a means of carrying luggage, cargo, kids or pets.
                 They also make for a great option if you are carrying a load heavier than a pannier or frame-mounted bag is rated to handle.
                 It is first worth considering the material the trailer is made from.
                  Quality options will be made from aluminium or steel. Aluminium will generally be lighter but,
                  depending on the construction, steel may be more durable
                </p>
                <button className='btn btn-info  btn btn-outline-light'>Explore Us</button>
            </div>
            
        </div>
    );
};

export default Slider;