import { div } from "motion/react-client";
import { useState } from "react";
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVarient.js'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModel, setShowModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      country,
      message,
    };
    if (!name || !email || !phone || !country || !message) {
      alert("Please fill all fields");
      return;
    }
    setShowModel(true);
  };

  const closeModel = () => {
    setEmail("");
    setName("");
    setPhone("");
    setCountry("");
    setMessage("");
    setShowModel(false);
  };

  return (
    <div
      className="bg-heroBg text-white flex items-center justify-center py-28 px-8"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 ">
          {/* left side */}
          <motion.div 
           variants={fadeIn("right",0.2)}
        initial="hidden"
        animate="show"
        viewport={{once: false, amount:0.7}}
          className="space-y-8">
            <h2 className="text-4xl font-bold font-secondary ">
              Make an appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-black/35 p-3">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p className="text-m">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-black/35 p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Expert Theropist</h3>
                  <p className="text-m">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-black/35 p-3">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">High Quality Core</h3>
                  <p className="text-m">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-black/35 p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted Clinic</h3>
                  <p className="text-m">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right side */}
          <motion.div 
           variants={fadeIn("left",0.2)}
        initial="hidden"
        animate="show"
        viewport={{once: false, amount:0.7}}
          className="space-y-8 p-8 bg-white shadow-xl rounded-md">
            <h3 className="text-black text-2xl font-bold mb-4">
              Book Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="text-black/50 w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="text-black/50 w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>

              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  placeholder="Contact Number "
                  className="text-black/50 w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="text-black/50 w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message...."
                className="text-black/50 w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary/90  cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {showModel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 ">
          <div className="bg-white text-black p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Thank you, {name}, for submiting your query. </p>
            <button
              onClick={closeModel}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
