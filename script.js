const addInputTextToParagraph = () => {
  const input = document.getElementById('text-input');
  const paragraph = document.getElementById('meme-text');
  input.addEventListener('input', () => {
    paragraph.textContent = input.value;
  });
};

const addImageToPage = () => {
  const container = document.getElementsByClassName('meme-image-container')[0];
  const memeInsert = document.getElementById('meme-insert');
  const img = document.createElement('img');
  img.id = 'meme-image';
  memeInsert.addEventListener('change', () => {
    const file = memeInsert.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        img.src = event.target.result;
      };

      reader.readAsDataURL(file);
    }

    container.appendChild(img);
  });
};

const createBtns = () => {
  const btnsContainer = document.getElementById('change-buttons-container');
  const btnsIds = ['fire', 'water', 'earth'];
  for (let index = 0; index < 3; index += 1) {
    const btn = document.createElement('button');
    btn.type = 'button';
    const btnId = btnsIds[index];
    btn.innerText = btnId;
    btn.id = btnId;
    btnsContainer.appendChild(btn);
  }
};

const checkButtonTypeAndChangeContainer = (btnTypeId) => {
  const imageContainer = document.getElementById('meme-image-container');
  if (btnTypeId.id === 'fire') {
    imageContainer.style.border = '3px dashed rgb(255,0,0)';
  } else if (btnTypeId.id === 'water') {
    imageContainer.style.border = '5px double rgb(0,0,255)';
  } else if (btnTypeId.id === 'earth') {
    imageContainer.style.border = '6px groove rgb(0,128,0)';
  }
};

const changeContainerBorder = () => {
  const getElemBtns = document.getElementsByTagName('button');

  for (const button of getElemBtns) {
    button.addEventListener('click', () => {
      checkButtonTypeAndChangeContainer(button);
    });
  }
};

window.onload = () => {
  addInputTextToParagraph();
  addImageToPage();
  createBtns();
  changeContainerBorder();
};
