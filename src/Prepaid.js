import React from 'react'
import './prepaid.css';
import movie from './movie.png'
import tv from './tv.png'





function Prepaid() {
  const  data = [
        {
            name:'Best selling',
            cash:'₹299',
            days:28,
            data:'2GB/day'
        },
        
        {
            name:'ONLY ₹240/MONTH',
            cash:'₹719',
            days:84,
            data:'2GB/day'
        },
        {
            name:'OFFER : 365 DAYS + 23 DAYS + 87 GB',
            cash:'₹2999',
            days:365,
            data:'2.5GB/day'
         
        },
        
    ]
 return (
    <div>
      <section class="pricing py-5">
  <div class="container">
    <div class="row">
      <h1 class='text-center mb-4'>Prepaid plans</h1>
            {
                data.map((item) => {
                return (
                <div class="col-lg-4 ">
                 <div class="card mb-5 mb-lg-0">
                    <div class="card-body border border-danger">

                       <h6 class="card-title  text-uppercase text-black  " ><b>{item.name}</b></h6>
                       <h1 class="card-price mt-4 " ><b>{item.cash}</b></h1>
                       <div class='row mt-4 '>
                          <img src={tv } className='movie' />
                          <img src={movie } className='movie' /> + 2 more
                       </div>
                       <div class='row mt-5 '>
                         <div class='col-6'>
                           <h4>Validity</h4>
                           <p class='text-danger'><b> {item.days}days</b></p> 
                         </div>
                         <div class='col-6'>
                           <h4>Data</h4>
                           <p class='text-danger'><b> {item.data}</b></p> 
                         </div>
                         <div class='text-center mt-5'>
                         <button type="button" class="btn btn-dark text-black"><b>Recharge</b></button>
                         </div>
                       </div>
                       
                    </div>
                 </div>
                </div>
                )
            })
            }
       
           
         
       
    </div>
  </div>
</section>
    </div>
  )
}

export default Prepaid
