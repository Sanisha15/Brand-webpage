

const Navigation =()=>{
    return(
        
    <nav className="container navbar">
        <div className='logo'>
          <img  src="/images/icon.png" alt="" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">About</li>
          <li href="#">Location</li>
          <li href="#">Contact</li>
        </ul>
        <button className="login">Login</button>
       
      </nav>
        
    );
};
export default Navigation;