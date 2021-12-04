import React from "react";
import { useParams } from "react-router-dom";

function Shop(props: any) {
	const params = useParams();
    return (
    <div className="Shop">
      <div className='text-center'>
        <p>Visit <a href='https://www.volvocars.com/in'>Volvo Cars</a> to shop {params?.carID?.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default Shop;
