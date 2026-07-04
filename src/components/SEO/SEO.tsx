import { Helmet } from 'react-helmet-async';

export function SEO() {
  return (
    <Helmet>
      <title>Portfolio | Full Stack Developer</title>
      <meta
        name="description"
        content="Full Stack Web Developer portfolio showcasing modern web applications built with React, TypeScript, Node.js, and more."
      />
      <meta property="og:title" content="Fahmid | Full Stack Developer" />
      <meta
        property="og:description"
        content="Full Stack Web Developer portfolio showcasing modern web applications built with React, TypeScript, Node.js, and more."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Fahmid | Full Stack Developer" />
      <meta
        name="twitter:description"
        content="Full Stack Web Developer portfolio showcasing modern web applications built with React, TypeScript, Node.js, and more."
      />
    </Helmet>
  );
}
