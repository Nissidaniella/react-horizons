import React from "react";

export const Navbar = () => {
    return (
        
             <div className="container nav1">
    <div className="row">
        <div className="col-md-12 col-sm-6  navbar-wrapper nav2">

            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1 nav3">    
                <span className="nav4" >NISSI</span> .Verse</span>
             </nav>
       
            <nav className="navbar navbar-light bg-light center ">
                
                <span className="navbar-brand mb-0 h1">About Us</span>

                <span className="navbar-brand mb-0 h1">Our Project</span>

                <span className="navbar-brand mb-0 h1">Community</span>

                <span className="navbar-brand mb-0 h1">Resources</span>
            
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0 box " type="submit">Sign up</button>
                  </form>

            </nav>
     

        </div>
      </div>
     </div>
    );
}