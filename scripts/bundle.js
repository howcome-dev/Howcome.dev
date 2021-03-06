/*jshint esversion: 6 */

// 読み込みが終わってから初期化
window.addEventListener("load", init);

function init(){

  // Stageオブジェクトを作成。表示リストのルートになります。
  var stage = new createjs.Stage("set_layout");

  // タッチ操作をサポートしているブラウザーならば
  if (createjs.Touch.isSupported() == true) {
    // タッチ操作を有効にします。
    createjs.Touch.enable(stage);
  }
  // リサイズイベントを検知してリサイズ処理を実行
  window.addEventListener("resize", handleResize);
  handleResize(); // 起動時にもリサイズしておく

  // リサイズ処理
  function handleResize(event) {
    // 画面幅・高さを取得
    var w = window.innerWidth;
    var h = window.innerHeight;
    // Canvas要素の大きさを画面幅・高さに合わせる
    stage.canvas.width = w;
    stage.canvas.height = h;
    // 画面更新する
    stage.update();
  }

  //----------------------------------------
  // パズルの土台を作成
  //----------------------------------------

  // とびら
  var bgEntrance = new createjs.Bitmap("assets/images/bgEntrance.svg");
  bgEntrance.x = 865;
  bgEntrance.y = 465;
  bgEntrance.scaleX = 0.95;
  bgEntrance.scaleY = 0.96;
  stage.addChild(bgEntrance);

  // ドアノブ
  var bgKnob = new createjs.Bitmap("assets/images/bgKnob.svg");
  bgKnob.x = 945;
  bgKnob.y = 553;
  bgKnob.scaleX = 0.94;
  bgKnob.scaleY = 0.938;
  stage.addChild(bgKnob);

  // ドアノブPLAYボタン
  var bgKnobBtn = new createjs.Bitmap("assets/images/bgKnobBtn.svg");
  bgKnobBtn.x = 954;
  bgKnobBtn.y = 562;
  bgKnobBtn.scaleX = 0.8;
  bgKnobBtn.scaleY = 0.8;
  stage.addChild(bgKnobBtn);

  // 柱ひだり
  var bgPillarLeft = new createjs.Bitmap("assets/images/bgPillarLeft.svg");
  bgPillarLeft.x = 690;
  bgPillarLeft.y = 349;
  bgPillarLeft.scaleX = 0.951;
  bgPillarLeft.scaleY = 1.05;
  stage.addChild(bgPillarLeft);

  // 柱みぎ
  var bgPillarRight = new createjs.Bitmap("assets/images/bgPillarRight.svg");
  bgPillarRight.x = 1152;
  bgPillarRight.y = 374;
  bgPillarRight.scaleX = 0.953;
  bgPillarRight.scaleY = 1.06;
  stage.addChild(bgPillarRight);

  // 基礎ひだり
  var bgBaseLeft = new createjs.Bitmap("assets/images/bgBaseLeft.svg");
  bgBaseLeft.x = 680;
  bgBaseLeft.y = 643;
  bgBaseLeft.scaleX = 0.97;
  bgBaseLeft.scaleY = 0.89;
  stage.addChild(bgBaseLeft);

  // 基礎みぎ
  var bgBaseRight = new createjs.Bitmap("assets/images/bgBaseRight.svg");
  bgBaseRight.x = 1040;
  bgBaseRight.y = 650;
  bgBaseRight.scaleX = 0.99;
  bgBaseRight.scaleY = 0.89;
  stage.addChild(bgBaseRight);

  // 屋根
  var bgRoofBase = new createjs.Bitmap("assets/images/bgRoofBase.svg");
  bgRoofBase.x = 660;
  bgRoofBase.y = 130;
  bgRoofBase.scaleX = 0.95;
  bgRoofBase.scaleY = 0.95;
  stage.addChild(bgRoofBase);

  // カップケーキのカップ
  var bgSecretBase = new createjs.Bitmap("assets/images/bgSecretBase.svg");
  bgSecretBase.x = 976;
  bgSecretBase.y = 175;
  bgSecretBase.scaleX = 1;
  bgSecretBase.scaleY = 1;
  stage.addChild(bgSecretBase);

  // カップケーキのスポンジ
  var bgSecretSponge = new createjs.Bitmap("assets/images/bgSecretSponge.svg");
  bgSecretSponge.x = 944;
  bgSecretSponge.y = 37;
  bgSecretSponge.scaleX = 1;
  bgSecretSponge.scaleY = 1;
  stage.addChild(bgSecretSponge);

  // カップケーキのいちご
  var bgSecretBerry = new createjs.Bitmap("assets/images/bgSecretBerry.svg");
  bgSecretBerry.x = 1068;
  bgSecretBerry.y = 60;
  bgSecretBerry.scaleX = 0.98;
  bgSecretBerry.scaleY = 1;
  stage.addChild(bgSecretBerry);

  // はしごの手すり
  var bgHandrail = new createjs.Bitmap("assets/images/bgHandrail.svg");
  bgHandrail.x = 1063;
  bgHandrail.y = 270;
  bgHandrail.scaleX = 0.9;
  bgHandrail.scaleY = 0.925;
  stage.addChild(bgHandrail);

  // 道
  var bgRoad1 = new createjs.Bitmap("assets/images/bgRoad1.svg");
  bgRoad1.x = 650;
  bgRoad1.y = 643;
  bgRoad1.scaleX = 0.924;
  bgRoad1.scaleY = 0.936;
  stage.addChild(bgRoad1);

  // 屋根裏
  var bgAttic = new createjs.Bitmap("assets/images/bgAttic.svg");
  bgAttic.x = 900;
  bgAttic.y = 198;
  stage.addChild(bgAttic);

  // 1階の窓
  var bgWindow = new createjs.Bitmap("assets/images/bgWindow.svg");
  bgWindow.x = 764;
  bgWindow.y = 421;
  bgWindow.scaleX = 0.95;
  bgWindow.scaleY = 0.951;
  stage.addChild(bgWindow);

  // 2階の窓
  var bgWindow2 = new createjs.Bitmap("assets/images/bgWindow2.svg");
  bgWindow2.x = 888;
  bgWindow2.y = 311.5;
  bgWindow2.scaleX = 0.96;
  bgWindow2.scaleY = 0.95;
  stage.addChild(bgWindow2);

  //----------------------------------------
  // パズルのピースを作成
  //----------------------------------------

  // とびら
  var entrance = new createjs.Bitmap("assets/images/entrance.svg");
  entrance.x = 256;
  entrance.y = 46;
  entrance.scaleX = 0.95;
  entrance.scaleY = 0.96;
  stage.addChild(entrance);

  // ドアノブ
  var knob = new createjs.Bitmap("assets/images/knob.svg");
  knob.x = 530;
  knob.y = 400;
  knob.scaleX = 0.94;
  knob.scaleY = 0.938;
  stage.addChild(knob);

  // ドアノブPLAYボタン
  var knobBtn = new createjs.Bitmap("assets/images/knobBtn.svg");
  knobBtn.x = 505;
  knobBtn.y = 650;
  knobBtn.scaleX = 0.8;
  knobBtn.scaleY = 0.8;
  stage.addChild(knobBtn);

  // 柱ひだり
  var pillarLeft = new createjs.Bitmap("assets/images/pillarLeft.svg");
  pillarLeft.x = 69;
  pillarLeft.y = 324;
  pillarLeft.scaleX = 0.951;
  pillarLeft.scaleY = 1.05;
  stage.addChild(pillarLeft);

  // // 柱みぎ
  // var pillarRight = new createjs.Bitmap("assets/images/pillarRight.svg");
  // pillarRight.x = 115;
  // pillarRight.y = 27;
  // pillarRight.scaleX = 0.953;
  // pillarRight.scaleY = 1.06;
  // stage.addChild(pillarRight);

  // // 基礎ひだり
  // var baseLeft = new createjs.Bitmap("assets/images/baseLeft.svg");
  // baseLeft.x = 10;
  // baseLeft.y = 13;
  // baseLeft.scaleX = 0.97;
  // baseLeft.scaleY = 0.89;
  // stage.addChild(baseLeft);

  // // 基礎みぎ
  // var baseRight = new createjs.Bitmap("assets/images/baseRight.svg");
  // baseRight.x = 340;
  // baseRight.y = 200;
  // baseRight.scaleX = 0.99;
  // baseRight.scaleY = 0.89;
  // stage.addChild(baseRight);

  // // 屋根
  // var roofBase = new createjs.Bitmap("assets/images/roofBase.svg");
  // roofBase.x = 66;
  // roofBase.y = 253;
  // roofBase.scaleX = 0.95;
  // roofBase.scaleY = 0.95;
  // stage.addChild(roofBase);

  // // カップケーキのカップ
  // var secretBase = new createjs.Bitmap("assets/images/secretBase.svg");
  // secretBase.x = 129;
  // secretBase.y = 217;
  // secretBase.scaleX = 1;
  // secretBase.scaleY = 1;
  // stage.addChild(secretBase);

  // // カップケーキのスポンジ
  // var secretSponge = new createjs.Bitmap("assets/images/secretSponge.svg");
  // secretSponge.x = 94;
  // secretSponge.y = 3;
  // secretSponge.scaleX = 1;
  // secretSponge.scaleY = 1;
  // stage.addChild(secretSponge);

  // // カップケーキのいちご
  // var secretBerry = new createjs.Bitmap("assets/images/secretBerry.svg");
  // secretBerry.x = 386;
  // secretBerry.y = 606;
  // secretBerry.scaleX = 0.98;
  // secretBerry.scaleY = 1;
  // stage.addChild(secretBerry);

  // // はしごの手すり
  // var handrail = new createjs.Bitmap("assets/images/handrail.svg");
  // handrail.x = 106;
  // handrail.y = 27;
  // handrail.scaleX = 0.9;
  // handrail.scaleY = 0.925;
  // stage.addChild(handrail);

  // // 道
  // var road1 = new createjs.Bitmap("assets/images/road1.svg");
  // road1.x = 65;
  // road1.y = 64;
  // road1.scaleX = 0.924;
  // road1.scaleY = 0.936;
  // stage.addChild(road1);

  // // 屋根裏
  // var attic = new createjs.Bitmap("assets/images/attic.svg");
  // attic.x = 90;
  // attic.y = 19;
  // stage.addChild(attic);

  // // 1階の窓
  // var window = new createjs.Bitmap("assets/images/window.svg");
  // window.x = 76;
  // window.y = 42;
  // window.scaleX = 0.95;
  // window.scaleY = 0.951;
  // stage.addChild(window);

  // // 2階の窓
  // var window2 = new createjs.Bitmap("assets/images/window2.svg");
  // window2.x = 88;
  // window2.y = 31;
  // window2.scaleX = 0.96;
  // window2.scaleY = 0.95;
  // stage.addChild(window2);

  // tick イベントを監視します
  createjs.Ticker.on("tick", function () {
    // Stageの描画を更新します
    stage.update();
  });

  //----------------------------------------
  // マウスイベントを登録
  //----------------------------------------
  entrance.addEventListener("mousedown", handleMouseDown);
  knob.addEventListener("mousedown", handleMouseDown);
  knobBtn.addEventListener("mousedown", handleMouseDown);
  pillarLeft.addEventListener("mousedown", handleMouseDown);
  // pillarRight.addEventListener("mousedown", handleMouseDown);
  //baseLeft.addEventListener("mousedown", handleMouseDown);
  //baseRight.addEventListener("mousedown", handleMouseDown);
  // handrail.addEventListener("mousedown", handleMouseDown);
  // road1.addEventListener("mousedown", handleMouseDown);
  // roofBase.addEventListener("mousedown", handleMouseDown);
  // attic.addEventListener("mousedown", handleMouseDown);
  // secretBase.addEventListener("mousedown", handleMouseDown);
  // secretSponge.addEventListener("mousedown", handleMouseDown);
  // secretBerry.addEventListener("mousedown", handleMouseDown);
  // window.addEventListener("mousedown", handleMouseDown);
  // window2.addEventListener("mousedown", handleMouseDown);

  function handleMouseDown(event) {
    
    // currentTarget を使うことで、どれがマウスダウンされたか判別できる
    var piece = event.currentTarget;

    // 目標の対象を判定する
    var targetBase;

    // マウスダウンされたものの形状にあわせて、目標のシェイプを選定
    if (piece == entrance) {
      targetBase = bgEntrance;
    }
    if (piece == knob) {
      targetBase = bgKnob;
    }
    if (piece == knobBtn) {
      targetBase = bgKnobBtn;
    }
    if (piece == pillarLeft) {
      targetBase = bgPillarLeft;
    }
    // if (piece == baseLeft) {
    //   targetBase = bgBaseLeft;
    // }
    // if (piece == baseRight) {
    //   targetBase = bgBaseRight;
    // }
    // if (piece == handrail) {
    //   targetBase = bgHandrail;
    // }
    // if (piece == pillarRight) {
    //   targetBase = bgPillarRight;
    // }
    // if (piece == road1) {
    //   targetBase = bgRoad1;
    // }
    // if (piece == roofBase) {
    //   targetBase = bgRoofBase;
    // }
    // if (piece == attic) {
    //   targetBase = bgAttic;
    // }
    // if (piece == secretBase) {
    //   targetBase = bgSecretBase;
    // }
    // if (piece == secretSponge) {
    //   targetBase = bgSecretSponge;
    // }
    // if (piece == secretBerry) {
    //   targetBase = bgSecretBerry;
    // }
    // if (piece == window) {
    //   targetBase = bgWindow;
    // }
    // if (piece == window2) {
    //   targetBase = bgWindow2;
    // }

    // マウスが押された場所を保存しておく
    var mouseDownX = stage.mouseX - piece.x;
    var mouseDownY = stage.mouseY - piece.y;

    // ドラッグ関連イベントを登録
    piece.addEventListener("pressmove", handlePressMove);
    piece.addEventListener("pressup", handlePressUp);

    function handlePressMove(event) {
      updateMousePosition(); // マウスの座標に追随
    }

    function handlePressUp(event) {
      updateMousePosition(); // マウスの座標に追随

      // マウスアップされたときに、目標のシェイプとの当たり判定をとる
      var pt = targetBase.localToLocal(0, 0, piece);
      var isHit = piece.hitTest(pt.x, pt.y);
      console.log(isHit);
      if (isHit == true) {
        // 吸着させる
        piece.x = targetBase.x;
        piece.y = targetBase.y;
      }

      // ドラッグ関連イベントを解除
      piece.removeEventListener("pressmove", handlePressMove);
      piece.removeEventListener("pressup", handlePressUp);
    }

    // マウスのドラッグ処理
    function updateMousePosition() {
      // オブジェクトの座標はマウスの座標に追随
      // ただしマウスダウンした場所のズレを補正
      piece.x = stage.mouseX - mouseDownX;
      piece.y = stage.mouseY - mouseDownY;
    }
  }

  //----------------------------------------
  // 時間経過
  //----------------------------------------
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    // Stageの描画を更新
    stage.update();
  }
}
/*jshint esversion: 6 */
// .intro_desc letter-glowアニメーション
let textbox = document.querySelector('.bl_intro_desc');
let text = textbox.textContent;

