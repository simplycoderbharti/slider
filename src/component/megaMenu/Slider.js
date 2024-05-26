import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';

const images = [img1, img2, img3, img4];

function Slider() {
  const sliderRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    const handleNextClick = () => moveSlider('next');
    const handlePrevClick = () => moveSlider('prev');

    nextBtn.addEventListener('click', handleNextClick);
    prevBtn.addEventListener('click', handlePrevClick);

    return () => {
      nextBtn.removeEventListener('click', handleNextClick);
      prevBtn.removeEventListener('click', handlePrevClick);
    };
  }, []);

  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    const sliderList = listRef.current;
    const thumbnail = thumbnailRef.current;
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    let newIndex = currentIndex;

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add('next');
      newIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add('prev');
      newIndex = (currentIndex - 1 + images.length) % images.length;
    } else if (typeof direction === 'number') {
      // Direct click on thumbnail
      newIndex = direction;
      const steps = (newIndex - currentIndex + images.length) % images.length;
      for (let i = 0; i < steps; i++) {
        sliderList.appendChild(sliderItems[i]);
        thumbnail.appendChild(thumbnailItems[i]);
      }
      slider.classList.add('next');
    }

    setCurrentIndex(newIndex);

    const animationEndHandler = () => {
      if (slider.classList.contains('next')) {
        slider.classList.remove('next');
      } else if (slider.classList.contains('prev')) {
        slider.classList.remove('prev');
      }
      slider.removeEventListener('animationend', animationEndHandler);
    };

    slider.addEventListener('animationend', animationEndHandler);
  };

  const handleThumbnailClick = (index) => {
    moveSlider(index);
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="list" ref={listRef}>
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img src={image} alt={`Slide ${index}`} />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">{index % 2 === 0 ? 'FLOWER' : 'NATURE'}</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail" ref={thumbnailRef}>
        {images.map((image, index) => (
          <div
            className="item"
            key={index}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
      <div className="nextPrevArrows">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
}

export default Slider;
