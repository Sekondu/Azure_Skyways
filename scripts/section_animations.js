const animatedSelectors = [
  'section',
  '.part_one',
  '.part_two',
  '.part_three',
  '.part_four',
  '.part_five',
  '.all_trips',
  '.about-us',
  '.about-content',
  '.team-container',
  '.left_section',
  '.right_section',
  '.go_back'
];

const elements = [...new Set(animatedSelectors
  .flatMap(selector => Array.from(document.querySelectorAll(selector))))];

if (elements.length) {
  elements.forEach(el => el.classList.add('animate-section'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  elements.forEach(el => observer.observe(el));
}
