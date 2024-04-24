// pages/404.js
import Link from 'next/link';

const Custom404 = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for does not exist.</p>
    <Link href="/">
      <a>Go back to home</a>
    </Link>
  </div>
);

export default Custom404;

