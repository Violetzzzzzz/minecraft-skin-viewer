import React, { useState, useEffect } from 'react';
import * as skinview3d from 'skinview3d';
// import { Vector3 } from 'three';


function App() {

  useEffect(() => {
    const newCanvas: HTMLCanvasElement | null = document.getElementById('canvas0') as HTMLCanvasElement; // Type assertion
    if (!newCanvas) return; // Guard clause to handle null case
    const skinViewer = new skinview3d.SkinViewer({
      canvas: newCanvas,
      width: 100,
      height: 200,
      skin: 'b0b87deffb4fdb26df0cb5fca84f23704e884063.png',
    });


    // Load another skin
    // skinViewer.loadSkin('Hacksore.png');

    // // Load a cape
    // skinViewer.loadCape('img/cape.png');

    // // Load an elytra (from a cape texture)
    // skinViewer.loadCape('img/cape.png', { backEquipment: 'elytra' });

    // // Unload(hide) the cape / elytra
    // skinViewer.loadCape(null);

    // // Set the background color
    // skinViewer.background = 0x808080; // Hex color code for gray

    // // Set the background to a normal image
    // skinViewer.loadBackground('img/background.png');

    // // Set the background to a panoramic image
    // skinViewer.loadPanorama('img/panorama1.png');

    // Change camera FOV
    skinViewer.fov = 10;

    // Zoom out
    skinViewer.zoom = 0.5;


    // Rotate the player
    // skinViewer.autoRotate = true;

    // Apply an animation
    skinViewer.animation = new skinview3d.RunningAnimation();
    skinViewer.nameTag = "Tom";

    // Set the speed of the animation
    if (skinViewer.animation) {
      skinViewer.animation.speed = 1;
    }

    // // Pause the animation
    // if (skinViewer.animation) {
    //   skinViewer.animation.paused = true;
    // }

    // Remove the animation
    // skinViewer.animation = null;


    // const camera = skinViewer.camera;
    // camera.position.set(50, 200, 100);




    // const target = new Vector3(0, 0, 0);
    // camera.lookAt(target);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
      <canvas id='canvas0'> </canvas>
    </>
  );
}

export default App;


