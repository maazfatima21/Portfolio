import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const [notification, setNotification] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrbicg5",
        "template_vzr3ibb",
        form.current,
        "822yu2Zu2X8QUeoH0"
      )
      .then(
        () => {
          setNotification({
            type: "success",
            message: "✨ Message sent successfully! I'll get back to you soon.",
          });
          form.current.reset();
          setTimeout(
            () => setNotification({ type: "", message: "" }),
            4000
          );
        },
        (error) => {
          console.log(error.text);
          setNotification({
            type: "error",
            message: "❌ Failed to send message. Please try again.",
          });
          setTimeout(
            () => setNotification({ type: "", message: "" }),
            4000
          );
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-container">
        
        {/* Success/Error Notification */}
        {notification.message && (
          <div className={`notification notification-${notification.type}`}>
            <div className="notification-content">
              {notification.message}
            </div>
            <div className="notification-progress"></div>
          </div>
        )}
        
        {/* Title */}
        <h2 className="contact-section-title">Contact Me</h2>

        <p className="contact-section-text">
          I am actively seeking entry-level Full Stack, React, or Software
          Developer opportunities. If you're looking for a motivated developer
          who can contribute to real-world projects, feel free to reach out.
        </p>

        <div className="contact-section-wrapper">

          <div className="contact-section-left">
            <img
              src="/images/contact img.png"
              alt="Contact Illustration"
              className="contact-section-image"
            />
          </div>

          <div className="contact-section-right">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-section-form"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              <button
                type="submit"
                className="contact-btn contact-btn-primary"
              >
                Send Message
              </button>
            </form>

            <div className="contact-section-info">
              <p>
                <strong>Email:</strong> maazfatima21@gmail.com
              </p>
              <p>
                <strong>Location:</strong> India
              </p>
            </div>

            <div className="contact-section-links">
              <a
                href="mailto:maazfatima21@gmail.com?subject=Job Opportunity&body=Hello Maaz,"
                className="contact-btn contact-btn-outline"
              >
                Direct Email
              </a>

              <a
                href="https://www.linkedin.com/in/maazfatima/"
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn-outline"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/maazfatima21"
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;