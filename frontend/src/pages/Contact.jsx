import  { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row">
       
        <div className="col-md-6">
          <h4>Send us a message</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

      
        <div className="col-md-6">
          <h4>Our Contact Information</h4>
          <p><strong>Address:</strong> 123 Food Street, Dharwad 580001</p>
          <p><strong>Phone:</strong> +91 (123) 456-7890</p>
          <p><strong>Email:</strong> support@onlinefoodorder.com</p>
            <p><strong>Hours:</strong> Mon-Sat 9:00am - 5:00pm</p>
          </div>
      </div>
    </div>
  );
};

export default Contact;