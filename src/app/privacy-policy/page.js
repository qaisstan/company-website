"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TRUSTON</title>
        <meta
          name="description"
          content="Learn how TRUSTON collects, uses, and protects your data in compliance with privacy laws. We value your trust and take your privacy seriously."
        />
        <meta
          name="keywords"
          content="privacy policy, TRUSTON, data protection, user rights, GDPR compliance"
        />
        <meta name="author" content="TRUSTON" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 max-w-3xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p><strong>Effective Date:</strong> [Insert Date]</p>

          <h2 className="text-2xl font-bold mt-4">1. Introduction</h2>
          <p>
            At TRUSTON, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect the information you provide to us when using our website, [Your Website URL]. By using our website, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-4">2. Data We Collect</h2>
          <p>We collect the following information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Contact Form Information:</strong> Full name, email address, service selected, and additional details provided in the description field.
            </li>
            <li>
              <strong>Newsletter Subscriptions:</strong> Email address when you subscribe to receive updates.
            </li>
            <li>
              <strong>Technical Information:</strong> Basic technical data such as your IP address, browser type, and operating system, which may be collected automatically for analytics purposes (e.g., server logs).
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">3. How We Use Your Data</h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Respond to inquiries submitted via the contact form.</li>
            <li>Send newsletters and updates to subscribers.</li>
            <li>Improve the functionality and performance of our website.</li>
          </ul>
          <p>We do not sell, rent, or trade your information with third parties.</p>

          <h2 className="text-2xl font-bold mt-4">4. Cookies</h2>
          <p>
            We use cookies on our website to improve user experience and analyze site performance. For more details, refer to our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
          </p>

          <h2 className="text-2xl font-bold mt-4">5. Sharing of Information</h2>
          <p>
            We may share your data with trusted third-party services to help us operate our website and send newsletters. These services include:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Email Service Providers:</strong> To send newsletters and manage email subscriptions.
            </li>
            <li>
              <strong>Hosting Providers:</strong> To securely host our website and its data.
            </li>
          </ul>
          <p>We ensure these third-party providers comply with relevant data protection laws.</p>

          <h2 className="text-2xl font-bold mt-4">6. Your Rights</h2>
          <p>You have the following rights regarding your data:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Access:</strong> You can request a copy of the personal information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You can ask us to correct inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> You can request the deletion of your personal data.
            </li>
          </ul>
          <p>To exercise any of these rights, contact us at <strong>contact@truston.dev</strong>.</p>

          <h2 className="text-2xl font-bold mt-4">7. Data Security</h2>
          <p>
            We take reasonable steps to protect your data from unauthorized access, use, or disclosure. This includes using secure servers and encrypted connections for data storage and transmission.
          </p>

          <h2 className="text-2xl font-bold mt-4">8. Retention of Data</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Contact Form Submissions:</strong> Retained only as long as necessary to respond to inquiries.
            </li>
            <li>
              <strong>Newsletter Subscriptions:</strong> Retained until you unsubscribe, after which your email address will be deleted.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-bold mt-4">10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle your data, please contact us at: <strong>contact@truston.dev</strong>.
          </p>
        </div>
      </motion.div>
    </>
  );
}
