import React from 'react'

function CustomerRequests() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card rounded-10 p-2 ">
                <div className="card-header d-flex justify-content-between align-items-center bg-transparent">
                    <h2 className='fs-6'> درخواست مشتری</h2>
                    <a href="" className='btn fs11'> مشاهده </a>
                </div>
                <div className="card-body d-flex row">
                    <p className='col-6 fs11'> <span> نام مشتری : </span>  </p>
                    <p className='col-6 fs11'> <span> شماره تماس : </span> </p>
                    <p className='col-6 fs11'>  <span >  محصول :  </span> </p>
                    <p className='col-6 fs11'> <span> سریال کالا : </span> </p>
                    <p className='col-6 fs11'> <span> تاریخ اتمام گارانتی : </span> </p>
                    <p className='col-6 fs11'> <span> معایب ظاهری :  </span> </p>
                    <p className='col-6 fs11'> <span> لوازم جانبی :  </span> </p>
                    <p className='col-6 fs11'> <span> هزینه تعمیر : </span> </p>
                    <p className='col-6 fs11'> <span> ایراد اظهار شده توسط مشتری :  </span> </p>
                </div>
            </div>
        </div>
    )
}

export default CustomerRequests