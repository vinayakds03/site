document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = './public/file.zip';  // Adjust path if needed
    link.download = 'file.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  
