const options = {
  rootMargin: "200px",
  threshold: [0],
};

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("is in viewport!");
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
      // observer.unobserve(entry);❌
      // io.unobserve(entry.target);❌
    }
  });
}, options);

document.querySelectorAll(".image").forEach((node) => {
  io.observe(node);
});
