const express = require('express')
const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE)

const projectsRouter = express.Router()

projectsRouter.get('/', async (req, res, next) => {
  try {
    await base('projects').select({
      view: "live view"
    }).eachPage(function page(records, fetchNextPage) {
      try {
        console.log(records)
        const projects = records.map(record => {
          const skills = record?.fields?.skill_ids?.map((skill, i) => {
            return {
              skill_id: skill,
              skill_name: record.fields.skill_names[i],
              skill_category: record.fields.skill_categories[i],
              skill_icon: record.fields.skill_icons[i].thumbnails.full.url
            }
          }) || []

          return {
            id: record.id,
            title: record.fields.title,
            skills: skills,
            desktop_img: record.fields.desktop_img?.[0].thumbnails.full.url,
            mobile_img: record.fields.mobile_img?.[0].thumbnails.full.url,
            description: record.fields.description,
            url: record.fields.url,
            repo: record.fields.repo,
            contributor: record.fields.contributor,
            in_progress: record.fields.in_progress,
            display_date: records.fields?.display_date || ''
          }
        })

        res.send({
          success: true,
          projects: projects
        })
        next()
      } catch (err) {
        if (err) {
          console.error(err)
          return
        }  
      }
      fetchNextPage()
    }, function done(err) {
      if (err) {
        console.error(err)
        return
      }
    })
  } catch (err) {
    if (err) {
      console.error(err)
    }
    res.send({
      success: false
    })
    next()
  }
})

module.exports = projectsRouter