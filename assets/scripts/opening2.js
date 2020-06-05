/*jshint esversion: 6 */

// ？が降ってくる
let questionTransform = [
  { transform: 'scale(0.1) translate3D(50%, 0, 0) rotate(-50deg)' }, // 右に傾きながらフレームの上から降る
  { transform: 'translate3D(0, 20vh, 0) rotate(160deg)' }, // 右にかたむきながらHowcomeと一緒におちる
  { transform: 'scale(5) translate3D(0, 10vh, 0) rotate(360deg)' }, // 大きくなって一回転しながら真ん中へ
  { transform: 'translate3D(0, 20vh, 0) rotate(-360deg)' }, // 元の大きさに戻って逆回転
  { transform: 'translate3D(40%, 25vh, 0) rotate(10deg)' }, // Howcome?の位置へ
  { transform: 'translate3D(30%, 30vh, 0) rotate(-80deg)' }, // 左へぽんぽん進む
  { transform: 'translate3D(20%, 35vh, 0) rotate(10deg)' },
  { transform: 'translate3D(10%, 25vh, 0) rotate(10deg)' },
  { transform: 'scale(2) translate3D(0, 15vh, 0) rotate(10deg)' },
  { transform: 'scale(3) translate3D(-10%, 10vh, 0) rotate(185deg)' },
  { transform: 'scale(0) translate3D(-40%, 20vh, 0) rotate(-10deg)' }
];
let questionTiming = {
  duration: 6000,
  iterations: 1,
  fill: 'forwards',
  easing: 'ease-in'
};
document.getElementById('question').animate(
  questionTransform,
  questionTiming
);