import { useEffect } from "react";

const SEO = ({ title, description, url, image = "/images/logo.png" }) => {
  useEffect(() => {
    document.title = title || "ATMANA";

    const metaTags = [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      if (content) {
        let element = document.querySelector(
          `meta[${name ? "name" : "property"}="${name || property}"]`
        );
        if (!element) {
          element = document.createElement("meta");
          if (name) element.setAttribute("name", name);
          if (property) element.setAttribute("property", property);
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      }
    });
  }, [title, description, image, url]);

  return null;
};

export default SEO;
