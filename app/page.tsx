"use client";

import { useState } from "react";

const INSTAGRAM = "https://www.instagram.com/justmarriedmoments_/";
const BOOKING = "https://forms.gle/cz91cj27DR2YXMvz8";
const EMAIL = "mailto:kellyallen8145@gmail.com";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function CameraIllustration() {
  return (
    <svg
      className="camera-art"
      viewBox="0 0 650 620"
      fill="none"
      role="img"
      aria-label="Original illustration of a handheld wedding-day video camera with a heart on its screen"
    >
      <defs>
        <linearGradient
          id="bodyShade"
          x1="120"
          y1="160"
          x2="500"
          y2="480"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f5d9d2" />
          <stop offset="1" stopColor="#b46a70" />
        </linearGradient>
        <linearGradient
          id="lensShade"
          x1="320"
          y1="250"
          x2="500"
          y2="450"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#50252d" />
          <stop offset="1" stopColor="#210e16" />
        </linearGradient>
      </defs>
      <g transform="rotate(-10 325 310)">
        <rect
          x="98"
          y="164"
          width="425"
          height="300"
          rx="35"
          fill="url(#bodyShade)"
          stroke="#682f3a"
          strokeWidth="5"
        />
        <rect
          x="128"
          y="198"
          width="226"
          height="227"
          rx="19"
          fill="#f7ebe5"
          stroke="#682f3a"
          strokeWidth="4"
        />
        <rect
          x="149"
          y="220"
          width="183"
          height="184"
          rx="9"
          fill="#632c39"
        />
        <path
          d="M240 353c-72-43-86-83-62-107 22-21 49-6 62 13 14-19 42-34 63-13 25 24 10 64-63 107Z"
          fill="#f6d6d3"
        />
        <circle
          cx="428"
          cy="313"
          r="103"
          fill="#7d404d"
          stroke="#4b1c28"
          strokeWidth="8"
        />
        <circle
          cx="428"
          cy="313"
          r="77"
          fill="url(#lensShade)"
          stroke="#efc2be"
          strokeWidth="7"
        />
        <circle
          cx="428"
          cy="313"
          r="50"
          stroke="#a56d79"
          strokeWidth="3"
        />
        <circle cx="428" cy="313" r="24" fill="#d2a0a2" opacity=".7" />
        <circle cx="413" cy="298" r="9" fill="#fff8f1" />
        <rect x="173" y="132" width="168" height="33" rx="10" fill="#602735" />
        <rect x="204" y="112" width="109" height="20" rx="7" fill="#c48c91" />
        <rect
          x="502"
          y="251"
          width="65"
          height="126"
          rx="13"
          fill="#b97d83"
          stroke="#682f3a"
          strokeWidth="5"
        />
        <circle cx="138" cy="181" r="7" fill="#fff7ec" />
        <rect x="180" y="449" width="135" height="38" rx="10" fill="#6a303e" />
        <path d="M215 487h65l35 53H180l35-53Z" fill="#9f646e" />
      </g>
      <g fill="#fff5e9" stroke="#7d404d" strokeWidth="3">
        <path d="m105 78 12 26 27 12-27 12-12 26-12-26-27-12 27-12 12-26Z" />
        <path d="m545 82 8 17 17 8-17 8-8 17-8-17-17-8 17-8 8-17Z" />
      </g>
      <path
        d="M505 502c24-23 51-15 51 11 0 22-30 43-51 57-22-14-51-35-51-57 0-26 27-34 51-11Z"
        fill="#8b4552"
      />
    </svg>
  );
}

