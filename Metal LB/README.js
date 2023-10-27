// script.js
const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const codeContainer = button.parentElement;
    const codeElement = codeContainer.querySelector('code');
    const codeText = codeElement.textContent;
    
    const textArea = document.createElement('textarea');
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy Code';
    }, 1500);
  });
});
