// キャラクター画像ファイル名のリスト
const characterFiles = [
    'char1.png',
    'char2.png',
    'char3.png' // 追加キャラクターはこのリストに追加
];

// キャラクター画像を表示する関数
function loadCharacters() {
    const charactersContainer = document.getElementById('characters');
    
    characterFiles.forEach((file, index) => {
        // div要素を作成
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.setAttribute('draggable', 'true');
        characterDiv.setAttribute('id', `char${index + 1}`);
        
        // img要素を作成
        const img = document.createElement('img');
        img.src = `chara/${file}`;  // charaフォルダ内の画像を参照
        img.alt = `キャラクター${index + 1}`;
        
        // divにimgを追加
        characterDiv.appendChild(img);
        charactersContainer.appendChild(characterDiv);

        // ドラッグイベントを追加
        characterDiv.addEventListener('dragstart', dragStart);
    });
}

// ドラッグ＆ドロップ関連のイベント
const dropZones = document.querySelectorAll('.drop-zone');

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

let draggedItem = null;

function dragStart(e) {
    draggedItem = e.target;
    setTimeout(() => e.target.style.display = 'none', 0);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (!e.target.firstChild) {
        e.target.appendChild(draggedItem);
        draggedItem.style.display = 'block';
    } else {
        alert("この場所には既にキャラクターが配置されています。");
    }
}

// ページロード時にキャラクターをロード
window.onload = loadCharacters;
