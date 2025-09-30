import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5fcurew", // EmailJS → Service ID
        "template_c0q1n6j", // EmailJS → Template ID
        form.current,
        "NehOjhnHFdVX4BzF3" // EmailJS → Public Key
      )
      .then(
        () => {
          setStatus("Mesaj gönderildi ✅");
          form.current.reset();
        },
        (error) => {
          setStatus("Bir hata oluştu ❌");
          console.error(error);
        }
      );
  };

  return (
    <section className="max-w-lg mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Adınız"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="E-posta"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Mesajınız"
          className="p-2 rounded bg-gray-800 border border-gray-700"
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Gönder
        </button>
      </form>
      {status && <p className="mt-4 text-green-400">{status}</p>}
    </section>
  );
}
