// This should be added inside the definition of the 'ui' object at the starting of ui.js.

        ,
        camera: document.getElementById('camera')

// End section



// Copy this portion of the code into the large switch statement in the onValueChanged function. Then change the src's.

        case '/SmartDashboard/useBackCamera':
            if (value) {
                ui.camera.src = 'INSERT HERE THE SOURCE OF YOUR BACK CAMERA';
            } else {
                ui.camera.src = 'INSERT HERE THE SOURCE OF YOUR FRONT OR MAIN CAMERA';
            }
            break;

// End Section



// Add this at the bottom of ui.js with the other listeners.

// Toggle between camera views
ui.camera.onclick = function() {
    var cameraKey = '/SmartDashboard/Drive | backCamera';
    NetworkTables.setValue(cameraKey, !NetworkTables.getValue(cameraKey));
};

// End section