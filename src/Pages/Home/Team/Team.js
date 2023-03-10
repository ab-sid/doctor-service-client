import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='bg-[#fff] py-12'>
            <div className='my-8'>
                <h1 className='text-3xl font-bold text-center'>Our Team <span className='text-primary'>Members</span></h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    members.map(member => <TeamCard key={member.id} member={member}></TeamCard>)
                }
            </div>
        </section>
    );
};

export default Team;