import thunderstorm from "../src/assets/thunderstorm.gif";
import drizzle from "../src/assets/drizzle.gif";
import rain from "../src/assets/rain.gif";
import snow from "../src/assets/snow.gif";
import atmosphere from "../src/assets/atmosphere.gif";
import clear from "../src/assets/clear.gif";
import cloud from "../src/assets/clouds.gif";


export function set_background(id) {
  const elem = document.getElementsByClassName("home-container")[0];

  switch (true) {
    case id.startsWith("2"):
      elem.style["background-image"] = `url(${thunderstorm})`;
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("3"):
      elem.style["background-image"] = `url(${drizzle})`;
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("5"):
      elem.style["background-image"] = `url(${rain})`;
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("6"):
      elem.style["background-image"] = `url(${snow})`;
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("7"):
      elem.style["background-image"] = `url(${atmosphere})`;
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("800"):
      elem.style["background-image"] = `url(${clear})`;
      elem.style["background-size"] = 'cover';
      elem.style["background-position"] = 'center';
      elem.style["background-repeat"] = 'no-repeat';
      elem.style["background-attachment"]= 'fixed'; 
      break;
    case id.startsWith("80"):
      elem.style['background-image'] = `url(${cloud})`;
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
