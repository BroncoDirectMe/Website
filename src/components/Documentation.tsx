// @ts-nocheck
import React, { ReactElement, useEffect } from 'react';
import './Documentation.css';

function Documentation(): ReactElement {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://cdn.jsdelivr.net/gh/rstacruz/flatdoc@v0.9.0/flatdoc.js';
    script.async = true;
    script.onload = () => {
      Flatdoc.run({
        fetcher: Flatdoc.github('BroncoDirectMe/Website'),
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      role="flatdoc"
      className="big-h3 large-brief no-literate documentationElm"
    >
      <div className="navbar">
        <a href="index.html">Home</a>
        <a href="current_progress.html">Current Progress</a>
        <a href="documentation.html">Documentation</a>
      </div>
      <div className="header">
        <div className="left">
          <h1>BroncoDirectMe</h1>
        </div>
        <div className="right">
          {/* GitHub buttons: see http://ghbtns.com */}
          <iframe
            src="https://ghbtns.com/github-btn.html?user=jaroonl&amp;repo=Website&amp;type=watch&amp;count=true"
            frameBorder="0"
            scrolling="0"
            width="110"
            height="20"
          ></iframe>
        </div>
      </div>

      <div className="content-root">
        <div className="menubar">
          <div className="menu section" role="flatdoc-menu"></div>
        </div>
        <div role="flatdoc-content" className="content"></div>
      </div>
    </section>
  );
}

export default Documentation;
