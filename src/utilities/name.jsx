import React from "react";
import '../styles/name.css'


let width = window.innerWidth;

function handleMouseMove(e) {
  
const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;

  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
function handleWindowResize() {
  width = window.innerWidth;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('touchmove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

function Name(){
    return(
    <div className="profile-name">
    <div className="wrap">
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow name">Lautaro</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow name">Lautaro</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow name">Rocha</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow name">Rocha</span>
            </div>
          </div>
          </div>
          <div className="line">
              <div className="left">
                <div className="content">
                  <span className="spanFast">frontend</span>
                </div>
              </div>
              <div className="right">
                <div className="content">
                  <span className="spanFast">frontend</span>
                </div>
              </div>
            </div>
            <div className="line">
                <div className="left">
                  <div className="content">
                    <span className="spanFast">developer</span>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <span className="spanFast">developer</span>
                  </div>
                </div>
              </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta numquam voluptates ullam consequuntur doloremque similique libero iste, eligendi cumque provident animi reprehenderit quae id adipisci quibusdam quas delectus dolorum quia temporibus error labore. Voluptate.
    </p>
    </div>
    )
}

export default Name;