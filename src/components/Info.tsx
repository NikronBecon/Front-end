import React from "react";

class Info extends React.Component {
    render() {
        return (
            <div>
                <div className="summary">
                    <img src="/img/Photo.jpg" alt="Me"/>
                    <p>I am fond of maths and informatics. Adore exploring something new in every sphere. I have results in the Olympiads and the experience of working in IT company and taking freelance. Additionally, I am a team lead in AI project. In spite of that I am keen on cryptocurrency and trading in the stock market. Now I am trying to gain as much experience as possible in the field of artificial intelligence and backend to make my own startup. </p>
                </div>
                <header id="second">
                    <h2><u>Experience</u></h2>
                </header>
                <div className="experience">
                    <div className="project1">
                        <h3>Azimov lab</h3>
                        <p><strong>Team lead</strong></p>
                        <p>February 2024 - Present</p>
                        <p>Leading a subteam within Project AzimovLab to develop a multiagent system utilizing AI for evaluating student work. Currently, managing the construction of a system focused on accurate evaluation of mathematical tasks, leveraging knowledge in AI, LLM applications, and LangChain framework.</p>
                    </div>
                    <div className="project2">
                        <h3>Systema gorod</h3>
                        <p><strong>Software Developer</strong></p>
                        <p>June 2022 - July 2022</p>
                        <ul>
                            <li>Developed online sales register API.</li>
                            <li>Updated and tested drivers for new model of cash register АТОЛ.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info