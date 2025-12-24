import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from "@docusaurus/Translate";

function BrandHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.brandHero}>
      <div className={styles.brandHeroContent}>
        <div>
          <h1 className={styles.brandTitle}>{siteConfig.title}</h1>

          <p className={styles.brandSubtitle}>
            <Translate id="homepage.tagline">{siteConfig.tagline}</Translate>
          </p>
          <div className={styles.brandButtons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.ctaButton
              )}
              to="/products"
            >
              <Translate id="homepage.brandHero.viewAllProducts">
                View All Products
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({
  color,
  title,
  description,
  children,
}: {
  color: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={styles.featureSection} style={{ background: color }}>
      <div className={styles.featureCard}>
        <div className={styles.featureCardLeft}>
          <h2 className={styles.featureTitle}>{title}</h2>
          <p className={styles.featureDesc}>{description}</p>
        </div>
        <div className={styles.featureCardRight}>{children}</div>
      </div>
    </section>
  );
}

function ExampleCodeBlock({ code }: { code: string }) {
  return (
    <pre className={styles.codeBlock}>
      <code>{code}</code>
    </pre>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout>
      <BrandHero />
      <main>
        <FeatureSection
          color="linear-gradient(90deg, #e0e7ff 0%, #f0fdfa 100%)"
          title={
            <Translate id="homepage.feature.openSourceTitle">
              Open Source, Engineer-First
            </Translate>
          }
          description={
            <ul>
              <li>
                <Translate id="homepage.feature.openSource1">
                  Driven by engineering, open to everyone
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.openSource2">
                  Transparent, auditable, and community-powered
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.openSource3">
                  We believe in freedom, sharing, and continuous improvement
                </Translate>
              </li>
            </ul>
          }
        />
        <FeatureSection
          color="linear-gradient(90deg, #fef9c3 0%, #fce7f3 100%)"
          title={
            <Translate id="homepage.feature.productMatrixTitle">
              Product Matrix, Innovation Together
            </Translate>
          }
          description={
            <ul>
              <li>
                <Translate id="homepage.feature.productMatrix1">
                  Multiple open source products, each solving real-world
                  problems
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.productMatrix2">
                  From app distribution to developer tools, all in one place
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.productMatrix3">
                  Discover, use, and connect our ecosystem
                </Translate>
              </li>
            </ul>
          }
        />
        <FeatureSection
          color="linear-gradient(90deg, #f1f5f9 0%, #fef2f2 100%)"
          title={
            <Translate id="homepage.feature.minimalismTitle">
              Minimalism & Reliability
            </Translate>
          }
          description={
            <ul>
              <li>
                <Translate id="homepage.feature.minimalism1">
                  Simple to deploy, easy to maintain
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.minimalism2">
                  Enterprise-grade reliability, trusted by teams
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.minimalism3">
                  Focus on essentials, no bloat
                </Translate>
              </li>
            </ul>
          }
        />
        <FeatureSection
          color="linear-gradient(90deg, #fce7f3 0%, #fee2e2 100%)"
          title={
            <Translate id="homepage.feature.communityTitle">
              Community Collaboration
            </Translate>
          }
          description={
            <ul>
              <li>
                <Translate id="homepage.feature.community1">
                  Welcoming contributors from all backgrounds
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.community2">
                  Open discussions, transparent roadmap
                </Translate>
              </li>
              <li>
                <Translate id="homepage.feature.community3">
                  Grow and build the future together
                </Translate>
              </li>
            </ul>
          }
        />
        {/* Footer gradient and links */}
        <footer className={styles.footerGradient}>
          <div className={styles.footerContent}>
            <img
              src="/img/ews.png"
              alt="Site Logo"
              className={styles.footerLogo}
            />
            <div className={styles.footerCompany}>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
