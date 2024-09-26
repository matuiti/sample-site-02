class OrderAnimation {
    constructor(sectionEl, firstEl, secondEl) {
      this.sectionEl = sectionEl; // セクションのクラス名
      this.firstEl = firstEl; // 先にアニメーションする要素
      this.secondEl = secondEl; // 後にアニメーションする要素
      this.init();
    }
  
    init() {
    //   const timeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: this.sectionEl,
    //       start: "top 80%", 
    //       toggleActions: "play none none none" 
    //     }
    //   });
  
      const timeline = gsap.timeline();
      timeline
        .to(`${this.sectionEl} ${this.firstEl}`, { opacity: 1, duration: 1 })
        .to(`${this.sectionEl} ${this.secondEl}`, { opacity: 1, duration: 1 }, "-=0.5");
    }
  }