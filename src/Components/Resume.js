import React from 'react';
import resumeHackerrank from './Resume-Hackerrank.pdf';
export default function Resume(){
    return(
        <iframe 
      src={resumeHackerrank}
      width="80%"
      height="600px"
      title="PDF Viewer"
    />
    )
}