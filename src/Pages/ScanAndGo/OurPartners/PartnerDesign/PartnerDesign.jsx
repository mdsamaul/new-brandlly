import React from 'react';

const PartnerDesign = ({ partner }) => {
    return (
        <div className='border rounded-md p-2 cursor-pointer hover:motion-safe:animate-pulse'>
            <img src={partner.image} alt="" />
        </div>
    );
};

export default PartnerDesign;