import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Tech Blogs</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">Shop</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>
      <div className="content">
        <div className="blog-post">
          <img src="https://www.pymnts.com/wp-content/uploads/2021/03/amazon-drone-delivery.jpg?w=457" alt="React" className="blog-image" />
          <div className="blog-text">
            <h2>Amazon Expands Drone Deliveries After FAA Approval</h2>
            <p className="blog-meta">By Swagat Gyawali | May 31, 2024</p>
            <p>Amazon has received key approval from the Federal Aviation Administration (FAA) to expand its drone delivery operations across the United States. This major expansion will significantly increase the reach and efficiency of Amazon's delivery services, integrating more drone technology into their logistics network​ (GeekWire)​.</p>
          </div>
        </div>
        <div className="blog-post">
        <img src="https://sm.ign.com/ign_nordic/news/c/ces-2024-t/ces-2024-the-biggest-tech-announcements-so-far_krcc.jpg" alt="React" className="blog-image" />
          <div className="blog-text">
            <h2>CES 2024 Highlights: Qi2 Wireless Charging and Bluetooth Auracast</h2>
            <p className="blog-meta">By Jane Smith | May 27, 2024</p>
            <p>At CES 2024, Qi2 wireless charging technology was a standout, promising to bring more efficient and faster wireless charging to smartphones, with a minimum support of 15W charging. Another highlight was Bluetooth Auracast, a new standard that allows headphones to connect to multiple devices and tune into unpaired devices, enhancing user experience in public spaces and collaborative environments​ (TechRadar)​.</p>
          </div>
        </div>
        <div className="blog-post">
          <img src="https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg" alt="JavaScript" className="blog-image" />
          <div className="blog-text">
            <h2>AI Integration in Consumer Tech</h2>
            <p className="blog-meta">By Alex Brown | May 25, 2024</p>
            <p>Following the success of ChatGPT, AI is being integrated into a variety of consumer tech devices. Volkswagen, for instance, is incorporating ChatGPT into its vehicles to facilitate AI-based conversations, marking a significant step in automotive technology. This trend reflects a broader movement to embed AI into everyday devices, although its practicality and safety in some applications, like driving, remain under scrutiny​ (TechRadar)​​ (GeekWire)​.</p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;