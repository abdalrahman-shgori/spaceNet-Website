import React, { useEffect, useRef, useCallback, useState } from "react";
import Matter from "matter-js";

const FallingItems = () => {
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const labels = [
    "Network", "Network", "Network", "Network",
    "Security", "Security", "Security", "Security",
    "IT", "IT", "IT"
  ];

  const colors = [
    "#1CB786", "#1CB786", // 2 times
    "#9D89FC", "#9D89FC", // 2 times
    "#051A2F", "#051A2F", "#051A2F", // 3 times
    "#FA6423", "#FA6423", // 2 times
    "#E9FA50", "#E9FA50"  // 2 times
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const setCanvasSize = useCallback((canvas) => {
    canvas.width = window.innerWidth;

    // Check if the screen width is under 768px
    if (window.innerWidth < 768) {
      canvas.height = window.innerHeight - 300; // Adjusted height for small screens
    } else {
      canvas.height = window.innerHeight - 100; // Default height for larger screens
    }
  }, []);

  const getPadding = () => {
    if (window.innerWidth >= 1024) {
      return 100;
    } else {
      return 20;
    }
  };

  const getFontSize = () => {
    if (window.innerWidth < 768) {
      return "14px Arial";
    } else {
      return "42px Arial";
    }
  };

  const getBoxDimensions = (text) => {
    const context = document.createElement("canvas").getContext("2d");
    context.font = getFontSize();
    const textWidth = context.measureText(text).width;

    if (window.innerWidth < 768) {
      return { width: textWidth + 20, height: 43 }; // Adding padding for small screens
    } else {
      const width = Math.min(Math.max(textWidth + 40, 192), 261); // Min width 192px, max width 261px
      return { width, height: 95 };
    }
  };

  const getFallingAreaWidth = () => {
    if (window.innerWidth < 768) {
      return 200;
    } else {
      return 400;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    const startEngine = () => {
      const engine = Matter.Engine.create();
      const world = engine.world;

      engine.world.gravity.y = 1;

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      setCanvasSize(canvas);

      // Create the ground within the visible canvas area
      const ground = Matter.Bodies.rectangle(canvas.width / 2, canvas.height + 30, canvas.width, 60, { isStatic: true });
      const wallLeft = Matter.Bodies.rectangle(-30, canvas.height / 2, 60, canvas.height, { isStatic: true });
      const wallRight = Matter.Bodies.rectangle(canvas.width + 30, canvas.height / 2, 60, canvas.height, { isStatic: true });
      Matter.World.add(world, [ground, wallLeft, wallRight]);

      const createFallingBox = (label, bgColor) => {
        const { width, height } = getBoxDimensions(label);
        const padding = getPadding();
        const fallingAreaWidth = getFallingAreaWidth();
        const areaStartX = (canvas.width - fallingAreaWidth) / 2 + padding; // Start of falling area
        const areaEndX = (canvas.width + fallingAreaWidth) / 2 - padding; // End of falling area
        const xMin = areaStartX + width / 2;
        const xMax = areaEndX - width / 2;

        const yOffset = Math.random() * 200;
        const delay = label * 100;

        const box = Matter.Bodies.rectangle(
          Math.random() * (xMax - xMin) + xMin,
          0 - yOffset,
          width,
          height,
          {
            restitution: 0.7,
            friction: 0.1,
            frictionAir: 0.05,
            density: 0.002,
            angle: Math.random() * Math.PI,
          }
        );

        setTimeout(() => {
          Matter.World.add(world, box);
        }, delay);

        box.title = label;
        box.bg = bgColor;
      };

      // Shuffle the colors array for random assignment
      const shuffledColors = shuffleArray(colors);

      // Shuffle the labels array to randomize the order
      const shuffledLabels = labels.sort(() => Math.random() - 0.5);

      intervalRef.current = setInterval(() => {
        if (shuffledLabels.length > 0 && shuffledColors.length > 0) {
          const label = shuffledLabels.shift();
          const bgColor = shuffledColors.shift();
          createFallingBox(label, bgColor);
        } else {
          clearInterval(intervalRef.current);
        }
      }, 1000);

      const render = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        Matter.Engine.update(engine);

        const padding = getPadding();
        Matter.Composite.allBodies(world).forEach((body) => {
          if (body === ground || body === wallLeft || body === wallRight) return; // Skip rendering the ground and walls

          context.save();
          context.translate(body.position.x, body.position.y);
          context.rotate(body.angle);

          const { width, height } = getBoxDimensions(body.title);
          const radius = 19; // Border radius

          context.beginPath();
          context.moveTo(-width / 2 + radius, -height / 2);
          context.lineTo(width / 2 - radius, -height / 2);
          context.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius);
          context.lineTo(width / 2, height / 2 - radius);
          context.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2);
          context.lineTo(-width / 2 + radius, height / 2);
          context.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius);
          context.lineTo(-width / 2, -height / 2 + radius);
          context.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2);
          context.closePath();
          context.fillStyle = body.bg || 'transparent';
          context.fill();

          if (body.title) {
            context.font = getFontSize(); // Dynamic font size based on screen width
            context.fillStyle = "#fff";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(body.title, 0, 0);
          }

          context.restore();
        });

        requestAnimationFrame(render);
      };

      render();
    };

    startEngine();

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [setCanvasSize, dimensions]);

  return (
    <div style={{ overflowX: "hidden"}}>
      <canvas style={{ overflowY: "scroll" }} ref={canvasRef} />
    </div>
  );
};

export default FallingItems;