// .bl_intro_desc内のテキストを1文字ずつspanタグで囲って文字を光らせる
let Spanizer = function() {
  let t;
  return {
      settings: {
          letters: $(".js-letters")
      },
      init: function() {
          t = this.settings, this.bindEvents(); // tに文字列を分割して入れる
      },
      bindEvents: function() {
          Spanizer.letters();
      },
      letters: function() {
          t.letters.html(function(t, n) { // nが文章
              let e = $.trim(n).split(""),// 文字列から空白を取り除く 
                  i = [];
              return e.forEach(function(t) {
                  " " !== t ? i.push("<span>" + t + "</span>") : i.push("<span>&nbsp;</span>");
              }), i.join("");
          });
      }
  };
}();

// Init Spanizer
Spanizer.init();
/*jshint esversion: 6 */

/******************************************************************************
  リンク
*******************************************************************************/
// a要素を一括取得する
const aElementList = document.querySelectorAll('a');

// 各a要素について処理する
aElementList.forEach((element) => {
  // aタグにtarget属性が存在しなかったらreturn
  if (element.hasAttribute('target') === false) {
    return;
  }

  // target属性_blankではなかったらreturn
  if (element.getAttribute('target') !== '_blank') {
    return;
  }

  // rel属性にnoopenerを付与する
  element.setAttribute('rel', 'noopener');
});

