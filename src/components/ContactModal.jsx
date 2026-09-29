import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { X, Send } from "lucide-react";

export default function ContactModal({ open, onClose }) {
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const showToast = (type, message) => {
    setToast({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));
    }, 4000);
  };

  const closeToast = () => {
    setToast((prev) => ({
      ...prev,
      show: false,
    }));
  };

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      e.target.reset();

      showToast("success", "Your message has been sent successfully.");
    } catch (error) {
      console.error(error);

      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Contact Modal */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 p-5 backdrop-blur-md"
        onClick={onClose}
      >
        <div
          className="relative my-8 w-full max-w-lg rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-slate-400 transition hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-2xl font-bold text-white">Let's talk</h2>

          <p className="mt-2 text-sm text-slate-400">
            Fill in your details and I'll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Mobile number"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
            />

            {/* Send */}
            <button
              type="submit"
              disabled={sending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed right-5 top-5 z-[10000] w-[calc(100%-40px)] max-w-sm transform transition-all duration-500 ease-out ${
          toast.show
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[120%] opacity-0"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-2xl border bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl ${
            toast.type === "success"
              ? "border-emerald-400/20"
              : "border-red-400/20"
          }`}
        >
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                toast.type === "success"
                  ? "bg-emerald-400/10 text-emerald-400"
                  : "bg-red-400/10 text-red-400"
              }`}
            >
              {toast.type === "success" ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">
                {toast.type === "success"
                  ? "Message sent"
                  : "Something went wrong"}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                {toast.message}
              </p>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={closeToast}
              aria-label="Close notification"
              className="rounded-lg p-1 text-slate-500 transition hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Progress */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
            <div
              key={toast.show ? Date.now() : "hidden"}
              className={`h-full origin-left ${
                toast.type === "success" ? "bg-emerald-400" : "bg-red-400"
              } ${toast.show ? "toast-progress" : ""}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
