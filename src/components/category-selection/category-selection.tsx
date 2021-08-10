import React from 'react'
import './category-selection.scss'
import '../../styles/shared.scss'
import { Categories } from '../../general/enums'

const Category: React.FC<{ category: string }> = props => {
    const { category } = props
    return (
        <div className="category-item">
            <span className="dot" />
            <span className="item-text">{Categories[category]}</span>
            <span>(56)</span>
        </div>
    )
}

const CategorySelection: React.FC<{}> = () => (
    <div className="category-container">
        {Object.keys(Categories).map((category: string) => (
            <Category key={category} category={category} />
        ))}
    </div>
)

export default CategorySelection
