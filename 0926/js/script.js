window.addEventListener("load", ()=>{

  const grid = new Isotope("section",{
    itemSelector : "article", 
    columnWidth : "article",
    transitionDuration : " 0.5s"
  });

const btns = document.querySelector("main ul li")
console.log(btns)

//for(let i = 0; i < btns.clientHeight; i++){
  for( let el of btns){
    //클릭이벤트
    el.addEventListener("click",(e)=>{ //e(event) = 이벤트 객체
      e.preventDefault();

      //getattrtibute() 태그의 arrtibute 속성값을 읽어오는 메소드
      //e.currentarget = 이벤트가 발생된 요소
      const sort = e.currentTarget.querySelector("a")
      getAttribute("href");
      //클릭이벤트가 발생한 li 요소에 자손 요소중 a 요소를 선택하여 href속성값을 읽어 sort에 할당


      //gird에 저장된 결과값을 불러와 재정렬 기능 연결
      grid.arrange({
        filter : sort
      })

      //모든 버튼의 갯수만큼 반복을 돌림
      for(let el of btns){
        el.classList.remove("on")
      }
      e.currentTarget.classList.add("on")
    })
}

})
