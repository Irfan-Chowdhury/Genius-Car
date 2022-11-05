import React from 'react';
// import person from '../../../assets/images/banner/1.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className='container card'>
            <div className='card-body'>
                <div className="d-flex justify-content-start p-5">
                        <div>
                            <img width={500} src={person} className="img-fluid" alt="..." />
                        </div>
                        <div className='ms-5'>
                            <h6 className='text-danger'>About us</h6>
                            <h3><b> We are qualified <br />
                            & of experience <br />
                            in this field</b> </h3> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, <br /> inventore laudantium ducimus fugiat sunt eum, blanditiis expedita <br /> neque dolore repellat et quia quasi perspiciatis nihil fugit aut! <br /></p>
                            <button className='btn btn-primary'>GET MORE INFO</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default About;