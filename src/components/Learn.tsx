import React from "react";
import { useParams } from "react-router-dom";

function Learn(props: any) {
	let params = useParams();
	return (
		<div className="Learn">
			<div className='text-center'>
			<p>Visit <a href='https://www.volvocars.com/in'>Volvo Cars</a> to learn  more about {params?.carID?.toUpperCase()}</p>
			</div>
		</div>
    );
}

export default Learn;
