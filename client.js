// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
function init(bundle, parent, options = {}) {

  // initialise instant game
  if (FBInstant) {
    FBInstant.initializeAsync()
    .then(function() {
      FBInstant.setLoadingProgress(100);
      FBInstant.startGameAsync();
    });
  }



  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });


  const surface =  r360.getDefaultSurface();
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('VR360', { /* initial props */ }),
      surface
  );

  // 改变画布形状 > 平铺
  surface.setShape(Surface.SurfaceShape.Flat)

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('keting.jpg'));
}


window.React360 = {init};
