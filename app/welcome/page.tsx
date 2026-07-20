import Image from "next/image";
import engagementPhoto from "../assets/mainengagementphoto.jpg";
import flower from "../assets/flower.png";
import { Countdown } from "./Countdown";

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      <div className="welcome-flower welcome-flower-top" aria-hidden="true">
        <Image src={flower} alt="" />
      </div>
      <div className="welcome-flower welcome-flower-bottom" aria-hidden="true">
        <Image src={flower} alt="" />
      </div>
      <section className="welcome-content">
        <h1 className="welcome-title">We&apos;re getting married!</h1>
        <div className="welcome-details">
          <div className="engagement-frame">
            <div className="engagement-photo-wrap">
              <Image
                className="engagement-photo"
                src={engagementPhoto}
                alt="Zach and Ruthie celebrating their engagement"
                fill
                priority
                sizes="(max-width: 760px) 86vw, 520px"
              />
            </div>
          </div>
          <div className="wedding-timeline">
            <div className="date-block">
              <p className="date-label">Engaged</p>
              <p className="date-value">May 9, 2026</p>
            </div>
            <div className="timeline-divider" />
            <div className="date-block">
              <p className="date-label">Until we say “I do”</p>
              <p className="date-value">April 22, 2028</p>
            </div>
            <Countdown />
          </div>
        </div>
      </section>
    </main>
  );
}
