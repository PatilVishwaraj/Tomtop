function navbar() {
return `<div class="header">
    <div class="title-img">
        <img src="https://static.tomtop.com/tomtop/icon/logo.png?v=3" alt="">
    </div>
    <div class="language">
       <span id="lang_txt">English</span>
       <i class="icon_arr_bottom"></i>
    </div>
    
    <div class="search-bar">
       <input type="text" value="" placeholder="What are you looking for?">
       <a type="button" class="search_btn"><i class="fas fa-search"></i></a>
       <div class="search-hot">
           <a>Popular Earphones</a>
           <a>Smartphones</a>
           <a>3d Printers</a>
           <a>Electric Bikes</a>
           <a>Sports Watch</a>
           <a>Drone</a>
       </div>
    </div>
    <div class="wishlist" onclick="redirect_signup();">
        <div href="./login.html"><img src="./icons/add-user.png" alt="" class="log_in"></div>
        <div class="cart-word" >Sign in</div>
       </div>
        
    <div class="wishlist">
        <div>
           <img src="./icons/love.png" alt=""></div>
    <div class="cart-word">Favorites</div>
    </div>
    <div class="cart">
        <div>
      <img src="./icons/shopping-cart.png" alt="" style="width:34px" >
       <span class='badge badge-warning' id='lblCartCount'> 0 </span></div>
       <div class="cart-word" style="margin-right: 2%;">Cart</div>
    </div>
</div> 

<div class="m_nav_category" style="background:#fff">
<div class="nav_c w" style="background:#fff">
       <div class="nav_l">
           <div class="category" style="background:#fff">
               <span class="icon_sidebar"></span><i class="fas fa-prescription-bottle"></i>
               <h2 class="tt">Shop By Departments</h2>
               
       </div>
       
   </div>
   <div class="nav_r">
       <ul>
        <li class=""><a title="New Arrivals"><span id="GAPRO+column+newarrivals+03">New Arrivals</span></a></li>
       <li class="bm_hot_tag">
<div class="bm_dropdown nav_end_down lineBlock">
       <a class="dropdown_link dropdown_hover" data-toggle="dropdown" span id="GAPRO+column+flashdeals+03">Flash Deals</span><i class="fas fa-caret-down" style="margin-left: 10px;"></i>
</a>
<div class="dropdown_menu">
       <a rel="nofollow"><span id="GAPRO+column+topsellers+02">Top Sellers</span></a>
   </div>
</div>
</li>
       <li class="">
<div class="bm_dropdown nav_end_down lineBlock">
       <a class="dropdown_link dropdown_hover" data-toggle="dropdown">
       <span id="GAPRO+column+coupons+01">Coupons</span><i class="fas fa-caret-down" style="margin-left: 10px;"></i>
</a>
<div class="dropdown_menu">
       <a rel="nofollow"><span id="GAPRO+column+newbuyezone+04">New Buyer Zone</span></a>
      </div>
</div>
</li>
       <li class="">
<div class="bm_dropdown nav_end_down lineBlock">
        <a class="dropdown_link dropdown_hover" data-toggle="dropdown">
       <span id="GAPRO+column+socialsavings+01">Social Savings</span><i class="fas fa-caret-down" style="margin-left: 10px;"></i>
</a>
<div class="dropdown_menu">
       <a rel="nofollow"><span id="GAPRO+column+slashPrices+01">Slash Price</span></a>
       <a rel="nofollow"><span id="GAPRO+column+getitfree+06">Get Free Gift</span></a>
       </div>
</div>
</li>
      <li class="">
<div class="bm_dropdown nav_end_down lineBlock">
<a class="dropdown_link dropdown_hover" data-toggle="dropdown">
   <span id="GAPRO+column+clearance+05">Clearance</span><i class="fas fa-caret-down" style="margin-left: 10px;"></i>
</a>
<div class="dropdown_menu">
     <a rel="nofollow" target="_blank" ><span id="GAPRO+column+second-hand+05">Second Hand</span></a>
     <a rel="nofollow"><span id="GAPRO+columncommunity+forum+00">Forum</span></a>
   </div>
</div>
</li>


</ul>
   </div>
    <div class="last">
       <a id="GAPRO+column+banner+07" title="Lixada" href="#" class="brand_ad"><img src="https://img.tttcdn.com/advertising/2020/10/16/SKMNuq-1158591665.jpg" alt="Lixada" class></a>
   </div> 
</div>
  </div> `


}


export default navbar