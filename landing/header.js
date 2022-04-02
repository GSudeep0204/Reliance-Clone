function navbar  () {

return  ` <div id="header" class="flex">
<img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="">
<div id="search" class="flex">
  <input type="text" id="search-text">
  <button id="search-button">Search</button>
</div>
<div id="social" class="flex">
   <div>
      <h4>Cart</h4>
      
   </div>
    <div  onclick="register()">
        <h4>Login</h4>    
    </div>
</div>

</div>
<div id="options" class="flex">
  <div id=""> <h3> mobiles and tablets</h3></div>
  <div id=""> <h3>TV & AUDIO</h3></div>
  <div id=""><h3>HOME APPLIANCES</h3></div>
  <div id=""> <h3>COMPUTERS</h3></div>
  <div id=""><h3>CAMERAS</h3></div>
  <div id=""> <h3>KITCHEN APPLIANCES</h3></div>
  <div id=""> <h3>PERSONAL CARE</h3></div>
  <div id=""> <h3>ACCESSORIES</h3></div> 
</div> `

}
export default navbar;