window.onload = function() {
  const tabLinks = document.querySelectorAll('.tabbar a');
  tabLinks.forEach(function(link) {
    // console.log(link);
    link.addEventListener('click', function(event) {
      event.preventDefault();
      // 1. 取消之前的selected
      // 2. 点哪个a 就加selected 
      document.querySelector('.selected')
        .classList.remove('selected');
      this.classList.add('selected')
    }, false);
  })

  // 先拿到 swiper 的数据
  // bannerList 数据
  // 真的数据  真的做出
  // XMLHttpRequest 太难了 现代版fetch  
  fetch('http://localhost:3000/banner')
    .then(data => data.json())
    .then(data => {
      console.log(data);
    })
}