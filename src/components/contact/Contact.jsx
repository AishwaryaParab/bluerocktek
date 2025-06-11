"use client";

import styles from "./contact.module.css";
import Image from "next/image";
import contact from "../../../public/contact.png";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { poppins } from "@/utils/fonts";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../button/Button";
import { useContext, useRef } from "react";
import { ScrollContext } from "@/context/ScrollContext";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { contactRef } = useContext(ScrollContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div ref={contactRef} className={styles.container}>
      <h2 className={`${styles.title} ${poppins.className}`}>Contact Us</h2>
      <div className={styles.contactDetails}>
        <motion.div
          initial={{ transform: "translateX(-100%)", filter: "blur(5px)" }}
          whileInView={{ transform: "translateX(0)", filter: "blur(0)" }}
          viewport={{ once: true }}
          className={styles.contactForm}
        >
          <form
            ref={form}
            onSubmit={(e) => {
              sendEmail(e);
            }}
          >
            <div className={styles.name}>
              <div>
                <label className={styles.label}>Name</label>
                <input
                  className={`${styles.input} ${poppins.className}`}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Company Name</label>
                <input
                  className={`${styles.input} ${poppins.className}`}
                  type="text"
                  name="company_name"
                  placeholder="Enter your company name"
                  required
                />
              </div>
            </div>

            <div className={styles.email}>
              <div>
                <label className={styles.label}>Email</label>
                <input
                  className={`${styles.input} ${poppins.className}`}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Phone Number</label>
                <input
                  className={`${styles.input} ${poppins.className}`}
                  type="number"
                  name="contact"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <label className={styles.label}>Subject</label>
            <input
              className={`${styles.input} ${poppins.className}`}
              type="text"
              name="subject"
              placeholder="Enter the subject"
              required
            />

            <label className={styles.label}>Message (optional)</label>
            <textarea
              className={`${styles.input} ${poppins.className}`}
              rows={18}
              cols={18}
              type="text"
              name="message"
              placeholder="Enter your message"
            />

            {/* <button type="submit">Submit</button> */}
            <Button label="Submit" type="submit" />
          </form>
        </motion.div>

        <motion.div
          initial={{ transform: "translateX(100%)", filter: "blur(5px)" }}
          whileInView={{ transform: "translateX(0)", filter: "blur(0)" }}
          viewport={{ once: true }}
          className={styles.details}
        >
          <Image
            className={styles.contactImg}
            src={contact}
            width={500}
            height={500}
          />

          <div className="address">
            <div className={`${styles.detail} ${poppins.className}`}>
              <FaLocationDot
                className={styles.icon}
                size={32}
                color="#F2A429"
              />
              <p>Goa, India</p>
            </div>

            <div className={styles.detail}>
              <FaPhone className={styles.icon} size={32} color="#F2A429" />
              <p>
                +91 7447338881 / <br /> +91 7447338882
              </p>
            </div>

            <div className={styles.detail}>
              <IoMail className={styles.icon} size={32} color="#F2A429" />
              <p>sales@maschtek.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
