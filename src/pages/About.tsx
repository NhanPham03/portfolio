import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement, object>((_props, ref) => {
  return (
    <div ref={ref} className="about">
      <h1>&lt;about&gt;</h1>
      <p>Hi, I'm Nhân. Nice to meet you here.</p>
      <p>I'm a Software Engineer from Vietnam.</p>
      <p>I am very eager to learn new things, and to put those new skills to use.</p>
      <br/>

      <h2>&gt; webdev</h2>
      <p>I'm an aspiring Full-stack Web Developer.</p>
      <p>My love for Front-end Web Development, along with UI/UX design pushed me to learn how to create simple web designs using HTML, CSS and JavaScript.</p>
      <p>As I got more comfortable with the basics, I moved onto creating more complex and responsive web designs using React and Node.js.</p>
      <p>Eventually, I learned how to create a back-end to support such webpages, using Express.js or fullstack frameworks like Next.js.</p>
      <br/>

      <h2>&gt; gamedev</h2>
      <p>I'm also a self-taught game developer.</p>
      <p>Despite not having any experience with game development, I'm actively tinkering with the Godot game engine and researching game development techniques.</p>
      <br/>

      <h1>&lt;/about&gt;</h1>
    </div>
  );
});

export default About;