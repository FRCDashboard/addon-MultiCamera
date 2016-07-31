// This should be added inside the definition of the 'ui' object at the starting of ui.js.

    ,
    camera: {
		viewer: document.getElementById('camera'),
		id: 0,
		srcs: [ // Will default to first camera
            'INSERT FIRST CAMERA STREAM SOURCE',
            'INSERT SECOND CAMERA STREAM SOURCE',
            'INSERT THIRD CAMERA STREAM SOURCE',
            'INSERT FOURTH CAMERA STREAM SOURCE',
            'ETC'
        ]
    }

// End section



// Unlike most addons, this addon doesn't interact with NetworkTables. Therefore, you don't need to add anything to the onValueChanged handler.



// Add this at the bottom of ui.js.

// When camera is clicked on, change to the next source.
ui.camera.viewer.onclick = function() {
    ui.camera.id += 1;
	if (ui.camera.id === ui.camera.srcs.length) ui.camera.id = 0;
	ui.camera.viewer.style.backgroundImage = 'url(' + ui.camera.srcs[ui.camera.id] + ')';
};

// End section