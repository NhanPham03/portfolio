import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement, object>((_props, ref) => {
  return (
    <div ref={ref} className="contact">
      <h1>&lt;contact&gt;</h1>

      <h1>&lt;/contact&gt;</h1>
    </div>
  );
});

export default Contact;