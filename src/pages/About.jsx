import Button from "../components/Button";

const About = () => {
  return (
    <>
      <div className="h-[90vh] w-screen relative">
        <img
          src="https://images.unsplash.com/photo-1667599397813-35121d7abb05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <Button text={"My Resume"} />
      </div>
      <h1
        className="py-20 text-4xl font-light px-[10%]"
        style={{
          lineHeight: 1.3,
        }}
      >
        Hey! I’m Mohammad Emam, a MERN stack developer from Bangladesh with
        expertise in <span className="underline">React.js</span>,{" "}
        <span className="underline">Node.js</span>,{" "}
        <span className="underline">Express.js</span>, and{" "}
        <span className="underline">MongoDB</span>. I build robust, scalable,
        and user-friendly web applications, focusing on backend development,
        RESTful APIs, and secure, high-performance solutions. Let’s connect and
        create something awesome!
      </h1>
    </>
  );
};
export default About;
