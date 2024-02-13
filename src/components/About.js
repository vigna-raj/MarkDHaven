import React from 'react'

const About = () => {
    return (
        <>
            <div className="container py-4">
                <h1 className="display-4 text-center mb-4">Markdown Cheat Sheet</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Basic Syntax</h2>
                        <ul className="list-group">
                            <li className="list-group-item">**Bold**</li>
                            <li className="list-group-item">*Italic*</li>
                            <li className="list-group-item">[Link Text](https://example.com)</li>
                            <li className="list-group-item"># Heading 1</li>
                            <li className="list-group-item">## Heading 2</li>
                            <li className="list-group-item">- List item</li>
                            <li className="list-group-item">1. Ordered list item</li>
                            <li className="list-group-item">`Inline code`</li>
                            <li className="list-group-item">```Code block```</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2>Extended Syntax</h2>
                        <ul className="list-group">
                            <li className="list-group-item">~~Strikethrough~~</li>
                            <li className="list-group-item">| Column 1 | Column 2 |</li>
                            <li className="list-group-item">| --- | --- |</li>
                            <li className="list-group-item">| Row 1, Cell 1 | Row 1, Cell 2 |</li>
                            <li className="list-group-item">| Row 2, Cell 1 | Row 2, Cell 2 |</li>
                            <li className="list-group-item">![Image Alt Text](https://example.com/image.jpg)</li>
                            <li className="list-group-item">&lt;!-- Comment --&gt;</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About
