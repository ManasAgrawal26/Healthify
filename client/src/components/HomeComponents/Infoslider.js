import React from 'react'

export default function Infoslider() {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 7000;


  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => { };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/*colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))*/}

        <div className="slide" style={{backgroundColor:"#9FE2BF"}}>
        <p className='box-heading' style={{backgroundColor:"#9FE2BF"}}>TRUST</p>
        </div>
        <div className="slide" style={{backgroundColor:"#c393cc"}}>
        <p className='box-heading' style={{backgroundColor:"#c393cc"}}>INTEGRITY</p>
        </div>
        <div className="slide" style={{backgroundColor:"#fa9398"}}>
        <p className='box-heading' style={{backgroundColor:"#fa9398"}}>SECURITY</p>
        </div>

      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );

}
