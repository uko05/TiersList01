const imageFolder = 'chara/';
const imageData = [
    { src: 'niko.png', category: 'hi' },
    { src: 'arisu.png', category: 'hi' },
    { src: 'dorin.png', category: 'hi' },
    { src: 'Mavuika.png', category: 'hi' },
    { src: 'Arlecchino.png', category: 'hi' },
    { src: 'Gaming.png', category: 'hi' },
    { src: 'Chevreuse.png', category: 'hi' },
    { src: 'Lyney.png', category: 'hi' },
    { src: 'Dehya.png', category: 'hi' },
    { src: 'Thoma.png', category: 'hi' },
    { src: 'Yoimiya.png', category: 'hi' },
    { src: 'YanFei.png', category: 'hi' },
    { src: 'Hutao.png', category: 'hi' },
    { src: 'Xinyan.png', category: 'hi' },
    { src: 'Klee.png', category: 'hi' },
    { src: 'Diluc.png', category: 'hi' },
    { src: 'Bennett.png', category: 'hi' },
    { src: 'Xiangling.png', category: 'hi' },
    { src: 'amber.png', category: 'hi' },
    
    { src: 'shojo.png', category: 'mizu' },
    { src: 'aino.png', category: 'mizu' },
    { src: 'daria.png', category: 'mizu' },
    { src: 'Mualani.png', category: 'mizu' },
    { src: 'Sigewinne.png', category: 'mizu' },
    { src: 'Furina.png', category: 'mizu' },
    { src: 'Neuvillette.png', category: 'mizu' },
    { src: 'Nilou.png', category: 'mizu' },
    { src: 'Candace.png', category: 'mizu' },
    { src: 'Yelan.png', category: 'mizu' },
    { src: 'KamisatoAyato.png', category: 'mizu' },
    { src: 'Kokomi.png', category: 'mizu' },
    { src: 'Tartaglia.png', category: 'mizu' },
    { src: 'Mona.png', category: 'mizu' },
    { src: 'Xingqiu.png', category: 'mizu' },
    { src: 'barbara.png', category: 'mizu' },
    
    { src: 'skaku.png', category: 'koori' },
    { src: 'esuko.png', category: 'koori' },
    { src: 'sitorari.png', category: 'koori' },
    { src: 'Charlotte.png', category: 'koori' },
    { src: 'Wriothesley.png', category: 'koori' },
    { src: 'Freminet.png', category: 'koori' },
    { src: 'Mika.png', category: 'koori' },
    { src: 'Layla.png', category: 'koori' },
    { src: 'Shenhe.png', category: 'koori' },
    { src: 'AyakaKamisato.png', category: 'koori' },
    { src: 'Eula.png', category: 'koori' },
    { src: 'rosaria.png', category: 'koori' },
    { src: 'Ganyu.png', category: 'koori' },
    { src: 'Diona.png', category: 'koori' },
    { src: 'Qiqi.png', category: 'koori' },
    { src: 'Chongyun.png', category: 'koori' },
    { src: 'Kaeya.png', category: 'koori' },
    
    { src: 'hurinzu.png', category: 'kaminari' },
    { src: 'inefa.png', category: 'kaminari' },
    { src: 'baresa.png', category: 'kaminari' },
    { src: 'Iansan.png', category: 'kaminari' },
    { src: 'oruron.png', category: 'kaminari' },
    { src: 'Clorinde.png', category: 'kaminari' },
    { src: 'Sethos.png', category: 'kaminari' },
    { src: 'Cyno.png', category: 'kaminari' },
    { src: 'Dori.png', category: 'kaminari' },
    { src: 'KukiShinobu.png', category: 'kaminari' },
    { src: 'YaeMiko.png', category: 'kaminari' },
    { src: 'Raiden.png', category: 'kaminari' },
    { src: 'KujouSara.png', category: 'kaminari' },
    { src: 'Keqing.png', category: 'kaminari' },
    { src: 'Fischl.png', category: 'kaminari' },
    { src: 'Beidou.png', category: 'kaminari' },    
    { src: 'Razor.png', category: 'kaminari' },
    { src: 'lisa.png', category: 'kaminari' },
    
    { src: 'neferu.png', category: 'kusa' },
    { src: 'rauma.png', category: 'kusa' },
    { src: 'Kinich.png', category: 'kusa' },
    { src: 'Emilie.png', category: 'kusa' },
    { src: 'Kirara.png', category: 'kusa' },
    { src: 'Baizhu.png', category: 'kusa' },
    { src: 'Kaveh.png', category: 'kusa' },
    { src: 'Alhaitham.png', category: 'kusa' },
    { src: 'Yaoyao.png', category: 'kusa' },
    { src: 'Nahida.png', category: 'kusa' },
    { src: 'Tighnari.png', category: 'kusa' },
    { src: 'Collei.png', category: 'kusa' },
    
    { src: 'faruka.png', category: 'kaze' },
    { src: 'yafoda.png', category: 'kaze' },
    { src: 'ifa.png', category: 'kaze' },
    { src: 'mizuki.png', category: 'kaze' },
    { src: 'ranyan.png', category: 'kaze' },
    { src: 'Chasca.png', category: 'kaze' },
    { src: 'Xianyun.png', category: 'kaze' },
    { src: 'Lynette.png', category: 'kaze' },
    { src: 'Scaramouche.png', category: 'kaze' },
    { src: 'Faruzan.png', category: 'kaze' },
    { src: 'Heizou.png', category: 'kaze' },
    { src: 'Sayu.png', category: 'kaze' },
    { src: 'KazuhaKaedehara.png', category: 'kaze' },
    { src: 'Xiao.png', category: 'kaze' },
    { src: 'Venti.png', category: 'kaze' },
    { src: 'Jean.png', category: 'kaze' },
    { src: 'Sucrose.png', category: 'kaze' },
    
    { src: 'shihaku.png', category: 'iwa' },
    { src: 'iruga.png', category: 'iwa' },
    { src: 'sironen.png', category: 'iwa' },
    { src: 'Kachina.png', category: 'iwa' },
    { src: 'Chiori.png', category: 'iwa' },
    { src: 'Navia.png', category: 'iwa' },
    { src: 'YunJin.png', category: 'iwa' },
    { src: 'AratakiItto.png', category: 'iwa' },
    { src: 'Gorou.png', category: 'iwa' },
    { src: 'Albedo.png', category: 'iwa' },
    { src: 'Zhongli.png', category: 'iwa' },
    { src: 'Noelle.png', category: 'iwa' },
    { src: 'Ningguang.png', category: 'iwa' }
];
const MAX_SELECTION = 3;
const SELECTED_LABEL = '☑';

