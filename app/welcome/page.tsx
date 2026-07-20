import Image from "next/image";
import engagementPhoto from "../assets/mainengagementphoto.jpg";

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <section className="welcome-content">
        <div className="engagement-frame">
          <div className="engagement-photo-wrap">
            <Image
              className="engagement-photo"
              src={engagementPhoto}
              alt="Zach and Ruthie celebrating their engagement"
              fill
              priority
              sizes="(max-width: 700px) 82vw, 430px"
            />
          </div>
        </div>
        <h1 className="welcome-title">We&apos;re getting married!</h1>
      </section>
    </main>
  );
}
