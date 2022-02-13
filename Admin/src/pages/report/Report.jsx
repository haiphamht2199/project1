
import axiosIntance from '../../helper/axios';
import React ,{useEffect,useMemo,useState}from 'react';
import {useDispatch,useSelector} from 'react-redux'
import './report.css'
import {  getProduct1, getProduct2 } from '../../Action';
const Report=()=>{
  const dispatch=useDispatch();
  const product=useSelector(state=>state.product.product1);
  const products1=useSelector(state=>state.product.products1);
  // console.log("sdjf",products1)
  // const _product=product.products[0];
  const orders=useSelector(state=>state.order.orders);
  const products=useSelector(state=>state.product.products.products);
  const total=orders.reduce((a, c) => a + c.totalAmount, 0);
  const number=products.reduce((a, c) => a + c.daBan, 0);
  var numberOrder=orders.length;
  useEffect(()=>{
    dispatch(getProduct1());
    dispatch(getProduct2());
   
},[])
 return (
  <div className="report">
   <h1 style={{paddingLeft:"329px"}}> Báo cáo & thống kê</h1>
   <div className='reportq' style={{border:"1px solid black",margin:"2px 5px", marginBottom:"15px"}}>
   <div className="featured">
     <div className="featuredItem" >
    <span className="featuredTitle">Đơn hàng:</span>
    <div className="featuredMoneyContainer">
      <span className="featuredMoney" >{numberOrder}</span>
 
  </div>
  </div>
  
  <div className="featuredItem" >
    <span className="featuredTitle" >Doanh thu: </span>
    <div className="featuredMoneyContainer">
      <span className="featuredMoney">{total} $</span>
     
  </div>
  </div>
  <div className="featuredItem"  >
    <span className="featuredTitle" >Đã bán:</span>
    <div className="featuredMoneyContainer">
      <span className="featuredMoney"></span>
     
  </div>
</div>
</div>
</div>
{/* <div className='report1' style={{border:"1px solid black",margin:"2px 5px"}}>
<div className="featured">
     <div className="featuredItem" >
    <span className="featuredTitle">Sản phẩm bán chạy nhất:</span>
    <div className="featuredMoneyContainer">
      <span className="featuredMoney" ></span>
 
  </div>
  <div >
  <img className="product"  src={_product.imageProduct} alt="" />
  <h2>{_product.name}</h2>
  <div className="featuredMoneyContainer">
    <span style={{color:"red",fontSize:"17px"}}> Số lượng: </span>
      <span className="featuredMone"style={{color:"red",fontSize:"17px"}} >{_product.daBan}</span>
  </div>
  <div className="featuredMoneyContainer">
    <span style={{color:"red",fontSize:"17px"}}> Doanh số: </span>
      <span className="featuredMone"style={{color:"red",fontSize:"17px"}} >{_product.daBan*_product.price}</span>
  </div>
  </div>
 
  </div>
  <div className="featuredItem" >
    <span className="featuredTitle">Sản phẩm bán có doanh số cao nhất: </span>
    <div className="featuredMoneyContainer">
      <span className="featuredMoney" ></span>
 
  </div>
  <div >
  <img className="product"  src={_product.imageProduct} alt="" />
  <h2>{_product.name}</h2>
  <div className="featuredMoneyContainer">
    <span style={{color:"red",fontSize:"17px"}}> Số lượng: </span>
      <span className="featuredMone"style={{color:"red",fontSize:"17px"}} >{_product.daBan}</span>
  </div>
  <div className="featuredMoneyContainer">
    <span style={{color:"red",fontSize:"17px"}}> Doanh số: </span>
      <span className="featuredMone"style={{color:"red",fontSize:"17px"}} >{_product.daBan*_product.price}</span>
  </div>
  </div>
  </div>

  </div>
  
</div> */}
</div>
 )
}

export default Report
