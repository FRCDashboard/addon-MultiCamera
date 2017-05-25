# Multi-Camera addon for FRC Dashboard
Addon to allow toggling between multiple camera views. Great if your robot has a back camera and a front one, or more.

## Installation
1. Copy the contents of `multicamera.html` to wherever in the dashboard you desire. For this addon, the HTML should already be on your dashboard, but it's included in case you removed it.
2. Copy `multicamera.js` into the `components` directory of your FRCDashboard system.
3. Link the script from `index.html`, for example:

```html
<script src="components/multicamera.js"></script>
```

4. If the camera's CSS does not appear in the default CSS, copy `multicamera.css` to the `css` directory in your FRCDashboard system.
5. Link the CSS from `index.html`, for example:

```html
<link rel="stylesheet" href="css/multicamera.css">
```
6. If you haven't already, replace the `url` of the `background-image` with your desired default camera view's IP.
7. In `multicamera.js`, replace all sources with actual sources of your camera feeds.
8. If necessary, change the keys of the NetworkTables values used in `multicamera.js` to the keys your robot code uses.

Alternatively, you could just copy all the JavaScipt code into `ui.js` or other preexisting JavaScript script, but that's a bit tougher to keep organized.
