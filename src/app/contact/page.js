"use client";

import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | TRUSTON</title>
        <meta
          name="description"
          content="Get in touch with TRUSTON for inquiries about web development, API integration, cloud solutions, SEO, and more."
        />
        <meta
          name="keywords"
          content="TRUSTON, contact, web development, API integration, cloud solutions, SEO"
        />
      </Head>

      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Schedule a Meeting
        </h1>
        <div className="max-w-4xl mx-auto">
          {/* Google Calendar Appointment Scheduling */}
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1e8e8XOTSrg8MfIjNMoUX8qEy2kn-W1NfElZIksEsDmUsJpG5h419e-Q7uOx5BXOKHGvMT69zU?gv=true"
            style={{
              border: 0,
              width: "100%",
              height: "600px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            frameBorder="0"
          />
        </div>
      </div>
    </>
  );
}
