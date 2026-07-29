// import type { Metadata } from "next";
// import { LegalPage } from "@/components/LegalPage";

// export const metadata: Metadata = { title: "Cancellation & Refund Policy" };

// export default function RefundPolicyPage() {
//   return (
//     <LegalPage title="Cancellation & Refund Policy">
//       <p>
//         We appreciate your generosity. Since donations directly fund ongoing programs, refunds are
//         handled on a case-by-case basis.
//       </p>
//       <h2>Refund Requests</h2>
//       <p>
//         If a donation was made in error (e.g. duplicate transaction or incorrect amount), please
//         contact us within 7 days at info@moderndreamfoundation.com with your transaction details.
//       </p>
//       <h2>Processing Time</h2>
//       <p>
//         Approved refunds are processed within 7&ndash;10 business days to the original payment
//         method.
//       </p>
//       <p className="text-sm text-ink-faint">Last updated: January 2026.</p>
//     </LegalPage>
//   );
// }


import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cancellation & Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Return and Refund Policy">
      <p className="text-sm text-ink-faint">Last updated: October 27, 2025</p>

      <p>
        Thank you for shopping at MODERN DREAM FOUNDATION. If, for any reason, You are not
        completely satisfied with a purchase, We invite You to review our policy on refunds and
        returns.
      </p>
      <p>
        The following terms are applicable for any products that You purchased with Us.
      </p>

      <h2>Interpretation and Definitions</h2>
      <h3>Interpretation</h3>
      <p>
        The words whose initial letters are capitalized have meanings defined under the following
        conditions. The following definitions shall have the same meaning regardless of whether
        they appear in singular or plural.
      </p>

      <h3>Definitions</h3>
      <p>For the purposes of this Return and Refund Policy:</p>
      <ul>
        <li>
          <strong>Company</strong> (referred to as either &ldquo;the Company&rdquo;,
          &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Agreement) refers to
          SEC 5 ROHINI LANDMARK NEAR RITHALA MODE DELHI 110085.
        </li>
        <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
        <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
        <li><strong>Service</strong> refers to the Website.</li>
        <li>
          <strong>Website</strong> refers to MODERN DREAM FOUNDATION, accessible from{" "}
          <a href="https://moderndreamfoundation.com">https://moderndreamfoundation.com</a>.
        </li>
        <li>
          <strong>You</strong> means the individual accessing or using the Service, or the
          company, or other legal entity on behalf of which such individual is accessing or using
          the Service, as applicable.
        </li>
      </ul>

      <h2>Your Order Cancellation Rights</h2>
      <p>
        You are entitled to cancel Your Order within <strong>7 days</strong> without giving any
        reason for doing so.
      </p>
      <p>
        The deadline for cancelling an Order is 7 days from the date on which You received the
        Goods or on which a third party you have appointed, who is not the carrier, takes
        possession of the product delivered.
      </p>
      <p>
        In order to exercise Your right of cancellation, You must inform Us of your decision by
        means of a clear statement. You can inform us of your decision by:
      </p>
      <ul>
        <li>
          By email:{" "}
          <a href="mailto:info@moderndreamfoundation.com">info@moderndreamfoundation.com</a>
        </li>
        <li>
          By phone: <a href="tel:+918851597933">+91-8851597933</a>
        </li>
      </ul>
      <p>
        We will reimburse You no later than <strong>14 days</strong> from the day on which We
        receive the returned Goods. We will use the same means of payment as You used for the
        Order, and You will not incur any fees for such reimbursement.
      </p>

      <h2>Conditions for Returns</h2>
      <p>
        In order for the Goods to be eligible for a return, please make sure that:
      </p>
      <ul>
        <li>The Goods were purchased in the last 7 days.</li>
        <li>The Goods are in the original packaging.</li>
      </ul>
      <p>The following Goods <strong>cannot</strong> be returned:</p>
      <ul>
        <li>The supply of Goods made to Your specifications or clearly personalized.</li>
        <li>
          The supply of Goods which according to their nature are not suitable to be returned,
          deteriorate rapidly or where the date of expiry is over.
        </li>
        <li>
          The supply of Goods which are not suitable for return due to health protection or
          hygiene reasons and were unsealed after delivery.
        </li>
        <li>
          The supply of Goods which are, after delivery, according to their nature, inseparably
          mixed with other items.
        </li>
      </ul>
      <p>
        We reserve the right to refuse returns of any merchandise that does not meet the above
        return conditions in our sole discretion.
      </p>
      <p>
        Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be
        refunded. This exclusion may not apply to You if it is not permitted by applicable law.
      </p>

      <h2>Returning Goods</h2>
      <p>
        You are responsible for the cost and risk of returning the Goods to Us. You should send
        the Goods to the following address:
      </p>
      <address className="not-italic font-medium text-ink">
        SEC 5 ROHINI LANDMARK NEAR RITHALA MODE DELHI 110085
      </address>
      <p>
        We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We
        recommend an insured and trackable mail service. We are unable to issue a refund without
        actual receipt of the Goods or proof of received return delivery.
      </p>

      <h2>Gifts</h2>
      <p>
        If the Goods were marked as a gift when purchased and then shipped directly to you,
        You&apos;ll receive a gift credit for the value of your return. Once the returned product
        is received, a gift certificate will be mailed to You.
      </p>
      <p>
        If the Goods weren&apos;t marked as a gift when purchased, or the gift giver had the
        Order shipped to themselves to give it to You later, We will send the refund to the gift
        giver.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our Returns and Refunds Policy, please contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:info@moderndreamfoundation.com">info@moderndreamfoundation.com</a>
        </li>
        <li>
          Phone: <a href="tel:+918851597933">+91-8851597933</a>
        </li>
      </ul>
    </LegalPage>
  );
}