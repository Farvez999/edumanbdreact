import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://edumanbd.com/wp-content/uploads/2022/12/edu-home-banner-december-eng.png" className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Largest Edtech Platform
                        in Bangladesh</h1>
                    <p className="py-6">Eduman is a SaaS-based online learning & school management system that simplifies the learning process and makes effective collaboration with institute, teacher, student, and parents</p>
                    <button className="btn btn-primary mr-2">Eduman</button>
                    <button className="btn btn-primary">Eduman Pro</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;