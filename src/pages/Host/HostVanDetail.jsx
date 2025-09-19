import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) return <h2>Loading...</h2>;

  return (
    <div>
      <img src={currentVan.imageUrl} alt={currentVan.name} width={150} />
      <div>
        <p>{currentVan.type}</p>
        <h2>{currentVan.name}</h2>
        <p>${currentVan.price}/day</p>
        <p>{currentVan.description}</p>
      </div>
      <nav className='host-van-detail-nav'>
        <Link to={`/host/vans/${currentVan.id}/details`}>Details</Link>
        <Link to={`/host/vans/${currentVan.id}/pricing`}>Pricing</Link>
        <Link to={`/host/vans/${currentVan.id}/photos`}>Photos</Link>
      </nav>
    </div>
  );
}
