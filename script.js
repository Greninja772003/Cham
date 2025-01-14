const imageInput = document.getElementById('imageInput');
const imageContainer = document.getElementById('imageContainer');
const uploadedOverlaySrc = '/mnt/data/Untitled_design_40-1[1].png'; // Path to your uploaded file

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Remove existing content
      imageContainer.innerHTML = '';

      // Create an img element for the uploaded image
      const img = document.createElement('img');
      img.src = e.target.result;

      // Add the uploaded image to the container
      imageContainer.appendChild(img);

      // Add an SVG overlay using the uploaded overlay image
      addSvgOverlay();
    };
    reader.readAsDataURL(file);
  }
});

function addSvgOverlay() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');

  // Add the uploaded image as the overlay
  const overlayImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  overlayImage.setAttribute('href', "Untitled_design_40-1[1].png"); // Use the uploaded image source
  overlayImage.setAttribute('x', '35'); // Position it as needed
  overlayImage.setAttribute('y', '-10');
  overlayImage.setAttribute('width', '40');
  overlayImage.setAttribute('height', '40');

  svg.appendChild(overlayImage);

  // Add the SVG to the container
  imageContainer.appendChild(svg);
}
