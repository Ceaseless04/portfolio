"use client"

import { useState, useEffect } from "react";
import { Project } from "../../lib/types";
import Header from "../components/Header";

export default function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setProjects(data.projects))
			.catch((err) => console.error("Error fetching projects:", err));
	}, []);


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-8 text-[var(--teal-green)] dark:text-[var(--seafoam-green)]">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
			  <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-[var(--royal-blue)] dark:text-[var(--seafoam-green)]">
                  {project.name}
                </h2>
                <p className="text-[var(--teal)] dark:text-[var(--teal)] mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--seafoam-green)] dark:text-[var(--teal)] hover:text-[var(--teal)] dark:hover:text-[var(--seafoam-green)] font-semibold"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[var(--royal-blue)] dark:bg-[var(--teal-green)] text-white py-4">
        <div className="container text-center">&copy; 2023 Your Name. All rights reserved.</div>
      </footer>
    </div>
  );
}

