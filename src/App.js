import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  const [modals, setModals] = useState({
    aboutMeModal: false,
    skillsModal: false,
    projectsModal: false
  })

  function stopPropagation(e) {
    e.stopPropagation()
  }

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
      aboutMeModal: !modals.aboutMeModal,
      skillsModal: false,
      projectsModal: false
    })
  }

  function toggleSkills(e) {
    e.preventDefault()
    setModals({
      aboutMeModal: false,
      skillsModal: !modals.skillsModal,
      projectsModal: false
    })
  }

  function toggleProjects(e) {
    e.preventDefault()
    setModals({
      aboutMeModal: false,
      skillsModal: false,
      projectsModal: !modals.projectsModal
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          {!modals.projectsModal && !modals.skillsModal && !modals.aboutMeModal ? <Main /> : null}
          {modals.projectsModal ? <Projects toggleMain={toggleMain} stopPropagation={stopPropagation} /> : null}
          {modals.skillsModal ? <Skills toggleMain={toggleMain} stopPropagation={stopPropagation} /> : null}
          {modals.aboutMeModal ? <AboutMe toggleMain={toggleMain} stopPropagation={stopPropagation} /> : null}
        </div>
        {!modals.projectsModal && !modals.skillsModal && !modals.aboutMeModal ?
          <div className="button-cont">
            <div onClick={toggleAbout} name='aboutMeModal' className='button-left'>About Me</div>
            <div onClick={toggleSkills} name='skillsModal' className='button-mid'>Skills</div>
            <div onClick={toggleProjects} name='projectsModal' className='button-right'>Projects</div>
          </div>
          : null}


      </header>
    </div>
  );
}

export default App;
