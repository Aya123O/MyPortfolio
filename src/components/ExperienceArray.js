import { useState, useEffect } from "react";

const parseExperience = (mdContent) => {
  const experience = [];
  const lines = mdContent.split("\n");

  // Parsing markdown content (you can keep this or modify as needed)
  // This part will handle parsing from markdown if you are using it.

  // Manually add experiences:
  experience.push({
  
    company: "Nass Academy",
    position: "Instructor",
    duration: "Jul 2023 - Dec 2023",
    badges: [{ name: "Instructor", colorScheme: "blue" }],
    listItems: [
      "Teaching courses on web development.",
      "Mentoring students on projects.",
      "Conducting live coding sessions.",
    ],
    tags: "Teaching",
  });

  experience.push({
   
    company: "ITI (Information Technology Institute)",
    position: "Internship Trainee",
    duration:  "oct 2024 - Present",
    badges: [{ name: "Intern", colorScheme: "green" }],
    listItems: [
      "Gained hands-on experience with a wide range of frontend technologies, including React, JavaScript, and CSS.",
"Explored backend technologies alongside frontend development, broadening my understanding of full-stack development.",
"Collaborated with senior developers on diverse projects, learning both frontend and backend development practices."

    ],
    tags: "Internship",
  });

  experience.push({
   
    company: "NTI (National Training Institute)",
    position: "Trainee",
    duration: "Apr 2023 - Jun 2023",
    badges: [{ name: "Trainee", colorScheme: "purple" }],
    listItems: [
      "Completed coursework on frontend development and design principles.",
      "Participated in group projects and coding challenges.",
      "Learned advanced JavaScript and CSS techniques.",
    ],
    tags: "Training",
  });

  return experience;
};

const ExperienceArray = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/content/Experience.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setExperience(parseExperience(mdContent)); // Combine manual and fetched experiences
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return experience;
};

export default ExperienceArray;
