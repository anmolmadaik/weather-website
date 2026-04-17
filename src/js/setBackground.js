export function set_background(id) {
  const elem = document.getElementsByClassName("home-container")[0];

  switch (true) {
    case id.startsWith("2"):
      elem.style["background-image"] = 'url("../src/assets/thunderstorm.gif")';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("3"):
      elem.style["background-image"] = 'url("../src/assets/drizzle.gif")';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("5"):
      elem.style["background-image"] = 'url("../src/assets/rain.gif")';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("6"):
      elem.style["background-image"] = 'url("../src/assets/snow.gif")';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("7"):
      elem.style["background-image"] = 'url("../src/assets/atmosphere.gif")';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("800"):
      elem.style["background-image"] = 'url("../src/assets/clear.gif")';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("80"):
      elem.style['background-image'] = 'url("../src/assets/clouds.gif")';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    default:
      elem.style.background = 'linear-gradient(to bottom, #e3f2fd, #ffffff)';
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
  }
}
