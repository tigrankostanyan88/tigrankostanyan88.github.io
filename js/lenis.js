function scrollLens() {

  const lenis = new Lenis({
    autoRaf: true,
    duration: 3
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll');
}

scrollLens();


