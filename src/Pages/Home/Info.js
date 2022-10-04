import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock} title='Opening Hours' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, in." bgColor="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard img={location} title='Visit Our Location' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, in." bgColor="bg-accent"></InfoCard>
            <InfoCard img={phone} title='Contact Us' description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, in." bgColor="bg-gradient-to-r from-secondary to-primary"></InfoCard>   
        </div>
    );
};

export default Info;