//------------------------------------------------------------------------------------------------
const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');
const parentNode = document.querySelector('.parent-node');
const childNodes = document.querySelector('.child-nodes');

// 初期状態でサイドバーを隠す
sidebar.classList.add('hidden');
toggleButton.setAttribute('aria-expanded', false);
toggleButton.setAttribute('aria-label', 'メニューを開く');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // hiddenクラスを切り替え
    const isExpanded = !sidebar.classList.contains('hidden');
    toggleButton.setAttribute('aria-expanded', isExpanded);
    toggleButton.setAttribute('aria-label', isExpanded ? 'メニューを閉じる' : 'メニューを開く');
});

parentNode.addEventListener('click', (event) => {
    event.preventDefault(); // デフォルトのリンク動作を防止
    childNodes.classList.toggle('active'); // 子ノードの表示・非表示を切り替え
    const isActive = childNodes.classList.contains('active');
    parentNode.textContent = `${isActive ? '▼' : '▶'} 推しキャラランキング`; // テキストを更新
});

//------------------------------------------------------------------------------------------------

// タブごとの選択状態を管理するためのオブジェクト
const tabSelections = {};

// タブの選択状態を表示
function updateTabSelectionsDisplay() {
    const tabSelectionsElement = document.getElementById('tab-selections');
    tabSelectionsElement.innerHTML = ''; // クリアしてから再描画

    // tabSelectionsが空でも問題ないように対策
    if (tabSelections && Object.keys(tabSelections).length > 0) {
        for (const [category, selections] of Object.entries(tabSelections)) {
            const categoryInfo = document.createElement('div');
            categoryInfo.textContent = `${category}: ${selections.join(', ')}`;
            tabSelectionsElement.appendChild(categoryInfo);
        }
    } else {
        tabSelectionsElement.textContent = 'No selections made yet.';
    }
}

