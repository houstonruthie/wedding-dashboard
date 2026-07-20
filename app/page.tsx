import Image from "next/image";
import Link from "next/link";
import flower from "./assets/flower.png";
import weddingLogo from "./assets/WeddingLogo1.png";

export default function Home() {
  return (
    <main className="home-page">
      <Link
        className="wedding-entry-card"
        href="/welcome"
        aria-label="Enter the wedding website"
      >
        <Image
          className="flower-art"
          src={flower}
          alt=""
          aria-hidden="true"
        />
        <Image
          className="home-wedding-logo"
          src={weddingLogo}
          alt="Zach and Ruthie — April 22, 2028"
          priority
        />
      </Link>
    </main>
  );
}
