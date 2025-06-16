function setWeather(type) {
  const weatherTypes = ["rainy", "snowy"];
  weatherTypes.forEach((t) => {
    const el = document.querySelector(`.weather-effect.${t}`);
    if (el) {
      el.style.display = t === type ? "block" : "none";
      if (t === "snowy")
        el.innerHTML = t === type ? generateSnowflakes(50) : "";
      if (t === "rainy") el.innerHTML = t === type ? generateRaindrops(60) : "";
    }
  });
}

function generateSnowflakes(count) {
  let flakes = "";
  for (let i = 0; i < count; i++) {
    flakes += `<div class="snowflake" style="left:${
      Math.random() * 100
    }%; animation-delay:${Math.random() * 5}s; animation-duration:${
      5 + Math.random() * 5
    }s;"></div>`;
  }
  return flakes;
}

function generateRaindrops(count) {
  let drops = "";
  for (let i = 0; i < count; i++) {
    drops += `<div class="raindrop" style="left:${
      Math.random() * 100
    }%; animation-delay:${Math.random() * 2}s; animation-duration:${
      1 + Math.random()
    }s;"></div>`;
  }
  return drops;
}
