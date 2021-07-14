// document.querySelector().getBoundingClientRect();
const isInViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.x >= 0 &&
    rect.y >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleRevealAnimation = (e) => {
  document.querySelectorAll(".box").forEach((node) => {
    if (isInViewPort(node)) {
      node.classList.add("tada");
    } else {
      node.classList.remove("tada");
    }
  });
};

document.addEventListener("scroll", handleRevealAnimation);
