import PlumbingTemp from '@/Components/templates/PlumbingTemp'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function plumbing() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <div>
      <PlumbingTemp />
    </div>
  )
}

export default plumbing