function FilmStrip() {
  return (
    <div
      className="filmstrip"
      aria-label="Illustrated film frames, not client photography"
    >
      <div className="film-holes" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="film-frames">
        <div className="film-frame">
          <span>01</span>
          <strong>
            THE
            <br />
            ANTICIPATION
          </strong>
          <b>♡</b>
        </div>
        <div className="film-frame">
          <span>02</span>
          <strong>
            THE
            <br />
            LITTLE THINGS
          </strong>
          <b>✳</b>
        </div>
        <div className="film-frame">
          <span>03</span>
          <strong>
            THE
            <br />
            BIG FEELINGS
          </strong>
          <b>♥</b>
        </div>
      </div>
      <div className="film-holes" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <main id="top">
      <div className="concept-banner">
        INDEPENDENT WEBSITE CONCEPT · NOT THE OFFICIAL JUST MARRIED MOMENTS
        WEBSITE
      </div>

      <header className="site-header">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-script">just married</span>
          <span className="brand-small">
            MOMENTS <span>✳</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">THE EXPERIENCE</a>
          <a href="#details">WHAT I CAPTURE</a>
          <a href="#portfolio">THE MOMENTS</a>
          <a href="#contact">SAY HELLO</a>
        </nav>

        <a
          className="nav-cta"
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
        >
          2027 INQUIRIES <Arrow diagonal />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        <a onClick={close} href="#about">THE EXPERIENCE</a>
        <a onClick={close} href="#details">WHAT I CAPTURE</a>
        <a onClick={close} href="#portfolio">THE MOMENTS</a>
        <a onClick={close} href="#contact">SAY HELLO</a>
        <a
          onClick={close}
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
        >
          INQUIRE FOR 2027 ↗
        </a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-left">
          <div className="eyebrow">
            <span className="red-dot" />
            ERIE, PA + BEYOND · WEDDING CONTENT CREATION
          </div>

          <h1 id="hero-title">
            The day
            <br />
            flies by.
            <br />
            <em>The moments</em>
            <br />
            <span>stay.</span>
          </h1>

          <p>
            For the happy tears, the blurry dance-floor clips, the in-between
            magic — and everything you didn&apos;t get to see.
          </p>

          <div className="hero-actions">
            <a
              className="button button-dark"
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
            >
              LET&apos;S TALK ABOUT YOUR DAY <Arrow diagonal />
            </a>
            <a className="under-link" href="#about">
              THE EXPERIENCE ↓
            </a>
          </div>

          <div className="hero-foot">
            <span>YOUR DAY, THROUGH A DIFFERENT LENS</span>
            <span>SCROLL TO FEEL IT ↓</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="camera-top">
            <span>
              REC <span className="rec-dot" />
            </span>
            <span>THE GOOD STUFF / 001</span>
          </div>

          <div className="hero-illustration">
            <div className="hero-ring ring-one" />
            <div className="hero-ring ring-two" />
            <CameraIllustration />
          </div>

          <div className="hero-sticker">
            ALL THE
            <br />
            <strong>feels!</strong>
            <span>✳ ✳ ✳</span>
          </div>

          <div className="camera-bottom">
            <span>00:24:00:00</span>
            <span>♡ KEEP FOREVER</span>
          </div>
        </div>
      </section>

      <div
        className="marquee"
        aria-label="Behind the scenes, all the feelings, all the memories"
      >
        <div>
          BEHIND THE SCENES <span>✳</span> ALL THE FEELINGS <span>✳</span> ALL THE
          MEMORIES <span>✳</span> BEHIND THE SCENES <span>✳</span> ALL THE
          FEELINGS <span>✳</span>
        </div>
      </div>

      <section id="about" className="intro section-pad">
        <div className="section-tag">01 / THE EXPERIENCE</div>
        <div className="intro-content">
          <div className="intro-side">
            <span className="handdrawn-heart">♡</span>
            <span>THIS IS THE GOOD PART</span>
          </div>
          <div>
            <h2>
              Not just the
              <br />
              picture-perfect.
              <br />
              <em>The real stuff.</em>
            </h2>
            <p>
              I&apos;m Kelly, the person behind Just Married Moments. I capture
              behind-the-scenes wedding-day content so you can relive the little
              moments, big emotions, and everything in between.
            </p>
            <p className="intro-secondary">
              Think candid clips, real reactions, and a fresh perspective
              alongside your wedding photo and video team.
            </p>
            <a
              className="text-arrow"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              GET TO KNOW MY WORK <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <section id="details" className="details section-pad">
        <div className="section-tag light">02 / THE LITTLE DETAILS</div>

        <div className="details-head">
          <div>
            <span className="mini-label">WEDDING DAY CONTENT, YOUR WAY</span>
            <h2>
              All the
              <br />
              <em>unfiltered magic.</em>
            </h2>
          </div>
          <p>
            Because some of your favorite memories happen when nobody&apos;s
            posing.
          </p>
        </div>

        <div className="feature-grid">
          <article>
            <span className="feature-number">01</span>
            <div className="feature-symbol">◉</div>
            <h3>Behind the scenes</h3>
            <p>
              The candid moments, genuine reactions, and little details that
              make your day yours.
            </p>
          </article>
          <article>
            <span className="feature-number">02</span>
            <div className="feature-symbol">
              24<span>h</span>
            </div>
            <h3>Fast delivery</h3>
            <p>
              Unedited footage delivered within 24 hours, as highlighted by
              Just Married Moments.
            </p>
          </article>
          <article>
            <span className="feature-number">03</span>
            <div className="feature-symbol">♡</div>
            <h3>Your point of view</h3>
            <p>
              Wedding-day content you can revisit, share, and experience all
              over again.
            </p>
          </article>
        </div>

        <div className="details-note">
          A WEDDING CONTENT CREATOR COMPLEMENTS — NOT REPLACES — YOUR
          PHOTOGRAPHER OR VIDEOGRAPHER.
        </div>
      </section>

      <section className="film-section">
        <div className="film-intro">
          <span>THE UNPOSED. THE UNEXPECTED. THE UNFORGETTABLE.</span>
          <h2>
            It&apos;s the
            <br />
            <em>little things.</em>
          </h2>
        </div>
        <FilmStrip />
        <p>
          Original graphic illustration. See Kelly&apos;s Instagram for
          authentic wedding-day work.
        </p>
      </section>

      <section id="portfolio" className="portfolio section-pad">
        <div className="section-tag">03 / THE REAL MOMENTS</div>
        <div className="portfolio-grid">
          <div>
            <span className="mini-label">STRAIGHT FROM THE WEDDING DAY</span>
            <h2>
              See it.
              <br />
              Feel it.
              <br />
              <em>Relive it.</em>
            </h2>
            <p>
              The best way to experience Kelly&apos;s work? Watch the real
              moments she&apos;s captured. Visit her Instagram for genuine
              behind-the-scenes wedding content.
            </p>
            <a
              className="button button-dark"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              EXPLORE THE REAL PORTFOLIO <Arrow diagonal />
            </a>
          </div>

          <div className="portfolio-poster">
            <div className="poster-top">
              <span>JUST MARRIED MOMENTS</span>
              <span>VOL. 01</span>
            </div>
            <div className="poster-center">
              <span className="poster-sparkle">✳</span>
              <span>
                the
                <br />
                <em>best</em>
                <br />
                day ever.
              </span>
              <span className="poster-heart">♡</span>
            </div>
            <div className="poster-bottom">
              <span>THE MOMENTS BETWEEN THE MOMENTS</span>
              <span>ERIE + BEYOND</span>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-band">
        <span>NOW INQUIRING FOR 2027</span>
        <h2>
          Save the date.
          <br />
          <em>Keep the feelings.</em>
        </h2>
        <a href={BOOKING} target="_blank" rel="noopener noreferrer">
          CHECK INQUIRY FORM <Arrow diagonal />
        </a>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="section-tag light">04 / YOUR STORY STARTS HERE</div>

        <div className="contact-inner">
          <div>
            <span className="mini-label">TO THE FUTURE NEWLYWEDS</span>
            <h2>
              Let&apos;s make
              <br />
              some <em>memories.</em>
            </h2>
            <p>
              Planning a wedding in Erie or beyond? Tell Kelly about your day
              through her existing inquiry form.
            </p>
            <div className="contact-actions">
              <a
                className="button button-light"
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
              >
                INQUIRE ABOUT YOUR DATE <Arrow diagonal />
              </a>
              <a
                className="text-arrow light-link"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                FIND ME ON INSTAGRAM <Arrow diagonal />
              </a>
            </div>
          </div>

          <div className="contact-mark">
            <span>
              you had
              <br />
              to be
              <br />
              <em>there.</em>
            </span>
            <small>✳</small>
          </div>
        </div>

        <div className="contact-bottom">
          <a href={EMAIL}>kellyallen8145@gmail.com</a>
          <span>BASED IN ERIE, PA · AVAILABLE BEYOND</span>
        </div>
      </section>

      <footer>
        <a href="#top" className="footer-brand">
          just married <em>moments.</em>
        </a>
        <div className="footer-links">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            INSTAGRAM ↗
          </a>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer">
            INQUIRE ↗
          </a>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
        <div className="footer-fine">
          <span>© 2026 JUST MARRIED MOMENTS — WEBSITE CONCEPT</span>
          <span>
            INDEPENDENT DESIGN CONCEPT · NOT AFFILIATED WITH OR ENDORSED BY THE
            BUSINESS
          </span>
        </div>
      </footer>
    </main>
  );
}