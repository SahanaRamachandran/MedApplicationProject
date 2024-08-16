import React from 'react';
import './Contri.css';

function Contri() {
  const contributors = [
    { name: "Leela, MD, FAAD", title: "Partnering with all® free clear", img: "https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-indian-doctor-woman-smiling-at-camera-png-image_12531120.png" },
    { name: "Rahul, MD", title: "Board-certified dermatologist", img: "https://t3.ftcdn.net/jpg/01/67/15/98/360_F_167159846_MCrwVzB7ysdZKr2vIiJkiCacEoNWagdn.jpg" },
    { name: "Mary Alice , MD", title: "Double board-certified dermatologist", img: "https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-indian-doctor-woman-smiling-at-camera-png-image_12531120.png" },
    { name: "Jenny C, MD, FAAD", title: "Associate Professor, Director, Skin of Color Program", img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9mZW1hbGVfaW5kaWFuX2RvY3Rvcl9pc19mZGVlZjk4NC04NDQwLTQyOWEtOGViMy1mMDIxZTJkYWRlZTNfMS5wbmc.png" },
  ];

  return (
    <div className="contributors">
      <h2>Contributors</h2>
      <div className="contributors-list">
        {contributors.map((contributor, index) => (
          <div key={index} className="contributor-card">
            <img src={contributor.img} alt={contributor.name} />
            <h3>{contributor.name}</h3>
            <p>{contributor.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contri;