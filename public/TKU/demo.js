function changeNav(index) {
  var p = document.getElementById("section");
  console.log(p);
  switch (index) {
    case 1:
      p.innerHTML = '<iframe width=100% height=100% src="../W01/Intro.html">';
      p.style.backgroundColor = " rgba(255, 255, 255, 0.8);";
      break;

    case 2:
      p.innerHTML = '<iframe width=100% height=100% src="../W01/pokemon.html">';
      p.style.backgroundColor = " rgba(255, 255, 255, 0.8);";
      break;

    case 3:
      p.innerHTML =
        '<iframe width=100% height=100% src="../W02/blog/blog.html">';
      p.style.backgroundColor = " rgba(255, 255, 255, 0.8);";
      break;

    case 4:
      p.innerHTML = '<iframe width=100% height=100% src="../W02/imageGallery/imageGallery.html">';
      p.style.backgroundColor = " rgba(255, 255, 255, 0.8);";
      break;

    case 5:
      p.innerHTML = '<iframe width=100% height=100% src="../W03/div.html">';
      p.style.backgroundColor = " rgba(255, 255, 255, 0.8);";
      break;

    case 6:
      p.innerHTML = '<iframe width=100% height=100% src="../W04/nav.html">';
      p.style.backgroundColor = "a rgba(255, 255, 255, 0.8);";
      break;

      case 7:
        p.innerHTML = '<iframe width=100% height=100% src="../w05-bootstrap/nav.html">';
        p.style.backgroundColor = "rgba(255, 255, 255, 0.8);";
        break;

        case 8:
            p.innerHTML = '<iframe width=100% height=100% src="../W06/index.html">';
            p.style.backgroundColor = " rgba(255, 255, 255, 0.8);";
            break;

            case 9:
                p.innerHTML = '<iframe width=100% height=100% src="../W08/index.html">';
                p.style.backgroundColor = " rgba(255, 255, 255, 0.8);";
                break;
  }
}