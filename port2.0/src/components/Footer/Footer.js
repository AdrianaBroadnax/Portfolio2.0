import React from 'react';
import './Footer.css'


const footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/* column1 */}
                    <div className='col'>
                        <ul className='github'>
                            <li>Github</li>

                        </ul>

                    </div>
                    {/* column2 */}
                    <div className='col2'>
                        <ul className='linkedIn'>
                            <li>LinkedIn</li>

                        </ul>

                    </div>
                    {/* column3 */}
                    <div className='col3'>
                        <ul className='contactMe'>
                            <li>Contact Me</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
    )
}


export default footer;