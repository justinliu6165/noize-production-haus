import React from 'react'
import { useSelector } from 'react-redux'
import { useParams} from 'react-router-dom';
import Section from '../../features/htmlElements/Sections';
import Heading from '../../features/htmlElements/Heading';
import { createSelector } from 'reselect';
import styles from './SingleCaseStudies.module.css';
import Button from '../../features/htmlElements/Button';
import InView from '../../features/inView/InView';

const projects = state => state 
const projectID = (state, id) => id;

const selectCaseStudy = createSelector([projects, projectID], (state, id) => {
  const { caseStudies } = state.cases;
  return caseStudies.find(c => c.slug === id);
})

export default function SingleCaseStudies() {
  const { id } = useParams();
  const project = useSelector(state => selectCaseStudy(state,id));

  return (
    <div className='m-16'>
      {
        project ? (
         <Section>
            <Heading text={project.title} size="h1"></Heading>
            <article className='space-y-32 md:space-y-40'>
              <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
              <ul>
                {
                  Object.keys(project.metaInfo).map(role => {
                    let info = project.metaInfo[role];
                    let cRole = role[0].toUpperCase() + role.substring(1)
                    return <li className="grid grid-cols-2 sm:grid-cols-6 my-16" key={role}>
                      <span className="col-span-1 sm:col-span-1">{cRole}</span>
                      <span className="col-span-1 sm:col-span-5">{info.name}</span>
                    </li>
                  })
                }
              </ul>
              <div className={styles['video-player']}>
                <iframe title="vimeo-player" src={project.videoEmbed} width="100%" frameBorder={0} allowFullScreen></iframe>
              </div>
            </article>
            <div className='pt-32'>
              <Button to="/case-studies" text="See all cases"></Button>
            </div>
        </Section>) : 
        <Section>
          <Heading text={"No project found"} size="h1"></Heading>
        </Section>
      }
    </div>
  )
}
