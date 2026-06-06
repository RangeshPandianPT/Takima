import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(800),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Thank you — we'll be in touch shortly.");
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Reserve a table or just <em className="not-italic text-primary">say hello</em>.</>}
          description="Drop us a line for reservations, private events, or any questions. We respond within the day."
        />

        <form
          onSubmit={onSubmit}
          className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-12"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your full name" />
            <Field name="phone" label="Phone" placeholder="+91 00000 00000" type="tel" />
            <div className="md:col-span-2">
              <Field name="email" label="Email" placeholder="you@example.com" type="email" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="How can we help?"
                className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              We reply within working hours · Mon–Sun, 10am–11pm
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Book a Table"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
