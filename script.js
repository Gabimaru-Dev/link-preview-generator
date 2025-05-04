/* Created by Ayodele David */
function generatePreview() {
  const url = document.getElementById('url').value;
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const image = document.getElementById('image').value;

  const preview = document.getElementById('previewBox');
  preview.innerHTML = `
    <img src="${image}" alt="Preview Image">
    <h2>${title}</h2>
    <p>${desc}</p>
    <a href="${url}" target="_blank">${url}</a>
  `;
  preview.style.display = 'block';
}