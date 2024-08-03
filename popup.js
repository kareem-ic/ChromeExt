document.addEventListener('DOMContentLoaded', function () {
    const captureButton = document.getElementById('captureButton');
    const screenshotContainer = document.getElementById('screenshotContainer');
    captureButton.addEventListener('click', captureScreenshot);
    function captureScreenshot() {
      chrome.tabs.captureVisibleTab({ format: 'png' }, function (dataUrl) {
        const img = new Image();
        img.src = dataUrl;
        screenshotContainer.innerHTML = '';
        screenshotContainer.appendChild(img);
      });
    }
  });




//   document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('myButton').addEventListener('click', function() {
//       alert('Button clicked!');
//     });
//   });
  
// Above is another possibility. 