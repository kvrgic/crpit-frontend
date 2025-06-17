import { useEffect, useRef } from "react";

const GoogleMapEmbed = ({ height = "160px", rounded = true }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2735.926527477055!2d18.350757899999998!3d43.827951899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c993d8be023d%3A0xe59047b9adff5f5f!2sNurije%20Pozderca%207%2C%20Sarajevo%2071000!5e1!3m2!1shr!2sba!4v1749388380145!5m2!1shr!2sba";
    iframe.width = "100%";
    iframe.height = "100%"; 
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.title = "Google Map";

    if (mapRef.current) {
      mapRef.current.appendChild(iframe);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div ref={mapRef} className={`w-full h-full ${rounded ? "rounded-md overflow-hidden" : ""}`}/>
  );
};

export default GoogleMapEmbed;
