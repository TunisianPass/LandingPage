import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: June 25, 2025

Welcome to ${config.appName}!

These Terms of Service ("Terms") govern your access to and use of the ${config.appName} website at ${config.baseUrl} ("Website") and related services provided by TunisianPass SARL. By using our Website and Services, you agree to these Terms.

1. Company Information
TunisianPass SARL
Registered office: Parc Essaada, 2078 – La Marsa, Tunis, Tunisia
Capital: TND 1,000 | Matricule Fiscal: 1914582A 
Main activity: Public relations and communication consulting
Date of establishment: 25/02/2025

2. Description of ${config.appName}
${config.appName} helps restaurateurs strengthen their online reputation, attract more customers, and drive repeat visits by installing QR code–based review and engagement systems on-site.

3. Subscription Plans & Fees
- Standard Plan: 1,000 DT per year (includes QR codes, dashboard access, support).
- Long-Term Plan: 650 DT per year (same features at a reduced rate).
- Physical Materials: 5 DT to 100 DT for stickers and stands (one-time fee).
Payments are due annually in advance. Late payments incur a 5% surcharge. You may cancel any time; refunds only within 14 days of initial purchase.

4. Account & Security
We provide a secure merchant dashboard upon subscription. You are responsible for maintaining your credentials’ confidentiality and all activity under your account.

5. Service Description
- QR Code Materials & Installation: Durable stickers and stands
- Interactive Experience: Guests scan, leave Google reviews, submit name/phone/email, then spin a prize wheel
- Prize Redemption: Locked for 24 hours to encourage repeat visits
- Analytics Dashboard: Real-time metrics on scans, reviews, and engagement

6. Data Collection & Privacy
We collect merchant data (company name, contact, billing info) and customer data (name, email, phone, device ID) solely to deliver our Services. For full details, see our Privacy Policy at ${config.baseUrl}/privacy-policy.

7. Intellectual Property
All software, content, and designs are owned by TunisianPass SARL. You own the customer data and reviews you collect, granting us a license to use anonymized aggregated data for improvements.

8. Prohibited Conduct
No reverse-engineering, tampering, spamming, or solicitation of fake reviews.

9. Termination
Cancel via written notice; access remains until period end. We may suspend or terminate for material breaches.

10. Disclaimers & Liability
Services provided "as-is". Liability capped at fees paid in the preceding 12 months. No liability for indirect or consequential damages.

11. Governing Law
These Terms are governed by Tunisian law. Disputes are resolved exclusively by courts in Tunis.

12. Updates
We may amend these Terms at any time; continued use signifies acceptance.

13. Contact
Hedi Fourati, CEO
Email: hedi_fourati@icloud.com
Phone: +216 28 655 624 | +216 28 732 611
`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
