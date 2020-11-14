import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className="container">
            <h2>CSS Skills Bar UI Design</h2>
            <div className="skills">
                <span className="name">HTML</span>
                <div className="percent">
                    <div className="progress" style={{width: '85%'}}></div>
                </div>
                <span className="value">95%</span>
            </div>
            <div className="skills">
                <span className="name">CSS</span>
                <div className="percent">
                    <div className="progress" style={{width: '75%'}}></div>
                </div>
                <span className="value">75%</span>
            </div>
            <div className="skills">
                <span className="name">JavaScript</span>
                <div className="percent">
                    <div className="progress" style={{width: '72%'}}></div>
                </div>
                <span className="value">72%</span>
            </div>
            <div className="skills">
                <span className="name">Reactjs</span>
                <div className="percent">
                    <div className="progress" style={{width: '70%'}}></div>
                </div>
                <span className="value">70%</span>
            </div>
            <div className="skills">
                <span className="name">ReactNative</span>
                <div className="percent">
                    <div className="progress" style={{width: '70%'}}></div>
                </div>
                <span className="value">70%</span>
            </div>
        </div>
    )
}

export default Skills
