import React from 'react';
import "./App.css";
import ColourButtons from './Components/ColourButtons';
import LikeButton from './Components/LikeButton';
import Logo from './Components/Logo.jsx'
import NavComponent from './Components/NavComponent';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* Imported from My Static Page */}
                <header>
                    <Logo srcSmall="../img/gsree.png" srcLarge="../img/gokulsreekumar.png"/>
                    <ColourButtons />
                    <NavComponent />
                </header>

                <section className="intro" id="home">
                    <h1 className="section__title section__title--intro">
                        Hi, I am <strong>Gokul Sreekumar</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">
                        Goldman Sachs Summer Intern
                    </p>
                    <img
                        className="intro__img"
                        src="img/Gokul_Profile.jpg"
                        alt="me smiling"
                        style={{ maxWidth: 300, margin: 30 }}
                    />
                </section>
                <section className="my-services" id="services">
                    <h2 className="section__title section__title--services">
                        What I do
                    </h2>
                    <div className="services">
                        <div className="service">
                            <h3>Design + Development</h3>
                            <p>
                                Front-end static web designs using HTML and CSS
                                Responsive and Beautifully crafted Ui using
                                React Most-things-JS: Express.js, Node.js
                                Familiar with Databases like MongoDb and
                                DynamoDb Little Bit of Django or Flask in Python
                            </p>
                        </div>
                        <div className="service">
                            <h3>Competetive Programming</h3>
                            <p>
                                Coming up with efficient solutions using the
                                right Data Structure, primarily in C/C++ (hey
                                it's the fastest) and also finding many
                                alternative solutions. Love solving in websites
                                like Leetcode, AlgoExpert and similar ones (not
                                falling for any).
                            </p>
                        </div>
                        <div className="service">
                            <h3>Little bit of ML and Ai</h3>
                            <p>
                                As and when required, i do dwell a bit into
                                buliding out some ML models, Random Forest is my
                                favourite, but depending on data i explore
                                others as well. I have some experience with
                                Keras (hence Tensor Flow) to build up Neural
                                Networks.
                            </p>
                        </div>
                        <div className="service">
                            <h3>Mobile App Dev</h3>
                            <p>
                                Since i know react, i'm good with React Native
                                as well. I have some experience of working with
                                React Native + DynamoDB I would love to explore
                                the world of Angular!
                            </p>
                        </div>
                    </div>
                    <a href="#work" className="btn">
                        My Engagements / Interests
                    </a>
                </section>
                <section className="about-me" id="about">
                    <header>
                        <h2 className="section__title section__title--about">
                            Who I am
                        </h2>
                        <p className="section__subtitle section__subtitle--about">
                            a computer science student at Nitc
                        </p>
                    </header>
                    <div className="about-me__body">
                        <p>NITC - National Institute of Technology Calicut</p>
                        <p>
                            More than just a student my goal is to pursue a
                            career in a stimulating and challenging environment
                            that will provide me with opportunity to enhance my
                            knowledge, develop new skills and enabling me to
                            become a successful professional in the field of
                            Computer Science with sheer determination,
                            dedication, and hard work towards the prosperity of
                            the organization.
                        </p>
                        <p>
                            I have made myself get an internship at Goldman
                            Sachs and i now wish to progress and look for higher
                            oppurtunities by making taking it as a platform for
                            my professional development as well as working
                            towards the progress of the firm.
                        </p>
                        <h3>My Hobbies</h3>
                        <p>
                            To ease out my brain from the unmanagable stress
                            sometimes and also as pass-time activities, I love
                            to read books, generally i'm more into classics.
                        </p>
                        <p>
                            I'm a Youtube addict, with topics taht I'm
                            interested ranging from Latest in technology 📱 (of
                            course
                            <a href="https://www.youtube.com/user/marquesbrownlee>">
                                MKBHD
                            </a>
                            ,
                            <a href="https://www.youtube.com/channel/UCVYamHliCI9rw1tHR1xbkfw">
                                Dave2D
                            </a>
                            , Verge and much much more) to Cars 🏎️ (i love Henry
                            from
                            <a href="https://www.youtube.com/channel/UCwuDqQjo53xnxWKRVfw_41w">
                                Carefection
                            </a>
                            , Rory Reid from Autotrader, ofcourse Mat from
                            Carwow, Doug form Doug Demuro) to Influencers (yes
                            you
                            <a href="https://www.youtube.com/c/aliabdaal">
                                Ali Abdaal
                            </a>
                            this guy is just magnificent) to Politics 🗳️ (i like
                            how info packed Ben Shapiro show is...) to Travel ✈️
                            to Science 🔬 to News to Cricket and much much more.
                        </p>
                        <p>
                            I'm also in love with my Spotify playlist, oh how
                            sweet Mree's voice is 😍
                        </p>
                    </div>
                    <img
                        className="about-me__img"
                        src="img/gokul_21.jpg"
                        alt="me sitting"
                    />
                    <div className="about_me__btn">
                        <a
                            href="https://drive.google.com/file/d/1GOLt4R7tOdw0fmcBRKbLuAENCVyDxkR5/view?usp=sharing"
                            className="btn"
                        >
                            see my resume
                        </a>
                        
                    </div>
                </section>

                <section className="my-work" id="work">
                    <h2 className="section__title">My Work</h2>
                    <h3 style={{ color: "yellow" }}>coming soon</h3>
                    <p className="section__subtitle section__subtitle--work">
                        an array of articles i have written, jump right in and
                        we can have a chat on it :)
                    </p>

                    <div className="portfolio">
                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-01.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-02.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-03.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-04.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-05.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-06.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-07.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-08.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-09.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>

                        <a href="." className="portfolio__item">
                            <img
                                src="img/portfolio-10.jpg"
                                alt=""
                                className="portfolio__img"
                            />
                        </a>
                    </div>
                </section>

                <footer id="get-in-touch" className="footer">
                    <p>
                        <i className="fas fa-envelope"></i> :
                        <a
                            href="mailto:gokulsreekumar2@gmail.com"
                            className="footer__link"
                        >
                            gokulsreekumar2@gmail.com
                        </a>
                    </p>
                    <p>
                        <i className="fab fa-whatsapp"></i>: +91-85470-58985
                    </p>
                    <ul className="social-list">
                        <li className="social-list__item">
                            <a
                                className="social-list__link"
                                href="https://www.linkedin.com/in/gokul-sreekumar-63581b174/"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a
                                className="social-list__link"
                                href="https://github.com/gokulsreekumar"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="social-list__item">
                            <a
                                className="social-list__link"
                                href="https://www.instagram.com/_gokul.sreekumar_/"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <LikeButton numberOfLikes={99} />
                </footer>

                {/* End of import from My Static Page */}
            </div>
        );
    }
}

export default App;
