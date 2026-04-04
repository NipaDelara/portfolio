import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(form.current);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      title: formData.get("title"),
      message: formData.get("message"),
    };

    try {
      const result = await emailjs.send(
        "service_1z56ow8",
        "template_ij5sbsc",
        templateParams,
        {
          publicKey: "Tet1-oyRa_vEt5y8n",
        }
      );

      console.log("EmailJS success:", result);
      setStatus("Message sent successfully.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus(
        `Failed to send message: ${error?.text || error?.message || "Unknown error"}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-orange-500 font-semibold mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Have a project, internship opportunity, or just want to say hello?
            Send me a message and I’ll get back to you.
          </p>

          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p>nipadelara@hotmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-gray-300 mt-3 break-words">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;