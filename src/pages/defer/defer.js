const startTime = Date.now();

function loadScript(src, name) {
  const script = document.createElement("script");

  const container = document.createElement("h4");
  container.setAttribute("id", name);

  script.onload = () => {
    container.innerText = `Script "${name}" loaded after ${
      Date.now() - startTime
    } ms`;
    document.body.append(container);
  };

  script.src = src;
  script.async = false;
  script.defer = true;
  document.body.append(script);
}

loadScript("./../../scripts/small.js", "1st script");

loadScript("https://code.jquery.com/jquery-3.7.1.js", "2nd script");

loadScript("https://code.jquery.com/jquery-3.7.1.slim.min.js", "3rd script");
