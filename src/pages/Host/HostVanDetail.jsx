import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const params = useParams();

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) return <h2>Loading...</h2>;

  return (
    <section>
      <div className='back-button-container'>
        <Link to='..' relative='path' className='back-button'>
          &larr; <span>Back to van list</span>
        </Link>
      </div>

      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={currentVan.imageUrl} alt={currentVan.name} width={150} />
          <div className='host-van-detail-info-text'>
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className='host-van-detail-nav'>
          <NavLink
            to='.'
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}>
            Details
          </NavLink>
          <NavLink
            to='pricing'
            style={({ isActive }) => (isActive ? activeStyles : null)}>
            Pricing
          </NavLink>
          <NavLink
            to='photos'
            style={({ isActive }) => (isActive ? activeStyles : null)}>
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan: currentVan }} />
      </div>
    </section>
  );
}