/******************************************************************************
  アコーディオン
*******************************************************************************/
let tabMenus,
		tabContents;
	// document.querySelectorAllでマッチしたclass名を持つ要素を取得
	tabMenus = document.querySelectorAll('.bl_intro_link');
	tabContents = document.querySelectorAll('.bl_intro_desc');
	
	// 取得した要素は配列のようなオブジェクトを保持しているため、
	// 要素の数の分だけループ処理をして値を取り出す
	for (let i = 0; i < tabMenus.length; i++) {
		// タブメニュークリック時
		tabMenus[i].addEventListener('click', function(e) {
			// リンクの無効化
			e.preventDefault();
			
			// すべてのタブメニューを非アクティブにする
			for (let i = 0; i < tabMenus.length; i++) {
				tabMenus[i].className = 'bl_intro_link';
			}
			// クリックしたタブメニューをアクティブにする
			this.className = 'bl_intro_link is-active';
			
			// タブコンテンツを非アクティブにする
			for (let i = 0; i < tabContents.length; i++) {
				tabContents[i].className = 'bl_intro_desc';
			}
			// タブメニューdata属性値と等しいid値を持つタブコンテンツを表示させる
			document.getElementById(this.dataset.id).className = 'bl_intro_desc is-active';

		});
	}

/*jshint esversion: 6 */
// ？が降ってくる
let questionTransform = [
  { transform: 'scale(0) translate3D(50%, 0, 0) rotate(-50deg)' },
  { transform: 'scale(5) translate3D(0, 3vh, 0) rotate(390deg)' }, // 真ん中でちょっと止まる
  { transform: 'scale(5) translate3D(0, 3vh, 0) rotate(400deg)' }, // 真ん中でちょっと止まる
  { transform: 'translate3D(100%, -8vh, 0) rotate(5deg)' }, // ぴょんぴょんする
  { transform: 'translate3D(-20%, 0, 0) rotate(10deg)' },
  { transform: 'translate3D(-250%, -8vh, 0) rotate(-5deg)' },
  { transform: 'scale(2) translate3D(-380%, -25vh, 0) rotate(35deg)' },
  { transform: 'scale(20) translate3D(0, 5vh, 0) rotate(23deg)' },
  { transform: 'scale(0) translate3D(0, 0, 0) rotate(-10deg)' }
];
let questionTiming = {
  delay: 1500,
  duration: 3500,
  iterations: 1,
  fill: 'forwards',
  easing: 'linear'
};
document.getElementById('question').animate(
  questionTransform,
  questionTiming
);

