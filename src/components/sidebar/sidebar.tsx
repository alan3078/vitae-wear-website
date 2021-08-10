import React from 'react'
import './sidebar.scss'
import '../../styles/shared.scss'

import CustomDropdown from '../custom-dropdown/custom-dropdown'
import CategorySelection from '../category-selection/category-selection'
import { SortingTypes } from '../../general/enums'

const Sidebar: React.FC<{}> = () => (
    <div className="sidebar-container">
        <CustomDropdown values={SortingTypes} />
        <div className="vline-text">
            <div className="vl" />
            <span className="text">商品分類</span>
        </div>
        <CategorySelection />
    </div>
)

export default Sidebar
