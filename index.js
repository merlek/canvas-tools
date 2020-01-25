window.addEventListener('load', () => {

   const canvas = document.getElementById('canvas');
   const ctx = canvas.getContext('2d');

   const width = canvas.width;
   const height = canvas.height;

   CanvasTools.Circle.draw(
      ctx,
      { // Circle
         center: {
            x: width / 2,
            y: height / 2
         },
         radius: 10
      },
      'black');

});