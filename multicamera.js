// This should be added inside the definition of the 'ui' object at the starting of ui.js.

    ,
    camera: document.getElementById('camera'),
    cameraId: 0,
    cameras: [ // Will default to first camera
        'INSERT FIRST CAMERA STREAM SOURCE',
        'INSERT SECOND CAMERA STREAM SOURCE',
        'INSERT THIRD CAMERA STREAM SOURCE',
        'INSERT FOURTH CAMERA STREAM SOURCE'
    ]

// End section



// Unlike most addons for FRC Dashboard, this addon doesn't interact with NetworkTables and is only client-side.



// Add this at the bottom of ui.js.

// Toggle between camera views.
ui.camera.onclick = function() {
    if (ui.cameraId === ui.cameras.length) ui.cameraId = 0;
    ui.camera.src = cameras[ui.cameraId];
};

// End section