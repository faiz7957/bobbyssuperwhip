"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Bobby's Super Whip! I'd like to enquire about booking the ice cream van for my event."
  );

  return (
    <a
      href={`https://wa.me/447511330524?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <MessageCircle className="h-7 w-7" />

      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
        Message for a Quote
      </span>
    </a>
  );
}