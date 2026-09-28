import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Projects I've worked on." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Koniture"
          description="Eco friendly apparels with a mix of healthy food options mobile application."
          tech="Kotlin"
          link="https://github.com/andrebernadettevalle"
        />
        <ProjectCard
          year="2025"
          title="Pawcalypse Adventure"
          description="First game development project we created."
          tech="Java"
          link="https://github.com/andrebernadettevalle"
        />
        <ProjectCard
          year="2025"
          title="Hearts for Change"
          description="A website that allows you to donate to the less fortunate globally."
          tech="JavaScript · HTML · CSS"
          link="https://github.com/andrebernadettevalle"
        />
        <ProjectCard
          year="2025"
          title="Kintsugi"
          description="A fine dining cafe application prototype."
          tech="HTML · Bootstrap"
          link="https://github.com/andrebernadettevalle"
        />
      </div>
    </section>
  )
}