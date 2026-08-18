"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/reveal";
import ProjectCard from "@/components/ui/ProjectsCard";

const projects = [
  {
    image: "/images/projects/abb/2.JPG",
    title: "ABB Office Renovation",
    client: "ABB Egypt",
    category: "Corporate Office",
    location: "Cairo",
    year: "2025",
  },
  {
    image: "/images/projects/cafe-supreme/1.jpg",
    title: "Cafe Supreme",
    client: "Cafe Supreme",
    category: "Hospitality",
    location: "New Cairo",
    year: "2024",
  },
  {
    image: "/images/projects/bccis/1.jpg",
    title: "BCCIS School Cafeteria",
    client: "BCCIS",
    category: "Education",
    location: "Cairo",
    year: "2024",
  },
  {
    image: "/images/projects/etihad/1.jpg",
    title: "Etihad Airways Sales Office",
    client: "Etihad Airways",
    category: "Corporate Office",
    location: "Khartoum",
    year: "2023",
  },
  {
    image: "/images/projects/suzuki/1.jpg",
    title: "Suzuki Head Office",
    client: "Suzuki",
    category: "Corporate Office",
    location: "Cairo",
    year: "2023",
  },
];

export default function Projects() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="bg-[#101214] py-32 text-white"
    >
      <div className="container-custom">

        <div className="mx-auto max-w-[1280px]">

          {/* SECTION HEADER */}

          <Reveal>

            <SectionTitle
              eyebrow="OUR PROJECTS"
              title="Selected Projects That Reflect Our Quality."
              subtitle="A selection of our commercial, corporate and hospitality projects delivered with exceptional quality and attention to detail."
              align="center"
              theme="dark"
            />

          </Reveal>


          {/* PROJECTS */}

          <div className="mt-20">

            {/* DESKTOP */}

            <div className="hidden gap-6 xl:grid xl:grid-cols-[1.05fr_1fr]">

              {/* FEATURED PROJECT */}

              <Reveal>

                <ProjectCard
                  {...featuredProject}
                  featured
                />

              </Reveal>


              {/* OTHER PROJECTS */}

              <div className="grid grid-cols-2 gap-6">

                {otherProjects.map((project, index) => (

                  <Reveal
                    key={project.title}
                    delay={(index + 1) * 0.1}
                  >

                    <ProjectCard
                      {...project}
                    />

                  </Reveal>

                ))}

              </div>

            </div>


            {/* TABLET / MOBILE */}

            <div className="grid gap-6 md:grid-cols-2 xl:hidden">

              {projects.map((project, index) => (

                <Reveal
                  key={project.title}
                  delay={index * 0.1}
                >

                  <ProjectCard
                    {...project}
                    featured={index === 0}
                  />

                </Reveal>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}