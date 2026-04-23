import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p className="hover:text-blue-500">Welcome to our website! We are dedicated to providing you with the best experience possible. Our team is passionate about delivering high-quality content and services to our users.</p>
      <p className="text-lg">Our mission is to create a platform that connects people and fosters a sense of community. We believe in the power of collaboration and strive to bring people together through our website.</p>
      <p className="text-lg">Thank you for visiting our site, and we hope you enjoy your time here!</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}