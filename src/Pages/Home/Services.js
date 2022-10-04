import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id:1,
            img:fluoride,
            title:'Fluoride Treatment',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolore.',
            
        },
        {
            _id:2,
            img:cavity,
            title:'Cavity Filling',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolore.',
            
        },
        {
            _id:3,
            img:whitening,
            title:'Teeth Whitening',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolore.',
            
        },
    ]
    return (
        <div className='mt-12'>  
            <h3 className='text-primary text-center text-2xl'>Our Services</h3>
            <h1 className='text-center text-4xl'>Service We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;