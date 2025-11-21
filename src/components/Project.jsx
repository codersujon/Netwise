import React from 'react'
import SectionTitle from './SectionTitle'
import { projectsData } from '../data/projects'


const Project = () => {
    const leftColumns = projectsData.filter((_, index)=> index % 2 === 0);
    const rightColumns = projectsData.filter((_, index)=> index % 2 !== 0);

    return (
        <>
            <section className="ep-project-section pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <SectionTitle 
                                title="Tech Solutions for a Connected World"  
                                subtitle="latest projects" 
                                SectionTitleClass="text-center"
                                titleClass ="split-text right"
                            />
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">

                            {
                                leftColumns.map((project)=>(
                                    <div key={project.id} className="project-item position-relative">
                                        <div className="img reveal zoom-out overflow-hidden rounded-20">
                                            <a href="project-details.html" className="d-block w-100">
                                                <img src={project.image} alt="project-img"
                                                    className="img-fluid w-100" />
                                            </a>
                                        </div>
                                        <div className="overlay position-absolute">
                                            <div className="text">
                                                <p>{project.category}</p>
                                                <h4 className="title">
                                                    <a href="project-details.html">
                                                        {project.title}
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className="col-lg-6">

                            {
                                rightColumns.map((project)=>(
                                    <div key={project.id} className="project-item position-relative">
                                        <div className="img reveal zoom-out overflow-hidden rounded-20">
                                            <a href="project-details.html" className="d-block w-100">
                                                <img src={project.image} alt="project-img"
                                                    className="img-fluid w-100" />
                                            </a>
                                        </div>
                                        <div className="overlay position-absolute">
                                            <div className="text">
                                                <p>{project.category}</p>
                                                <h4 className="title">
                                                    <a href="project-details.html">
                                                        {project.title}
                                                    </a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                          
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project