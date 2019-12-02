import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ children, title }) => (
    <div className="">
        <h3 className="categories_title">{ title }</h3>
        {children}
    </div>
)

export default Categories