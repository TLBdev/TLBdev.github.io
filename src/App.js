import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  const [modals, setModals] = useState({
    aboutMeModal: false,
    skillsModal: true,
    projectsModal: false
  })

  function toggleMain(e) {
    e.preventDefault()
    setModals({
      aboutMeModal: false,
      skillsModal: false,
      projectsModal: false
    })
  }

  function toggleAbout(e) {
    e.preventDefault()
    setModals({
      aboutMeModal: true,
      skillsModal: false,
      projectsModal: false
    })
  }

  function toggleSkills(e) {
    e.preventDefault()
    setModals({
      aboutMeModal: false,
      skillsModal: true,
      projectsModal: false
    })
  }

  function toggleProjects(e) {
    e.preventDefault()
    setModals({
      aboutMeModal: false,
      skillsModal: false,
      projectsModal: true
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <Main />

        </div>
        <div className="button-cont">
          <div
            onClick={toggleMain}
            name='Main'
            className={modals && !modals.aboutMeModal && !modals.skillsModal && !modals.projectsModal ?
              'button-left-selected'
              : 'button-left'}>Main</div>
          <div onClick={toggleAbout} name='aboutMeModal' className={modals && modals.aboutMeModal ? 'button-mid-selected' : 'button-mid'}>About Me</div>
          <div onClick={toggleSkills} name='skillsModal' className={modals && modals.skillsModal ? 'button-mid-selected' : 'button-mid'}>Skills</div>
          <div onClick={toggleProjects} name='projectsModal' className={modals && modals.projectsModal ? 'button-right-selected' : 'button-right'}>Projects</div>
        </div>
      </header>
    </div>
  );
}

export default App;