function loadImages() {
    const tabs = document.querySelectorAll('.tab-label');
    const tabContents = document.querySelectorAll('.tab-content');
    const cells = document.querySelectorAll('.cell');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // すでにアクティブなタブを再度クリックした場合、何もしない
            if (tab.classList.contains('active')) {
                return; 
            }
            // アクティブなタブを更新
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 現在のタブコンテンツを表示
            tabContents.forEach(content => {
                if (content.previousElementSibling === tab) {
                    updateImageList(category, content.querySelector('.image-list'));
                    restoreSelectionState(category); // 選択状態の復元
                }
            });
        });
    });

    // 初期表示（最初のタブをアクティブにする）
    tabs[0].click();

    function updateImageList(category, container) {
        container.innerHTML = '';
        const filteredImages = imageData.filter(img => img.category === category);

        filteredImages.forEach(imgData => {
            const imgContainer = document.createElement('div'); // 画像を囲むコンテナ
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = `${imageFolder}${imgData.src}`;
            img.dataset.src = imgData.src;
            img.dataset.category = imgData.category;
            img.classList.add('image-item');
            img.addEventListener('click', () => handleImageClick(img, category));

            imgContainer.appendChild(img);
            container.appendChild(imgContainer);
        });
    }

    function handleImageClick(img, category) {
        const src = img.dataset.src;
        const columnMapping = {
            'hi': [0, 7, 14],
            'mizu': [1, 8, 15],
            'koori': [2, 9, 16],
            'kaminari': [3, 10, 17],
            'kusa': [4, 11, 18],
            'kaze': [5, 12, 19],
            'iwa': [6, 13, 20]
        };

        const positions = columnMapping[category] || [];
        const isSelected = img.classList.contains('selected');
        const tabCategory = document.querySelector('.tab-label.active').dataset.category;

        // 現在のタブの選択状態を取得
        let selectedCategory = tabSelections[tabCategory] || [];

        // すでに選択されている画像が再度クリックされた場合 -> 選択解除
        if (selectedCategory.includes(src)) {
            // 選択解除
            img.classList.remove('selected');
            removeNumberingAndBorder(img.parentElement);  // コンテナから番号と枠を削除

            // 上部の該当セルから画像を削除
            const cellIndex = selectedCategory.indexOf(src);
            if (cellIndex !== -1) {
                selectedCategory.splice(cellIndex, 1); // 選択状態リストから削除
                cells[positions[cellIndex]].innerHTML = ''; // 上部の該当セルから削除
            }

            // 再配置処理を追加
            repositionImages(tabCategory);  // 残りの画像を再配置
        } else {
            // 選択制限（3枚まで）
            if (selectedCategory.length >= MAX_SELECTION) {
                alert('選択できる画像は3枚までです');
                return;
            }

            // 新たに選択
            img.classList.add('selected');
            addNumberingAndBorder(img.parentElement, selectedCategory.length + 1);  // コンテナに番号と枠を追加

            // 上部の空きセルに画像を表示
            const availablePosition = positions.find(pos => !cells[pos].querySelector('img'));
            if (availablePosition !== undefined) {
                cells[availablePosition].innerHTML = `<img src="${imageFolder}${src}" class="selected">`;
                selectedCategory.push(src); // 選択リストに追加

                // ラベルの再配置
                updateImageNumbers(tabCategory);
            }
        }

        // 選択解除時にタブの選択リストを更新
        tabSelections[tabCategory] = selectedCategory;
    }

    function updateTabState(tabCategory) {
        // 既存の選択リストを取得
        const selectedCategory = tabSelections[tabCategory] || [];

        // 全画像の選択状態をクリア
        document.querySelectorAll('.image-grid img').forEach(img => {
            img.classList.remove('selected');
            removeNumberingAndBorder(img.parentElement);  // 全ての画像から枠と番号をクリア
        });

        // 選択されている画像を再度選択状態にする
        selectedCategory.forEach((src, index) => {
            const img = document.querySelector(`img[data-src="${src}"]`);
            if (img) {
                img.classList.add('selected');
                addNumberingAndBorder(img.parentElement, index + 1);  // 画像に番号と枠を付ける
            }
        });
    }

    function addNumberingAndBorder(container, number) {
        // 青い枠と番号を追加（コンテナに）
        container.style.border = '2px solid blue';
        let label = container.querySelector('.selected-label');
        if (!label) {
            label = document.createElement('div');
            label.className = 'selected-label';
            container.appendChild(label);
        }
        label.textContent = SELECTED_LABEL; // 定数で管理
    }

    function removeNumberingAndBorder(container) {
        // 青い枠と番号を削除
        container.style.border = 'none';
        const label = container.querySelector('.selected-label');
        if (label) label.remove();
    }

    function updateImageNumbers(tabCategory) {
        const columnMapping = {
            'hi': [0, 7, 14],
            'mizu': [1, 8, 15],
            'koori': [2, 9, 16],
            'kaminari': [3, 10, 17],
            'kusa': [4, 11, 18],
            'kaze': [5, 12, 19],
            'iwa': [6, 13, 20]
        };

        const selectedCategory = tabSelections[tabCategory] || [];
        const positions = columnMapping[tabCategory] || [];

        selectedCategory.forEach((src, index) => {
            const imgContainer = document.querySelector(`.image-item[data-src="${src}"]`).parentElement;
            addNumberingAndBorder(imgContainer, index + 1);
        });
    }

    function repositionImages(tabCategory) {
        const columnMapping = {
            'hi': [0, 7, 14],
            'mizu': [1, 8, 15],
            'koori': [2, 9, 16],
            'kaminari': [3, 10, 17],
            'kusa': [4, 11, 18],
            'kaze': [5, 12, 19],
            'iwa': [6, 13, 20]
        };

        const selectedCategory = tabSelections[tabCategory] || [];
        const positions = columnMapping[tabCategory] || [];

        // 上部の該当するタブの画像だけをクリア
        positions.forEach(position => {
            cells[position].innerHTML = '';
        });

        // 現在の選択画像で再配置
        selectedCategory.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = `${imageFolder}${src}`;
            img.classList.add('selected');
            const cellIndex = positions[index];
            if (cellIndex !== undefined) {
                console.log(`Placing image ${src} at position ${cellIndex}`);
                cells[cellIndex].appendChild(img);
            }
        });

        // ラベルの更新
        updateImageNumbers(tabCategory);
    }

    function restoreSelectionState(category) {
        const selectedCategory = tabSelections[category] || [];
        const columnMapping = {
            'hi': [0, 7, 14],
            'mizu': [1, 8, 15],
            'koori': [2, 9, 16],
            'kaminari': [3, 10, 17],
            'kusa': [4, 11, 18],
            'kaze': [5, 12, 19],
            'iwa': [6, 13, 20]
        };
        const positions = columnMapping[category] || [];

        // 他のタブをクリアせずに、選択状態を復元
        selectedCategory.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = `${imageFolder}${src}`;
            img.classList.add('selected');
            const cellIndex = positions[index];
            if (cellIndex !== undefined) {
                cells[cellIndex].appendChild(img);
            }
        });

        // 青枠と☑の復元
        const imageContainers = document.querySelectorAll(`.tab-content .image-container .image-item[data-category="${category}"]`);
        imageContainers.forEach(img => {
            if (selectedCategory.includes(img.dataset.src)) {
                const container = img.parentElement;
                const selectedIndex = selectedCategory.indexOf(img.dataset.src);
                addNumberingAndBorder(container, selectedIndex + 1);  // ラベルと青枠を追加
            }
        });

        // ラベルの更新
        updateImageNumbers(category);
    }

    // 保存ボタンのクリックイベントを追加
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const tabCategory = document.querySelector('.tab-label.active').dataset.category;
            saveImage(tabCategory);
        });
    }
}

