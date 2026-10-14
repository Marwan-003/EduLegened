import { Earth, GraduationCap, MessagesSquare, Share2 } from "lucide-react";
import Link from "next/link";
import Button from "../../ui/Button";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-slate-50">
      <div className="container">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded text-2xl font-semibold"
            >
              <GraduationCap
                aria-hidden="true"
                className="size-10 rounded-2xl bg-(--color-primary-500) p-2 text-white lg:size-12"
              />
              EduLegend
            </Link>

            <p className="text-slate-500">
              Empowering lifelong learners and ambitious professionals through
              structured mentorship, industry-curated curriculum, and verified
              project milestones.
            </p>

            <ul className="flex items-center gap-4">
              <li>
                <Link href="#" aria-label="EduLegend website" className={styles.socialLink}>
                  <Earth aria-hidden="true" className="size-4" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Share EduLegend" className={styles.socialLink}>
                  <Share2 aria-hidden="true" className="size-4" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Join our community" className={styles.socialLink}>
                  <MessagesSquare aria-hidden="true" className="size-4" />
                </Link>
              </li>
            </ul>
          </div>

          <nav aria-labelledby="footer-courses">
            <h2 id="footer-courses" className="mb-4 text-lg font-semibold">
              Explore Courses
            </h2>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="#" className={styles.footerLink}>Software Engineering</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>UI/UX & Product Design</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Data Science & AI</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Cloud Architecture</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Product Management</Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-resources">
            <h2 id="footer-resources" className="mb-4 text-lg font-semibold">
              Resources
            </h2>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="#" className={styles.footerLink}>Career Roadmaps</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Find a Mentor</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Student Community</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Scholarships</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Help Center</Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Stay Connected</h2>
            <p className="text-slate-500">
              Get weekly curriculum updates and masterclass invites straight to
              your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="h-10 w-full rounded-full border border-slate-400 px-4 focus:outline-slate-600"
              />
              <Button type="submit" rounded className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
          <p className="text-slate-500">
            © 2026 EduLegend Learning Systems Inc. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-6">
              <li>
                <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>Cookie Settings</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;