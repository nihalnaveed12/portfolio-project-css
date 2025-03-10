"use client";
export default function Footer() {
  return (
    <div className="section ">
        <div className="footer">
          <div className="footer-top">
           <div className="logo">
            <h1>N.</h1>
            <p>Nihal Naveed</p>
           </div>
           <div className="footer-action">
            <input type="email" placeholder="Enter Your email"/>
            <button className="">Connect with me</button>
           </div>
          </div>

          <div className="line"></div>

          <div className="footer-bottom">
            <p>&copy; 2024 Nihal Naveed.All right reserved.</p>
            <div className="legal-items">
              <p >Terms of services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
          </div>

        </div>
    </div>
  );
}
