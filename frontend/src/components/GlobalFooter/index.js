import React from "react";
import classNames from "classnames";
import styles from "./index.less";

const GlobalFooter = ({ className, links, copyright, version }) => {
  
  return (
    <footer className={styles.globalFooter}>
      {links && (
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.key}
              title={link.key}
              target={link.blankTarget ? "_blank" : "_self"}
              href={link.href}
            >
              {link.title}
            </a>
          ))}
          {version && <div className={styles.version}>{version}</div>}

          {copyright && <div className={styles.copyright}>{copyright}</div>}
        </div>
      )}
    </footer>
  );
};

export default GlobalFooter;
