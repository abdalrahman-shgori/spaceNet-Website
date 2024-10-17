import { useTheme } from "@mui/material";
import * as React from "react";

const SvgSpaceNetLogo = (props) => {
  const theme = useTheme();

  return (
    <>
      <style>
        {`
                .path {
                    fill: none; 
                    stroke-width: 2; 
                    stroke-dasharray: 1000; 
                    stroke-dashoffset: 1000; 
                    animation: typing 3.5s forwards; 
                }

                @keyframes typing {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                .fill {
                    fill:theme.palette.mode === 'light' ? "#051A2F" : "#E9FA50"; 
                    opacity: 0; 
                    animation: fillColor 3.5s forwards; 
                    animation-delay: 0.5s;
                }

                @keyframes fillColor {
                    0% {
                        opacity: 0;
                        transform: translateY(100%); 
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0); 
                    }
                }

                .path {
                    animation-delay: 0.5s;
                }
                   
                
                `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 879 128"
        style={{ width: '30%', height: 'auto' }}
        fill="none"
        {...props}
      >


        <path
          className="fill"
          fill={theme.palette.mode === 'light' ? "#051A2F" : "#E9FA50"}
          d="M388.001 123.674c-9.263 0-17.699-1.55-25.343-4.683-7.645-3.237-14.221-7.645-19.765-13.189-5.441-5.544-9.642-11.983-12.672-19.248-2.892-7.404-4.339-15.254-4.339-23.587s1.447-16.15 4.339-23.415c2.996-7.404 7.231-13.877 12.672-19.421 5.544-5.544 12.155-9.883 19.765-13.016 7.644-3.237 16.08-4.855 25.343-4.855H403.6v14.737h-15.082c-6.577 0-12.672 1.171-18.216 3.478-5.544 2.307-10.399 5.544-14.565 9.71-4.064 4.167-7.232 9.022-9.539 14.566-2.307 5.544-3.477 11.639-3.477 18.216 0 6.473 1.17 12.534 3.477 18.215 2.307 5.544 5.51 10.4 9.539 14.566 4.166 4.166 9.021 7.403 14.565 9.71 5.544 2.307 11.639 3.478 18.216 3.478H403.6v14.738h-15.599ZM238.455 79.633h53.269l-21.693-60.19c-.586-1.516-1.206-2.652-1.894-3.479-.689-.826-1.687-1.205-2.962-1.205-1.17 0-2.066.413-2.789 1.205-.723.792-1.274 1.963-1.721 3.478l-22.21 60.19Zm-33.504 44.041 41.286-109.81c1.859-4.752 4.407-8.195 7.644-10.4 3.237-2.203 6.99-3.305 11.294-3.305 4.305 0 8.024 1.102 11.295 3.306 3.34 2.066 5.888 5.51 7.644 10.227l41.459 109.982h-18.216l-10.571-29.338H233.29l-10.744 29.338h-17.595Zm-74.343-54.475h32.264c4.959 0 9.47-.998 13.533-2.961 4.166-2.066 7.403-5.096 9.71-9.022 2.445-3.925 3.65-8.608 3.65-14.049 0-5.544-1.205-10.227-3.65-14.049-2.445-3.925-5.681-6.955-9.71-9.022-4.063-2.066-8.505-3.133-13.36-3.133h-32.437v52.236Zm-16.666 54.475V2.225h51.169c7.644 0 14.565 1.722 20.832 5.2 6.233 3.34 11.226 8.092 14.91 14.22 3.684 6.13 5.544 13.292 5.544 21.522 0 7.851-1.86 14.91-5.544 21.177-3.581 6.13-8.505 10.916-14.738 14.393-6.232 3.478-13.36 5.2-21.349 5.2h-34.193v39.737h-16.631Zm-109.293 0v-14.738h52.58c4.063 0 7.507-.93 10.4-2.789a21.069 21.069 0 0 0 6.783-7.472c1.618-2.996 2.444-6.199 2.444-9.539 0-3.477-.826-6.645-2.444-9.538-1.515-2.995-3.685-5.371-6.577-7.128-2.79-1.86-6.198-2.789-10.227-2.789H34.709c-6.818 0-12.843-1.377-18.043-4.166-5.2-2.893-9.297-6.818-12.327-11.811C1.446 48.608 0 42.892 0 36.52c0-6.473 1.377-12.327 4.167-17.527 2.892-5.199 6.886-9.297 11.982-12.327 5.2-2.996 11.157-4.51 17.872-4.51h51.513v14.737H35.57c-3.822 0-7.162.93-10.055 2.79-2.892 1.72-5.096 4.062-6.576 6.955-1.515 2.789-2.273 5.785-2.273 9.021 0 3.134.689 6.13 2.066 9.022 1.515 2.79 3.65 5.027 6.405 6.784 2.892 1.721 6.198 2.617 9.882 2.617h23.415c7.3 0 13.533 1.446 18.732 4.338 5.2 2.893 9.194 6.818 11.983 11.811 2.79 4.959 4.167 10.64 4.167 17.01 0 7.06-1.446 13.361-4.339 18.905-2.789 5.44-6.783 9.71-11.983 12.844-5.2 3.133-11.156 4.683-17.871 4.683H4.649ZM511.547 1.876h-87.668v14.772h87.668V1.876ZM438.651 84.005v1.86c0 12.74 10.33 23.07 23.071 23.07h49.825v14.772h-64.598c-12.74 0-23.07-10.33-23.07-23.07v-54.44h87.668v14.772h-49.825c-12.741-.035-23.071 10.295-23.071 23.036ZM740.435 1.876h-87.669v14.772h87.669V1.876ZM667.538 84.005v1.86c0 12.74 10.33 23.07 23.071 23.07h49.826v14.772h-64.598c-12.741 0-23.071-10.33-23.071-23.07v-54.44h87.669v14.772h-49.826c-12.775-.035-23.071 10.295-23.071 23.036ZM879 1.608h-12.052v-.07h-94.314v.07h-12.81l.138 15.013h32.643l5.51.138c7.472.172 13.498 6.094 13.842 13.567v97.069h15.84V28.983c.964-6.818 6.715-12.052 13.705-12.224l5.509-.138H879V1.608ZM548.943 123.676h-16.666V1.539l18.319.31 59.95 89.046c1.515 2.272 5.061 1.17 5.061-1.55l-.241-87.806 16.666.31v121.827h-18.491l-59.536-87.979c-1.515-2.273-5.062-1.17-5.062 1.55v86.429Z"
        />
        <path
          className="path"
          style={{
            stroke: theme.palette.mode === 'light' ? '#051A2F' : '#E9FA50',
          }}
          fill={theme.palette.mode === 'light' ? "#051A2F" : "#E9FA50"}
          d="M388.001 123.674c-9.263 0-17.699-1.55-25.343-4.683-7.645-3.237-14.221-7.645-19.765-13.189-5.441-5.544-9.642-11.983-12.672-19.248-2.892-7.404-4.339-15.254-4.339-23.587s1.447-16.15 4.339-23.415c2.996-7.404 7.231-13.877 12.672-19.421 5.544-5.544 12.155-9.883 19.765-13.016 7.644-3.237 16.08-4.855 25.343-4.855H403.6v14.737h-15.082c-6.577 0-12.672 1.171-18.216 3.478-5.544 2.307-10.399 5.544-14.565 9.71-4.064 4.167-7.232 9.022-9.539 14.566-2.307 5.544-3.477 11.639-3.477 18.216 0 6.473 1.17 12.534 3.477 18.215 2.307 5.544 5.51 10.4 9.539 14.566 4.166 4.166 9.021 7.403 14.565 9.71 5.544 2.307 11.639 3.478 18.216 3.478H403.6v14.738h-15.599ZM238.455 79.633h53.269l-21.693-60.19c-.586-1.516-1.206-2.652-1.894-3.479-.689-.826-1.687-1.205-2.962-1.205-1.17 0-2.066.413-2.789 1.205-.723.792-1.274 1.963-1.721 3.478l-22.21 60.19Zm-33.504 44.041 41.286-109.81c1.859-4.752 4.407-8.195 7.644-10.4 3.237-2.203 6.99-3.305 11.294-3.305 4.305 0 8.024 1.102 11.295 3.306 3.34 2.066 5.888 5.51 7.644 10.227l41.459 109.982h-18.216l-10.571-29.338H233.29l-10.744 29.338h-17.595Zm-74.343-54.475h32.264c4.959 0 9.47-.998 13.533-2.961 4.166-2.066 7.403-5.096 9.71-9.022 2.445-3.925 3.65-8.608 3.65-14.049 0-5.544-1.205-10.227-3.65-14.049-2.445-3.925-5.681-6.955-9.71-9.022-4.063-2.066-8.505-3.133-13.36-3.133h-32.437v52.236Zm-16.666 54.475V2.225h51.169c7.644 0 14.565 1.722 20.832 5.2 6.233 3.34 11.226 8.092 14.91 14.22 3.684 6.13 5.544 13.292 5.544 21.522 0 7.851-1.86 14.91-5.544 21.177-3.581 6.13-8.505 10.916-14.738 14.393-6.232 3.478-13.36 5.2-21.349 5.2h-34.193v39.737h-16.631Zm-109.293 0v-14.738h52.58c4.063 0 7.507-.93 10.4-2.789a21.069 21.069 0 0 0 6.783-7.472c1.618-2.996 2.444-6.199 2.444-9.539 0-3.477-.826-6.645-2.444-9.538-1.515-2.995-3.685-5.371-6.577-7.128-2.79-1.86-6.198-2.789-10.227-2.789H34.709c-6.818 0-12.843-1.377-18.043-4.166-5.2-2.893-9.297-6.818-12.327-11.811C1.446 48.608 0 42.892 0 36.52c0-6.473 1.377-12.327 4.167-17.527 2.892-5.199 6.886-9.297 11.982-12.327 5.2-2.996 11.157-4.51 17.872-4.51h51.513v14.737H35.57c-3.822 0-7.162.93-10.055 2.79-2.892 1.72-5.096 4.062-6.576 6.955-1.515 2.789-2.273 5.785-2.273 9.021 0 3.134.689 6.13 2.066 9.022 1.515 2.79 3.65 5.027 6.405 6.784 2.892 1.721 6.198 2.617 9.882 2.617h23.415c7.3 0 13.533 1.446 18.732 4.338 5.2 2.893 9.194 6.818 11.983 11.811 2.79 4.959 4.167 10.64 4.167 17.01 0 7.06-1.446 13.361-4.339 18.905-2.789 5.44-6.783 9.71-11.983 12.844-5.2 3.133-11.156 4.683-17.871 4.683H4.649ZM511.547 1.876h-87.668v14.772h87.668V1.876ZM438.651 84.005v1.86c0 12.74 10.33 23.07 23.071 23.07h49.825v14.772h-64.598c-12.74 0-23.07-10.33-23.07-23.07v-54.44h87.668v14.772h-49.825c-12.741-.035-23.071 10.295-23.071 23.036ZM740.435 1.876h-87.669v14.772h87.669V1.876ZM667.538 84.005v1.86c0 12.74 10.33 23.07 23.071 23.07h49.826v14.772h-64.598c-12.741 0-23.071-10.33-23.071-23.07v-54.44h87.669v14.772h-49.826c-12.775-.035-23.071 10.295-23.071 23.036ZM879 1.608h-12.052v-.07h-94.314v.07h-12.81l.138 15.013h32.643l5.51.138c7.472.172 13.498 6.094 13.842 13.567v97.069h15.84V28.983c.964-6.818 6.715-12.052 13.705-12.224l5.509-.138H879V1.608ZM548.943 123.676h-16.666V1.539l18.319.31 59.95 89.046c1.515 2.272 5.061 1.17 5.061-1.55l-.241-87.806 16.666.31v121.827h-18.491l-59.536-87.979c-1.515-2.273-5.062-1.17-5.062 1.55v86.429Z"
        />
      </svg>
    </>
  );
}

export default SvgSpaceNetLogo;
