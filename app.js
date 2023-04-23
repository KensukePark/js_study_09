const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  //스크롤 높이
  const navHeight = navbar.getBoundingClientRect().height;
  //네비게이션 바 높이
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
    //스크롤을 네비게이션바이상 내리면 네비게이션 상단고정
  } else {
    navbar.classList.remove("fixed-nav");
  }
  //다시 위로올라가면 네비게이션바 삭제

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } //500이상 내리면 맨위로 이동하는 버튼 생성
  else {
    topLink.classList.remove("show-link");
  } //다시 올라가면 버튼 삭제
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //창이 새로고침 되는걸 막기위해 preventDefault
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // 맨앞에 #이 있으므로 slice로 #을 뺌
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    //해당 element 위치 높이 - 네비게이션바 높이

    if (!fixedNav) {
      position = position - navHeight;
    } //네비게이션바가 고정되지 않았다면
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    //네비게이션바가 세로로 길때(세로로 길때 세로모드)
    //
    window.scrollTo({
      left: 0,
      top: position
    });
    linksContainer.style.height = 0;
    //스크롤 이동후 네비게이션바 닫아줌
  });
});