// 下からわく？たち
const floating = {
  chars: ['なんで','Why?','Warum?', 'Pourquoi?','왜?','为什么?'],

  init: function () {
    floating.container = document.createElement('div'); // 要素を生成する
    floating.container.className = 'in_my_head';
    const skip = document.querySelector('.skip');
    skip.after(floating.container); // .skipのあとにdivを追加する
    window.setInterval(floating.add, 100); // 0.1秒後にadd functionを実行する
  },

  add: function () {
    let element = document.createElement('span');
    floating.container.appendChild(element); // div要素の末尾にspanを追加する
    floating.animate(element); // Web Animations APIでspanをアニメーションさせる
  },

  animate: function (element) {
    let character = floating.chars[Math.floor(Math.random() * floating.chars.length)]; // Math.floor（切り捨てる。数値以下の最大の整数を返す）Math.random（浮動小数点の擬似乱数を返す0以上1未満）*floating.charsの文字列の長さ
    let duration = Math.floor(Math.random() * 35) + 1;
    let offset = Math.floor(Math.random() * (50 - duration * 1)) + 3;
    let size = 20 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(floating.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element); // spanの親要素からspanを削除する
  },
};
document.addEventListener('DOMContentLoaded', floating.init); // HTMLドキュメントの解析完了時

