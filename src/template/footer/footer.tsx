import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-12">
        <div className="row">
          {/* <div className="col-md-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div> */}
          <div className="col-md-6">
            <h5>Contatos</h5>
            <ul className="list-unstyled">
              <li>Email: macultura@gmail.com</li>
              <li>Phone: 98 3237-3397</li>
              <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Siga em:</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