function saveImage() {
  const grid = document.getElementById('grid');
  if (!grid) return;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints > 0;

  html2canvas(grid, { useCORS: true, scale: 2 })
    .then(canvas => new Promise(resolve => canvas.toBlob(resolve, 'image/png')))
    .then(async (blob) => {
      if (!blob) throw new Error('Blob 作成に失敗');

      // ファイル名（yyyyMMdd_HHmmss）
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const dd = String(now.getDate()).padStart(2, '0');
      const hh = String(now.getHours()).padStart(2, '0');
      const mi = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      const filename = `原神推しキャラランキング_${yyyy}${mm}${dd}_${hh}${mi}${ss}.png`;

      // ---- モバイル優先ロジック ----
      if (isMobile) {
        try {
          const file = new File([blob], filename, { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: '原神推しキャラランキング',
              text: '写真アプリに保存してね'
            });
            return; // モバイルは共有シートで完了
          }
        } catch (e) {
          console.warn('Share canceled/failed, fallback.', e);
        }
        // 共有できないモバイル → 新規タブで画像を開いて長押し保存
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60 * 1000);
        return;
      }

      // ---- PC(デスクトップ) は従来の「即ダウンロード」に固定 ----
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60 * 1000);
    })
    .catch(err => {
      console.error('Error capturing image:', err);
      alert('画像の保存に失敗しました。もう一度お試しください。');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadImages();

    const sidebar = document.getElementById('sidebar');
    const sizeOptions = document.querySelectorAll('input[name="size-option"]');

    sizeOptions.forEach(option => {
        option.addEventListener('change', (event) => {
            if (event.target.value === 'default') {
                sidebar.style.display = 'block';   // ← 左バー表示
            } else if (event.target.value === 'hakai') {
                sidebar.style.display = 'none';    // ← 左バー非表示
            }
        });
    });
});
