import React from 'react';
import MyResume from './MyResume.pdf';
export default function Resume(){
    return(
        <iframe 
      src={MyResume}
      width="80%"
      height="600px"
      title="PDF Viewer"
    />
    )
}