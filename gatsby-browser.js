exports.onRouteUpdate = ({ location }) => {
const navBar = document.getElementsByTagName("nav")[0]
  if (location.pathname.includes(`work`)) {
    navBar.style.backgroundColor = "#ffffff"
  } else if (location.pathname.includes(`blog`)) {
    navBar.style.backgroundColor = "#ffffff"
  } else {
    navBar.style.backgroundColor = "#f7f7f7"
  }
}
