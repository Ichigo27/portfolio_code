import React from "react";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "./transition";

const About = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <section className="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-10 mx-auto my-auto">
                            <h1 className="display-3 about_header">About Me</h1>
                            <br />
                            <p className="about_text">
                                I describe myself as a passionate person who
                                loves everything about computers. Exploring new
                                programming languages and solving real life
                                problems with technology brings excitement in my
                                mundane life. In my spare time, I learned web
                                development and app development and did
                                internships with companies like Creative
                                Finserve and Art of Living to test my skills
                                and know my limits. Working in a team for Smart
                                India Hackathon 2020 Grand Finale made me
                                realize that it is a lot of fun to work together
                                especially when you're working on code. I love
                                to play open-world games which has immersive
                                gameplay and really enjoyed riding my bicycle to
                                get some fresh air and some sunshine. Now I am
                                learning ML and AI which I want to use in my
                                future projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
