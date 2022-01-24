import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const baseURL = process.env.REACT_APP_IS_PRODUCTION ? process.env.REACT_APP_HEROKU_URL : 'http://localhost:8080'

const App = () => {

  const [ projects, setProjects ] = useState([])
  const [ skills, setSkills ] = useState([])


  async function getProjects(){
    await axios.get(baseURL + '/api/projects')
      .then(res => {
        if(res.data?.projects) {
          setProjects(res.data.projects)
        }
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  async function getSkills(){
    await axios.get(baseURL + '/api/skills')
      .then(res => {
        if(res.data?.skills) {
          setSkills(res.data.skills)
        }
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getHello(){
    if(projects.length > 0) {
      projects.forEach(project => {
        console.log(project.url)
        axios.get(`${project.url}hello`)
        .then(res => {
          console.log(`${project.title} is awake`)
        })
        .catch(err => console.log(err.response.data.errMsg))
      })
    }
  }

  useEffect(() => {
    getProjects()
    getSkills()
  }, [])

  useEffect(() => {
    if(projects.length > 0) {
      getHello()
    }
  }, [projects])

  return (
    <>
    <div className="app-background"/>
    <div className='wrapper'>
      <Header />
      <Main projects={projects} skills={skills} />
      <Footer />
    </div>
    </>
  )
}

export default App


