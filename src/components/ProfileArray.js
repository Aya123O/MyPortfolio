import { useState, useEffect } from "react";

// Function to parse Markdown content into a profile object
const parseProfile = (mdContent) => {
  const profile = {
    siteName: "",
    headerName: "",
    headerRole: "",
    headerDesc: "",
    about: "",
    contact: "",
    linkedin: "https://www.linkedin.com/in/ayaosamasayed",
    github: "https://github.com/Aya123O",
    email: "ayaosama123572@gmail.com",
    logo: "",
  };

  const lines = mdContent.split("\n");

  // Loop through each line to parse the profile sections
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const section = line.substr(3).trim();

      switch (section) {
        case "Header":
          profile.headerName = lines[++i].substr(2).trim();
          profile.headerRole = lines[++i].substr(2).trim();
          profile.headerDesc = lines[++i].substr(2).trim();
          break;
        case "About":
          profile.about = lines[++i].trim();
          break;
        case "Contact":
          profile.contact = lines[++i].trim();
          const contactLinks = ["LinkedIn", "GitHub", "Email"];
          for (const link of contactLinks) {
            const linkLine = lines[++i].substr(2).trim();
            if (linkLine.startsWith(link)) {
              profile[link.toLowerCase()] = linkLine.split(": ")[1].trim();
            }
          }
          break;
        case "Logo":
          profile.logo = lines[++i].substr(2).trim();
          break;
        default:
          // do nothing for unrecognized sections
          break;
      }
    }
  }

  return profile;
};

// ProfileArray component to manage the profile state
const ProfileArray = () => {
  const [profile, setProfile] = useState({
    siteName: "",
    headerName: "",
    headerRole: "",
    headerDesc: "",
    about: "",
    contact: "",
    linkedin: "",
    github: "",
    email: "",
    logo: "",
  });

  useEffect(() => {
    // Fetch Profile.md content
    fetch("/content/Profile.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setProfile(parseProfile(mdContent)); // Parse and set profile
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return profile;
};

export default ProfileArray;
