import React from 'react'

const SectionTitle = ({title, subtitle, SectionTitleClass = "", titleClass=""}) => {
  return (
    <div className={`section-title-block ${SectionTitleClass}`}>
        <h6 className="section-sub-title position-relative d-inline-block text-uppercase">{subtitle}</h6>
        <h2 className={`section-title split-text right ${titleClass}`}>{title}</h2>
    </div>
  )
}

export default SectionTitle


