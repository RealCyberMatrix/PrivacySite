// index.js
import Link from "next/link";
// import './style.css' 

export default function Index() {
  return (
    <div>
      <h1> Index </h1>
      <Link href="/about">
        <a> About </a>
      </Link>
      <br />
      <br />
      <div>
        <div style={{ marginTop: '10px', lineHeight : 3, fontWeight: 'bold' }}>
            Cyber Matrix Privacy Policy
        </div>
        <div style={{ marginTop: '10px', lineHeight : 1, fontWeight: 'bold' }}>
            Last updated: Jan 1, 2023.
        </div>
        <div style={{ marginTop: '15px' }}>
            Cyber Matrix (“Cyber Matrix” or “we”) respects and protects the privacy of Users (“you” or “users”). This privacy policy document covers first-party implementations of Cyber Matrix the Extension Software (the “Service”). It does not cover distribution methods (e.g. Chrome Web Store), Cyber Matrix website, third-party implementations of Cyber Matrix.
        </div>
        <div style={{ marginTop: '10px', lineHeight : 1, fontWeight: 'bold' }}>
            What information do we collect
        </div>
        <div>
            <ul>
                <li>email</li>
                <li>phone number</li>
                <li>TikTok user ID</li>
                <li>Persona public key</li>
            </ul>
        </div>
        <div style={{ marginTop: '10px', lineHeight : 1, fontWeight: 'bold' }}>
            How we use the information we collect
        </div>
        <div>
            <p>
                Our primary purpose in collecting information is to help us operate, provide, improve, customize, support, and market our Services.
            </p>
            <p>
                We may use your information to:
            </p>
            <ul>
                <li>Provide the Services you requested;</li>
                <li>Improve our product and user experience;</li>
                <li>Verify your account ownership (should you elect to use Particle Network wallet).</li>
                <li>Persona public key</li>
            </ul>
        </div>
        <div>
            <div style={{ marginTop: '10px', lineHeight : 1, fontWeight: 'bold' }}>
                How we update our policy
            </div>
            <div>
                <p>We reserves the right to update this Policy online from time to time, and the new policy will immediately replace the older one once posted.</p>
                <p>We will notify you of material changes to this policy by updating the last updated date at the top of this page.</p>
                <p>In particular, if you do not accept the revised policies, please immediately stop your use of Services</p>
                <p>Your continued use of our Services confirms your acceptance of our Privacy Policy, as amended. If you do not agree to our Privacy Policy, as amended, you must stop using our Services. We recommend that you visit this page frequently to check for changes.</p>
            </div>
        </div>
        <div>
            <div style={{ marginTop: '10px', lineHeight : 1, fontWeight: 'bold' }}>
                Contact Us
            </div>
            <p>
                If you have any questions about our Privacy Policy, please do not hesitate to contact us at cmylidev@gmail.com.
            </p>
        </div>
        </div>
    </div>
  );
}