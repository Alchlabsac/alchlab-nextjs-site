import React from 'react';

const ComingSoon = () => (
  <div className="main">
    <span>
      <img src="cs.png" className="main__img" alt="Icono 1" />
    </span>

    <style jsx>{`
      .main {
        &__img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 700px;
        }
      }
    `}</style>
  </div>
);

export default ComingSoon;
