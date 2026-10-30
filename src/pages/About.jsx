
import React from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Heart,
  Star,
  Eye
} from 'lucide-react';
import BookingBanner from '../components/BookingBanner';

const A = '/media/';
const BOOK =
  'https://wa.me/919771865006?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20The%20Ministry%20of%20Nails.';

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="page-hero page-hero-about">

        <div
          className="page-hero-photo"
          style={{
            backgroundImage: `url("${A}IMG_4069.webp")`
          }}
        />

        <div className="page-hero-shade" />

        <div className="page-hero-copy">
          <span className="eyebrow">
            THE WOMAN BEHIND THE MINISTRY
          </span>

          <h1>
            A vision.<br />
            A passion.<br />
            <em>A beautiful journey.</em>
          </h1>

          <p>
            Every beautiful brand begins with a story.
            Discover the woman and the vision behind
            The Ministry of Nails.
          </p>
        </div>

        <span className="page-hero-index">
          01 — THE FOUNDER
        </span>

      </section>

      {/* FOUNDER STORY */}
      <section className="story-section section-shell">

        <div className="story-label">
          <span className="eyebrow">
            MEET THE FOUNDER
          </span>
          <span>01 / 03</span>
        </div>

        <div className="story-content">

          <h2>
            Meet<br />
            <em>Princy Jaiswal.</em>
          </h2>

          <div>

            <p className="large-copy">
              Behind The Ministry of Nails is Princy Jaiswal,
              an entrepreneur with a vision to bring a new
              dimension of beauty, creativity and luxury
              to the world of nail artistry.
            </p>

            <p>
              An MBA in Marketing, Princy brings over a decade
              of professional experience in Delhi NCR.
              Her journey combines business understanding,
              creativity and an entrepreneurial mindset.
            </p>

            <p>
              With a passion for creating meaningful experiences,
              she envisioned a beauty destination where women
              could explore their individuality, express their
              personal style and enjoy a little luxury.
            </p>

            <p>
              For her, The Ministry of Nails is more than a
              business. It is a reflection of a dream,
              a belief in taking chances and the courage
              to turn an idea into something meaningful.
            </p>

            <a
              className="underlined-link"
              href={BOOK}
              target="_blank"
              rel="noreferrer"
            >
              Connect with us
              <ArrowUpRight size={15} />
            </a>

          </div>
        </div>

      </section>

      {/* BRAND IMAGE / VISION */}
      <section className="about-photo">

        <img
          src={'/img/DSC_6800.jpg'}
          alt="The Ministry of Nails creative studio"
          loading="lazy"
        />

        <div className="about-photo-copy">

          <span className="eyebrow">
            THE VISION THAT STARTED IT ALL
          </span>

          <h2>
            Making luxury<br />
            <em>accessible to all.</em>
          </h2>

        </div>

        <span className="about-photo-caption">
          THE MINISTRY OF NAILS <i>·</i> PURNEA
        </span>

      </section>

      {/* OUR VISION */}
      <section className="story-section section-shell">

        <div className="story-label">
          <span className="eyebrow">
            THE BIGGER PICTURE
          </span>
          <span>02 / 03</span>
        </div>

        <div className="story-content">

          <h2>
            A dream beyond<br />
            <em>the ordinary.</em>
          </h2>

          <div>

            <p className="large-copy">
              Why should beautiful experiences be limited
              to metropolitan cities?
            </p>

            <p>
              This question became an important part of
              Princy's vision. She wanted to bring premium
              nail artistry and a thoughtfully designed
              beauty experience closer to women in smaller
              towns and cities.
            </p>

            <p>
              The Ministry of Nails was created with the
              belief that every woman deserves to feel
              special, confident and comfortable expressing
              herself, regardless of where she lives.
            </p>

            <p>
              Our journey is about making that vision a
              reality, one beautiful detail at a time.
            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="values-section section-shell">

        <span className="eyebrow">
          WHAT WE BELIEVE IN
        </span>

        <h2 className="values-heading">
          The values behind<br />
          <em>everything we do.</em>
        </h2>

        <div className="values-grid" data-stagger>

          <article>
            <span>01</span>
            <Heart size={19} />

            <h3>Individuality</h3>

            <p>
              Every woman has her own personality and style.
              We celebrate self-expression through colour,
              creativity and nail artistry.
            </p>
          </article>

          <article>
            <span>02</span>
            <Star size={19} />

            <h3>Thoughtful luxury</h3>

            <p>
              Luxury is in the little things. From the
              experience to the final finish, we value
              every detail.
            </p>
          </article>

          <article>
            <span>03</span>
            <Eye size={19} />

            <h3>A bigger vision</h3>

            <p>
              We believe premium beauty experiences
              should be accessible beyond metropolitan
              cities.
            </p>
          </article>

        </div>

      </section>

      {/* FOUNDER MESSAGE */}
      <section className="founder-message">

        <Sparkles size={22} />

        <span className="eyebrow">
          A THOUGHT BEHIND THE BRAND
        </span>

        <h2>
          Beauty is not just<br />
          about how you look.<br />
          It's about how you <em>feel.</em>
        </h2>

        <span className="founder-signature">
          THE MINISTRY OF NAILS
        </span>

      </section>

      {/* BOOKING */}
      <BookingBanner />

    </main>
  );
}
