"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 302 6308993",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "saadmushtaq941@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Lahore, Pakistan",
  },
];

const INITIAL_FORM = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceChange = (value) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.firstname || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: `${form.firstname} ${form.lastname}`.trim(),
          email: form.email,
          phone: form.phone,
          subject: form.service,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setSuccess(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-6 p-10 glass rounded-2xl accent-border-hover text-center min-h-[400px]"
                >
                  <AiOutlineCheckCircle className="text-accent text-[80px] drop-shadow-[0_0_20px_rgba(0,255,153,0.5)]" />
                  <h3 className="text-3xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-white/60 max-w-[360px]">
                    Thanks for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSuccess(false)}
                    className="mt-2"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 p-10 glass rounded-2xl accent-border-hover"
                >
                  <h3 className="text-4xl text-accent drop-shadow-[0_0_12px_rgba(0,255,153,0.35)]">
                    Lets work together
                  </h3>
                  <p className="text-white/60">
                    I bring 4+ years of experience to the table, with a proven
                    track record in Web Development, Mobile Application
                    Development, UI/UX Design. I'm confident that my skills can
                    add value and drive success in our collaboration.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      name="firstname"
                      type="text"
                      placeholder="Firstname"
                      value={form.firstname}
                      onChange={handleChange}
                    />
                    <Input
                      name="lastname"
                      type="text"
                      placeholder="Lastname"
                      value={form.lastname}
                      onChange={handleChange}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <Select
                    value={form.service}
                    onValueChange={handleServiceChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Service</SelectLabel>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="Mobile Application Development">
                          Mobile Application Development
                        </SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea
                    name="message"
                    className="h-[200px]"
                    placeholder="Type your message here."
                    value={form.message}
                    onChange={handleChange}
                  />
                  {error && (
                    <p className="text-red-400 text-sm -mt-2">{error}</p>
                  )}
                  <Button
                    type="submit"
                    size="md"
                    className="max-w-44 py-2 flex items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-base" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] glass text-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,153,0.1)] hover:shadow-[0_0_30px_rgba(0,255,153,0.25)] transition-shadow duration-300">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
