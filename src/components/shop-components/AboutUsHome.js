import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAboutUsApi } from '../../actions/aboutUsActions';
import AboutV5 from '../section-components/about-v5';

const AboutUsHome = () => {
    const {loading,about}=useSelector((state)=>state.about)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAboutUsApi())
    },[dispatch])
    return <div>
      
        <AboutV5     loading={loading} aboutUsData={about} />
       
    </div>
}

export default AboutUsHome
