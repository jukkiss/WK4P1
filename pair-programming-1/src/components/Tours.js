import React, { useState } from 'react';
import { tours } from '../data';
import Tour from './Tour';
import Title from './Title';

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    const updatedTours = toursData.filter((tour) => tour.id !== id);
    setToursData(updatedTours);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <div key={tour.id}>
              <Tour {...tour} />
              <button onClick={() => removeTour(tour.id)}>Not Interested</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
