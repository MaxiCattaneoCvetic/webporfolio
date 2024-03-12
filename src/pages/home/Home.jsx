import { useEffect } from "react";
import Form from "../../components/form/Form.jsx";
import NavBar from "../../components/navBar/NavBar";
import Presentation from "../../components/presentation/Presentation.jsx";
import Projects from "../../components/projects/Projects.jsx";
import Technologies from "../../components/technologies/Technologies.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ArrowUp from "../../components/ArrowUp/ArrowUp.jsx";

export default function Home() {
  useEffect(() => {
    console.log(
      "Hello developers 😎😎😎. Let's work together and create amazing things! 🚀🚀🚀🚀 Let your creativity flow! 🎨🌟"
    );
  }, []);

  return (
    <>
      <section>
        <NavBar />
        <ArrowUp/>
        <Presentation />
        <Projects />
        <Technologies />
        <Form />
        <Footer/>
      </section>
    </>
  );
}
