const animationVSInterval = (selector, duration) => {
  const runner = document.querySelector(selector);
  const runnerWidth = runner.getBoundingClientRect().width;
  const parentPadding = parseInt(
    getComputedStyle(runner.parentNode).paddingLeft
  );
  const parentWidth = runner.parentNode.clientWidth - 2 * parentPadding;

  let left = 0;
  let delta = (parentWidth - runnerWidth) / (duration * 100);

  const move = () => {
    left += delta;
    if (left + runnerWidth > parentWidth || left < 0) {
      delta *= -1;
    } else {
      runner.style.translate = left + "px";
    }
  };

  setInterval(() => move(), 10);
};

const animationRFA = (selector, duration) => {
  const runner = document.querySelector(selector);
  const runnerWidth = runner.getBoundingClientRect().width;
  const parentPadding = parseInt(
    getComputedStyle(runner.parentNode).paddingLeft
  );
  const parentWidth = runner.parentNode.clientWidth - 2 * parentPadding;
  let range = parentWidth - runnerWidth;

  const move = (progress) => {
    runner.style.translate = progress + "px";
  };
  let start = Date.now();
  let dir = 1;

  requestAnimationFrame(function rafAnimation() {
    let time = Date.now();
    let timeFract = (time - start) / duration;
    if (timeFract >= 1 && dir > 0) {
      timeFract = 1;
    } else if (timeFract >= 1 && dir < 0) {
      timeFract = 0;
    }
    let progress = dir > 0 ? range * timeFract : range - range * timeFract;
    if (timeFract === 1) {
      start = time;
      dir = -1;
    }
    if (timeFract === 0) {
      dir = 1;
      start = time;
      progress = 0;
    }

    move(progress);

    requestAnimationFrame(rafAnimation);
  });
};

window.onload = () => {
  animationVSInterval("#rect_setInterval", 2);
  animationRFA("#rect_animationFrame", 2000);
};
