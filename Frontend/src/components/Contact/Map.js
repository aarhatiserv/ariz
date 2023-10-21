import React from "react";

function Map() {
  return (
    <div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7099745840196!2d88.36971537591751!3d22.55253463370427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c15d823f27%3A0xeaf23fc7d8055200!2sAriz%20Garments!5e0!3m2!1sen!2sin!4v1697614258929!5m2!1sen!2sin"
          style={{ border: "0" }}
          className="pb-16 w-full h-96"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
