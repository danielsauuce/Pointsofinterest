import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import "../components/footer.css";

const socialLinks = [
  {
    name: "Facebook",
    icon: <TiSocialFacebook />,
    url: "https://www.facebook.com",
    className: "facebook",
  },
  {
    name: "Instagram",
    icon: <TiSocialInstagram />,
    url: "https://www.instagram.com",
    className: "instagram",
  },
  {
    name: "Twitter",
    icon: <TiSocialTwitter />,
    url: "https://twitter.com",
    className: "twitter",
  },
  {
    name: "LinkedIn",
    icon: <TiSocialLinkedin />,
    url: "https://www.linkedin.com",
    className: "linkedin",
  },
];

const footerSections = [
  {
    title: "Project",
    links: [
      { label: "Changelog", to: "/changelog" },
      { label: "Status", to: "/status" },
      { label: "License", to: "/license" },
      { label: "All Versions", to: "/versions" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "https://discord.com" },
      { label: "Telegram", href: "https://telegram.org" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Facebook", href: "https://www.facebook.com" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", to: "/support" },
      { label: "Troubleshooting", to: "/troubleshooting" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms-of-service" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="brand">
          <h1>Point Of Interest</h1>
          <p>Choose your favourite destination.</p>
        </div>

        <div className="socials">
          {socialLinks.map(({ name, icon, url, className }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={`social ${className}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="bottom">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4>{section.title}</h4>

            {section.links.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
