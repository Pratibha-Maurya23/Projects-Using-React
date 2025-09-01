import React from "react";
import { contactInfo } from "../data/contactData";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        {/* Contact Info */}
        <h3 className="contact-title padd-15">Have You Any Question?</h3>
        <h4 className="contact-sub-title">I&apos;M AT YOUR SERVICES</h4>
        <div className="row">
          {contactInfo.map((item, index) => {
  const Icon = item.icon; // assign the component
  return (
    <div className="contact-info-item padd-15" key={index}>
      <div className="icon">
        <Icon size={20} className="fa" /> {/* You can adjust the size */}
      </div>
      <h4>{item.title}</h4>
      <p>{item.value}</p>
    </div>
  );
})}

        </div>

        {/* Contact Form */}
        <h3 className="contact-title padd-15">Send Me a Message</h3>
        <h4 className="contact-sub-title">I&apos;m Very Responsive to Emails</h4>
        <div className="row">
          <div className="contact-form padd-15">
            <form>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>
                </div>
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message" required></textarea>
                  </div>
                </div>
                <div className="form-item col-12 padd-15">
                  <button className="btn" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
