import React from 'react';

import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import { selectDirectorySections } from "../../redux/item-directory/directory.selector";

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


const Directory = ({ sections }) => (

            <div className="directory-menu">
            
                {sections.map( ({ id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}></MenuItem>
                ))}
            </div>

)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 

export default connect(mapStateToProps)(Directory);