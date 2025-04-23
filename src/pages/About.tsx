import {
  BriefcaseIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import AboutGallery from "../components/AboutGallery";

const timeline = [
  {
    type: "work",
    role: "Software Engineer I",
    company: "EverQuote",
    date: "2024 - Present",
    description: `
Frontend-focused full-stack role using React, Next.js, TypeScript, Tailwind and Go. 
Built CRO experiments, A/B tests, reusable UI components, and collaborated with global teams. 
Involved in code reviews, component library design, and Agile ceremonies.
    `,
    icon: <BriefcaseIcon className="h-5 w-5 text-white" />,
  },
  {
    type: "work",
    role: "Software Engineer Intern",
    company: "EverQuote",
    date: "2023 - 2024",
    description: `
Worked through company’s transition to Serverless + AWS, contributed to full-stack features and learned advanced cloud patterns.
    `,
    icon: <BriefcaseIcon className="h-5 w-5 text-white" />,
  },
  {
    type: "work",
    role: "Software Engineer Intern",
    company: "Sensata Technologies",
    date: "2022",
    description: `
Worked in Agile ceremonies, automated hardware testing workflows, wired PCBs, and wrote internal automation scripts.
    `,
    icon: <BriefcaseIcon className="h-5 w-5 text-white" />,
  },
  {
    type: "education",
    degree: "BSc Computer Science (Year in Industry)",
    institution: "Queen's University Belfast",
    date: "2020 - 2024",
    description: `
Graduated with academic distinction. 
President of QCS, organized workshops and charity events (£7K+ raised), and led student-industry engagement.
    `,
    icon: <AcademicCapIcon className="h-5 w-5 text-white" />,
  },
  {
    type: "education",
    degree: "A-Levels: A*AA (Maths, CS, R.S.)",
    institution: "Secondary School",
    date: "2018 - 2020",
    description: `
Top of class in CS & R.S. — developed strong analytical and problem-solving foundation.
    `,
    icon: <AcademicCapIcon className="h-5 w-5 text-white" />,
  },
];

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="px-6 py-16 text-white max-w-4xl mx-auto bg-gray-900">
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-center mb-6 text-teal-400">About Me</h2>
      <p className="text-md text-center mb-10 max-w-2xl mx-auto text-slate-300">
        Software engineer. Frontend specialist. Youth leader. 
        I build web apps, lead teams, and love clean, reusable code.
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 justify-center text-sm mb-14">
        {[
          "React", "Next.js", "TypeScript", "GoLang", "Tailwind", "AWS",
          "Serverless", "Redux", "Zustand", "SQL", "DynamoDB", "Playwright", "CI/CD",
        ].map((tech) => (
          <span
            key={tech}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-600 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      <AboutGallery />

      {/* Timeline */}
      <div className="relative border-l-4 border-teal-400 pl-8 mt-12">
        {timeline.map((item, index) => (
          <div key={index} className="mb-16 relative group">
            {/* Icon Dot */}
            <span className="absolute left-[-13px] top-1.5 z-10 bg-teal-500 p-2 rounded-full">
              {item.icon}
            </span>

            {/* Desktop view: always show full content */}
            <div className="hidden md:block bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-sm text-slate-400 font-medium mb-1">{item.date}</p>
              {item.type === "work" ? (
                <>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-slate-300 mb-2">{item.company}</p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="text-slate-300 mb-2">{item.institution}</p>
                </>
              )}
              <p className="text-slate-400 mt-2 text-sm whitespace-pre-line">{item.description}</p>
            </div>

            {/* Mobile view: expandable */}
            <button
              onClick={() => toggleExpand(index)}
              className="block md:hidden w-full text-left bg-gray-800 rounded-xl p-6 shadow-lg focus:outline-none focus:ring focus:ring-teal-500 transition-all hover:shadow-xl"
            >
              <p className="text-sm text-slate-400 font-medium mb-1">{item.date}</p>
              {item.type === "work" ? (
                <>
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="text-slate-300 mb-2">{item.company}</p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                  <p className="text-slate-300 mb-2">{item.institution}</p>
                </>
              )}
              {expandedIndex === index && (
                <p className="text-slate-400 mt-2 text-sm whitespace-pre-line">{item.description}</p>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