// アニメーションをSkipする
const skip = document.querySelector(".skip");
// skip.addEventListener('click', handleClick);
// const animate = document.querySelectorAll('#animate');

// function handleClick() {
//   animate.addEventListener('animationend', () => {
//     animate.classList.remove('active');
//   });
// };
const animation = document.querySelector('#animate');

// animation.addEventListener('animationend', () => {
//   animation.classList.remove('active');
// });

skip.addEventListener('click', () => {
  animation.classList.remove('active');
  let active = animation.classList.contains('active');
  if (active) {
    animation.classList.remove('active');
  } else {
    animation.classList.add('active');
  }
});
/*jshint esversion: 6 */

// Howcomeが現れて消える
let howcome = {
  init: function(){
    howcome.container = document.createElement('div');
    howcome.container.className = 'howcome';
    let parent = document.querySelector('ttl');
    document.parent.appendChild(howcome.container);
    window.setInterval(howcome.add, 100);
  },
  add: function(){
    let ttl = 'How Come?';
    howcome.container.innerHTML = ttl;
    howcome.animate(element);
    window.setTimeout(howcome.remove, duration * 1000, element);
  },
  animate: function(element){
    let howcomeTransform = [
        { transform: 'scale(0.1) translate3D(-10%, 0, 0)' },
        { transform: 'translate3D(-10%, 80vw, 0)', offset: 0.8 },
        { transform: 'scale(1) translate3D(-10%, 80vw, 0)' }
      ];
    let howcomeTiming = {
        delay: 1700,
        duration: 1800,
        iterations: 1,
        fill: 'forwards'
      };
    document.getElementById('howcome').animate(
        howcomeTransform,
        howcomeTiming
    );
  },
  remove: function (element) {
    element.parentNode.removeChild(element); // spanの親要素からspanを削除する
  },
};
// howcome.animate(
//   {
//     opacity: [
//       1.0,
//       0
//     ]
//   },
//   {
//     delay: 4000, 
//     duration: 2000,
//     fill: 'forwards',
//     easing: 'ease'
//   }
// );

