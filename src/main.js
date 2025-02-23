const startTime = Date.now();

const domContentContainer = document.createElement("h3");
domContentContainer.setAttribute("id", "domContentLoaded");
domContentContainer.innerText = "DOMContentLoaded event";

function loadScript(src, name, showOnlyConsole) {
  const script = document.createElement("script");

  const container = document.createElement("h4");
  container.setAttribute("id", name);

  script.onload = () => {
    if (showOnlyConsole) {
      return;
    }

    container.innerText = `Script "${name}" loaded after ${
      Date.now() - startTime
    } ms`;
    document.body.append(container);
  };

  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript("src/scripts/small.js", "1st script");

loadScript("https://code.jquery.com/jquery-3.7.1.js", "2nd script");

loadScript("https://code.jquery.com/jquery-3.7.1.slim.min.js", "3rd script");

loadScript("src/scripts/helper.js", "4th script", true);
