"use client";

import { site } from "@/data/site";
import { PixelIcon } from "./PixelIcon";

const field =
  "mt-1.5 w-full border-2 border-line bg-page px-3 py-2.5 text-base text-ink placeholder:text-muted/70";

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = (key: string) => String(data.get(key) ?? "").trim();

    const subject = text("subject");
    const body = `${text("message")}\n\n— ${text("name")} (${text("email")})`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-bold">
        Name
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={field}
        />
      </label>

      <label className="block text-sm font-bold">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={field}
        />
      </label>

      <label className="block text-sm font-bold">
        Subject
        <input
          name="subject"
          type="text"
          required
          placeholder="What's this about?"
          className={field}
        />
      </label>

      <label className="block text-sm font-bold">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, or just say hello!"
          className={`${field} resize-y`}
        />
      </label>

      <button type="submit" className="pixel-btn !mx-1 w-[calc(100%-8px)]">
        <PixelIcon name="mail" className="h-3.5 w-auto" />
        Send message
      </button>
      <p className="text-xs text-muted">
        Opens your email app with the message ready to send.
      </p>
    </form>
  );
}