// Howcomeが上から小さく現れて下に移動する
// let howcomeTransform = [
//   { transform: 'scale(0.1) translate3D(-10%, 0, 0)' },
//   { transform: 'translate3D(-10%, 80vw, 0)', offset: 0.8 },
//   { transform: 'scale(1) translate3D(-10%, 80vw, 0)' }
// ];

// let howcomeTiming = {
//   delay: 1700,
//   duration: 1800,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('howcome').animate(
//   howcomeTransform,
//   howcomeTiming
// );

// ？が降ってきて止まる
let questionTransform = [
  { transform: 'scale(0.1) translate3D(50%, 0, 0) rotate(-50deg)' }, // 右に傾きながらフレームの上から降る
  { transform: 'translate3D(0, 20vw, 0) rotate(160deg)' }, // 右にかたむきながらHowcomeと一緒におちる
  { transform: 'scale(5) translate3D(0, 10vw, 0) rotate(360deg)' }, // 大きくなって一回転しながら真ん中へ
  { transform: 'translate3D(0, 70vw, 0) rotate(-360deg)' }, // 元の大きさに戻って逆回転
  { transform: 'translate3D(40%, 75vw, 0) rotate(10deg)' }, // Howcome?の位置へ
  { transform: 'translate3D(30%, 70vw, 0) rotate(-80deg)' }, // 左へぽんぽん進む
  { transform: 'translate3D(20%, 75vw, 0) rotate(10deg)' },
  { transform: 'translate3D(10%, 70vw, 0) rotate(10deg)' },
  { transform: 'translate3D(0, 75vw, 0) rotate(10deg)' },
  { transform: 'translate3D(-10%, 70vw, 0) rotate(185deg)' },
  { transform: 'translate3D(-40%, 75vw, 0) rotate(-10deg)' }
];

let questionTiming = {
  duration: 6000,
  iterations: 1,
  fill: 'forwards',
  easing: 'linear'
};

document.getElementById('question').animate(
  questionTransform,
  questionTiming
);

const app = {

  // chars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'],

  chars: ['?','Why?','How Come?','Warum?','Wozu?','Pourquoi?','Comment ça se fait?','왜?','어째서?','为什么?','怎么会?'],

  init: function () {
    app.container = document.createElement('div'); // 要素を生成する
    app.container.className = 'animation-container';
    document.body.appendChild(app.container); // body要素の末尾にdivを追加する
    window.setInterval(app.add, 100); // 0.1秒後にadd functionを実行する
  },

  add: function () {
    let element = document.createElement('span');
    app.container.appendChild(element); // div要素の末尾にspanを追加する
    app.animate(element); // Web Animations APIでspanをアニメーションさせる
  },

  animate: function (element) {
    let character = app.chars[Math.floor(Math.random() * app.chars.length)]; // Math.floor（切り捨てる。数値以下の最大の整数を返す）Math.random（浮動小数点の擬似乱数を返す0以上1未満）*app.charsの文字列の長さ
    let duration = Math.floor(Math.random() * 15) + 1;
    let offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    let size = 10 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element); // spanの親要素からspanを削除する
  },

};

