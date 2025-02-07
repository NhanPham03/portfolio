import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement, object>((_props, ref) => {
  return (
    <div ref={ref} className="projects">
      <h1>&lt;projects&gt;</h1>

      <h1>&lt;/projects&gt;</h1>
    </div>
  );
});

export default Projects;