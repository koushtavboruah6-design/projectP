const config = {
  title: "Koushtav Boruah | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Koushtav, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Koushtav, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Koushtav",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Koushtav boruah",
  email: "koushtavboruah6@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "koushtavboruah6-design",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/koushtav-boruah-139929371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "",
    facebook: "",
    github: "https://github.com/koushtavboruah6-design",
  },
};
export { config };
