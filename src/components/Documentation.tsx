// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { type ReactElement, useEffect } from 'react';
import './Documentation.css';

function Documentation(): ReactElement {
  useEffect(() => {
    document.title = 'Documentation - BroncoDirectMe';
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
      <div className="header" id="main">
        <div className="left">
          <h1 style={{ color: "#6D6D8D" }}>BroncoDirectMe</h1>
        </div>
        <div className="right">
          {/* GitHub buttons: see http://ghbtns.com */}
          <iframe
            title="Star this project on GitHub"
            src="https://ghbtns.com/github-btn.html?user=BroncoDirectMe&amp;repo=Website&amp;type=watch&amp;count=true"
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
