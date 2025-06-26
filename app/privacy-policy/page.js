import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: June 25, 2025

TunisianPass SARL (Parc Essaada, 2078 – La Marsa, Tunis, Tunisia)
Matricule Fiscal: 1914582A
Main activity: Public relations and communication consulting
Date of establishment: 25/02/2025

Thank you for trusting ${config.appName} ("we," "us," or "our"). This Privacy Policy explains how we collect, use, share, and protect your information when you use our website at ${config.domainName} (the "Website").

1. Data Controller
TunisianPass SARL is the controller of your personal data processed under this policy.

2. Information We Collect
- Merchant Data: Company name, contact person, email, phone, billing details (to provision and manage your account).
- Customer Data: When guests scan QR codes: name, email, phone number, unique device identifier (to deliver our services).
- Usage Data: Scan timestamps, review submissions, wheel-spin outcomes, IP address, browser/user-agent.

3. Purpose and Legal Basis
- Contractual Necessity: To provide, maintain, and improve our Services.
- Legitimate Interests: Fraud detection, platform security, analytics.
- Consent: When explicitly provided for marketing communications.

4. Cookies & Non-Personal Data
We use cookies and similar technologies to collect non-personal data (e.g., browsing behavior, device info) to enhance your experience and analyze usage patterns.

5. Data Sharing
We do not sell or rent personal data. We share data only with:
- Service Providers: Hosting, analytics, and payment processors under strict confidentiality.
- Legal Authorities: When required by Tunisian law.

6. Data Retention
- Merchant data: retained for the duration of your subscription plus 24 months.
- Customer & usage data: retained for up to 36 months before anonymization or deletion.

7. Security
We implement encryption in transit, secure data centers, and access controls to protect your data. However, no system is infallible—use our Services at your own risk.

8. Your Rights
Under Tunisian data protection law, you may request access, correction, deletion, restriction, objection, or data portability of your personal data. To exercise, contact us at privacy@tunisian-pass.tn.

9. International Transfers
Your data may be processed outside Tunisia; we ensure adequate safeguards via contractual agreements.

10. Children’s Privacy
Our Services are not directed to individuals under 13. We do not knowingly collect data from minors.

11. Policy Updates
We may modify this policy; significant changes will be notified by email or dashboard notice. Continued use constitutes acceptance.

12. Contact
Hedi Fourati, CEO
Email: hedi_fourati@icloud.com
Phone: +216 28 655 624
`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
