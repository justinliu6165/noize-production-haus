import React from 'react'
import { useSelector } from 'react-redux'
import { selectCaseStudies } from '../../features/api/CaseStudiesSlice';
import Section from '../../features/htmlElements/Sections';
import Heading from '../../features/htmlElements/Heading';
import Button from '../../features/htmlElements/Button';
import styles from './CaseStudies.module.css';
import { Link } from 'react-router-dom';
import InView from '../../features/inView/InView';

export default function CaseStudies() {
  const cases = useSelector(selectCaseStudies);

  return (
    <div className='m-16'>
      <Section>
        <Heading text={"Case studies"} size="h1"></Heading>
        <p>
          NOIZE is Lorem ipsum dolor sit amet, consectetur <a href=''>adipiscing elit</a>. Ut a commodo leo. Nulla bibendum enim ligula, quis dictum risus accumsan iaculis. Vivamus volutpat ornare blandit. Mauris lacinia turpis eu urna accumsan auctor. Maecenas hendrerit felis et justo vestibulum sollicitudin. 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a commodo leo. Nulla bibendum enim ligula, quis dictum risus accumsan iaculis. Vivamus volutpat ornare blandit. Mauris lacinia turpis eu urna accumsan auctor. Maecenas hendrerit felis et justo vestibulum sollicitudin. 
        </p>
      </Section>
      <Section>
        <ul className={styles['grid']}>
          <li className={styles['grid__1']}></li>
          {
            cases.map((project) => (
              <li className={`${styles['grid__item']}`} key={project.id}>
                <InView id={project.id} classes="h-full">
                  <Link to={`/case-studies/${project.slug}`}>
                    <div className={styles["project"]}>
                      <img src={project.image.src} alt={project.image.alt}/>
                      <h3 className={`text-16px ${styles["project-title"]}`}>{project.title}</h3>
                    </div>
                  </Link>
                </InView>
              </li>
            ))
          }
        </ul>
        <div className='pt-32'>
          <Button to="/case-studies" text="See all cases"></Button>
        </div>
      </Section>
    </div>
  )
}
