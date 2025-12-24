import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./products.module.css";
import Translate from "@docusaurus/Translate";

const products = [
  {
    name: "Zealot",
    url: "https://zealot.ews.im",
    highlight: true,
  },
  {
    name: "Hpr",
    url: "https://hpr.ews.im",
    highlight: true,
  },
  {
    name: "hypr-input-switcher",
    url: "https://github.com/icyleaf/hypr-input-switcher",
    highlight: false,
  },
];

export default function Products(): ReactNode {
  return (
    <Layout
      title="Products"
      description="All products by EWS Studio, including Zealot and more."
    >
      <div className={styles.productsPage}>
        <Heading as="h1" className={styles.title}>
          <Translate id="products.title">Our Products</Translate>
        </Heading>
        <div className={styles.productsList}>
          {products.map((product) => (
            <div key={product.name} className={styles.productCard}>
              <Heading as="h2" className={styles.productName}>
                {product.name}
              </Heading>
              <p className={styles.productDesc}>
                {product.name === "Zealot" && (
                  <Translate id="products.zealot.desc">
                    A modern, secure, and easy-to-use iOS/Android app
                    distribution platform for teams and individuals.
                  </Translate>
                )}
                {product.name === "Hpr" && (
                  <Translate id="products.hpr.desc">
                    Mirror ans sync any git repository to gitlab
                  </Translate>
                )}
                {product.name === "hypr-input-switcher" && (
                  <Translate id="products.hyprInputSwitcher.desc">
                    A simple input method switcher for Hyprland, making your
                    workflow more efficient.
                  </Translate>
                )}
              </p>
              <Link
                className="button button--primary"
                to={product.url}
                target="_blank"
              >
                <Translate id="products.visit">Visit</Translate>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
