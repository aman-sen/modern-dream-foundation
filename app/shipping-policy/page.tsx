// import type { Metadata } from "next";
// import { LegalPage } from "@/components/LegalPage";

// export const metadata: Metadata = { title: "Shipping Policy" };

// export default function ShippingPolicyPage() {
//   return (
//     <LegalPage title="Shipping Policy">
//       <p>
//         Modern Dream Foundation primarily accepts monetary donations and does not ship physical
//         goods through this website.
//       </p>
//       <h2>Merchandise & Kits</h2>
//       <p>
//         Where physical items (such as certificates, welcome kits, or event merchandise) are
//         dispatched to volunteers or donors, delivery typically takes 7&ndash;14 business days
//         within India.
//       </p>
//       <p className="text-sm text-ink-faint">Last updated: January 2026.</p>
//     </LegalPage>
//   );
// }


import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPolicyPage() {
  return (
    <LegalPage title="Shipping Policy">
      <p>
        We offer a variety of shipping options to suit the needs of our customers.
      </p>

      <h2>Free Shipping</h2>
      <p>
        As part of our commitment to an exceptional shopping experience, we are pleased to offer
        free shipping.
      </p>

      <h2>Flat Rate Shipping</h2>
      <p>
        To ensure affordability and simplicity in our shipping process, we provide a flat rate
        shipping option.
      </p>

      <h2>Shipping Methods</h2>
      <p>We offer a simple shipping method to suit the needs of our customers:</p>
      <ul>
        <li>
          <strong>Standard:</strong> 1&ndash;2 Business Days
        </li>
      </ul>
      <p>
        We strive for a swift preparation process and orders are typically processed and
        dispatched within <strong>1&ndash;2 days</strong> so that customers can receive their
        items promptly.
      </p>

      <h2>Delayed Orders</h2>
      <p>
        Unexpected delays can occur due to various reasons such as logistic challenges, inclement
        weather, high demand, or carrier issues. We are committed to handling these situations
        with transparency and efficiency. In the event of a delay, our priority is to keep you
        informed. We will promptly notify you with updates on the status of your order and the
        expected new delivery time. Our goal is to provide clear and accurate information so you
        can plan accordingly.
      </p>
      <p>
        Understanding the inconvenience caused by delays, we offer options to maintain your
        satisfaction. If your order is significantly delayed, you will have the choice to
        continue with the order, modify it, or cancel it for a full refund. Our customer service
        team is always available to assist with any changes to your order.
      </p>

      <h2>Returns and Exchanges</h2>
      <p>
        If you have any questions about refunds, returns, or exchanges, please review our{" "}
        <a href="/refund-policy">Refund Policy</a>.
      </p>

      <h2>Contact Information</h2>
      <ul>
        <li>
          <a href="/contact">Contact Page</a>
        </li>
        <li>
          <a href="mailto:info@moderndreamfoundation.com">info@moderndreamfoundation.com</a>
        </li>
      </ul>
    </LegalPage>
  );
}