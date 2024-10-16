import React from 'react'
import { Instagram,  LinkedinIcon,  Twitter ,  } from 'lucide-react';
function Foter() {
  return (
    <div className="footer mt-8  bg-purple-900 text-white text-center h-full gap-6 justify-center p-5 flex">
    <span>copyright: &copy; PassManag All rights reserved. By ranbirseth001@gmail.com </span>
    <div className='socal flex justify-center'>
        <span className='p-3 '><a target='blank' href="https://www.instagram.com/theycall_mepi?igsh=dmFhYXJ0d3lsbzZp"><Instagram /></a></span>
        <span className='p-3 '><a target='blank' href="https://x.com/Ranbir129Seth?t=KrugsbW3wXJhDNo8JgcR8g&s=09"><Twitter /></a></span>
        <span className='p-3 '><a target='blank' href="https://www.linkedin.com/in/ranbir-seth-02a0471b3"><LinkedinIcon /></a></span>
    </div>
</div>

  )
}

export default Foter