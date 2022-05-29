function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {
      const {x,y,width,height} = objects[i];
      const {x:pointX, y:pointY} = point;
      if (
        pointX >= x &&
        pointX <= x + width &&
        pointY >= y &&
        pointY <= y + height
      )
        return {x,y,width,height};
    }
  }
  
  const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
  ];

  detectCollision(myObjects,)