document.addEventListener('DOMContentLoaded', app.init); // HTMLドキュメントの解析完了時

// .intro_desc letter-glowアニメーション
let textbox = document.querySelector('.intro_desc');
let text = textbox.textContent;

// .intro_disc内のテキストを1文字ずつspanタグで囲って文字を光らせる
let Spanizer = function() {
  let t;
  return {
      settings: {
          letters: $(".js-letters")
      },
      init: function() {
          t = this.settings, this.bindEvents() // tに文字列を分割して入れる
      },
      bindEvents: function() {
          Spanizer.letters()
      },
      letters: function() {
          t.letters.html(function(t, n) { // nが文章
              let e = $.trim(n).split(""),// 文字列から空白を取り除く 
                  i = [];
              return e.forEach(function(t) {
                  " " !== t ? i.push("<span>" + t + "</span>") : i.push("<span>&nbsp;</span>")
              }), i.join("")
          })
      }
  }
}();

// Init Spanizer
Spanizer.init();

let promise = new Promise((resolve, reject) => { // #1
  resolve(howcome)
}, 1000)

promise.then((app) => { // #2
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(app)
    }, 500)
  })
}).then((question) => { // #3
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question)
    }, 500)
  })
}).catch(() => { // エラーハンドリング
  console.error('Something wrong!')
})

// // ？をマウスで動かす
// const moveQuestion = document.getElementById('question');

// // ページ上でマウスボタンを押したら、？の移動開始
// document.addEventListener('mousedown', () => {
//   // マウスの動きに合わせて？を動かす
//   document.addEventListener('mousemove', onMouseMove);

//   // ページ上でマウスボタンを離したら、？の移動を終了
//   document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', onMouseMove);
//   });
// });

// // マウスが動いたときの処理
// function onMouseMove(event) {
//   question.style.left = `${event.clientX - 100}px`;
//   question.style.top = `${event.clientY - 100}px`;
// }

// // ？をタップで動かす
// const log = document.querySelector('.log');

// // 画面上でタッチ位置を移動したら、ログを表示
// question.addEventListener('touchstart', () => {
//   moveQuestion.style.width = '5rem';
//   moveQuestion.style.height = '5rem';
//   moveQuestion.style.lineHeight = '1';
//   document.addEventListener('touchmove', (event));

//   document.addEventListener('touchend', () => {
//     document.removeEventListener('touchmove', (event));
//   });
// });

// moveQuestion.addEventListener('touchmove', () => {
//   const touch = event.changedTouches;

//   log.innerHTML = `
//    ${touch[0].pageX.toFixed(2)}<br>
//    ${touch[0].pageY.toFixed(2)}
//   `;
// });

// 柱ひだりが上から降ってくる
// let pillarLTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 90vw, 0)' }
// ];

// let pillarLTiming = {
//   delay: 7200,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('pillarLeft').animate(
//   pillarLTransform,
//   pillarLTiming
// );

// // 柱みぎが降ってくる
// let pillarRTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 90vw, 0)' }
// ];

// let pillarRTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('pillarRight').animate(
//   pillarRTransform,
//   pillarRTiming
// );

// // 屋根の基礎が降ってくる
// let roofBaseTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let roofBaseTiming = {
//   delay: 7200,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('roofBase').animate(
//   roofBaseTransform,
//   roofBaseTiming
// );

// // 基礎ひだりが上から降ってくる
// let baseLTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 115vw, 0)' }
// ];

// let baseLTiming = {
//   delay: 7200,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('baseLeft').animate(
//   baseLTransform,
//   baseLTiming
// );

// // 基礎みぎが降ってくる
// let baseRTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 115vw, 0)' }
// ];

// let baseRTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('baseRight').animate(
//   baseRTransform,
//   baseRTiming
// );

// // 屋根のナッツが降ってくる
// let roofNutsTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let roofNutsTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('roofNuts').animate(
//   roofNutsTransform,
//   roofNutsTiming
// );

// // 屋根のとびらが降ってくる
// let roofDoorTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let roofDoorTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('roofDoor').animate(
//   roofDoorTransform,
//   roofDoorTiming
// );

// // まんなかのとびらが降ってくる
// let middleDoorTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let middleDoorTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('middleDoor').animate(
//   middleDoorTransform,
//   middleDoorTiming
// );