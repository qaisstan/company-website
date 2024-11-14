export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p>
        Follow us on{" "}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
