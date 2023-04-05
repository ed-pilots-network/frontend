<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EDDB - Bodies</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1><a href="/eddb2">EDDB</a></h1>
        <nav>
            <ul>
                <li><a href="/eddb2/systems.php">Systems</a></li>
                <li><a href="/eddb2/stations.php">Stations</a></li>
                <li><a href="/eddb2/bodies.php">Bodies</a></li>
                <li><a href="#">Commodities</a></li>
                <li><a href="#">Factions</a></li>
                <li><a href="#">Attractions</a></li>
                <li><a href="#">Trading</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h2>Bodies</h2>

            <form action="stations.php" method="GET">
                <label for="system">Reference system:</label>
                <input type="text" id="system" name="system">
                <button type="submit">Search</button>
            </form>
        </section>

        <section class="filters">
  <h2>Filters</h2>
  <form>
    <div class="filter-row">
      <div class="filter-group">
        <label for="mats">Material finder:</label>
        <select id="mats" name="mats">
          <option value="antimony">Antimony</option>
          <option value="arsenic">Arsenic</option>
          <option value="cadmium">Cadmium</option>
          <option value="carbon">Carbon</option>
          <option value="chromium">Chromium</option>
          <option value="germanium">Germanium</option>
          <option value="iron">Iron</option>
          <option value="manganese">Manganese</option>
          <option value="mercury">Mercury</option>
          <option value="molybdenum">Molybdenum</option>
          <option value="nickel">Nickel</option>
          <option value="niobium">Niobium</option>
          <option value="phosphorus">Phosphorus</option>
          <option value="polonium">Polonium</option>
          <option value="ruthenium">Ruthenium</option>
          <option value="selenium">Selenium</option>
          <option value="sulphur">Sulphur</option>
          <option value="technetium">Technetium</option>
          <option value="tellerium">Tellerium</option>
          <option value="tin">Tin</option>
          <option value="tungsten">Tungsten</option>
          <option value="vanadium">Vanadium</option>
          <option value="yttrium">Yttrium</option>
          <option value="zinc">Zinc</option>
          <option value="zicronium">Zicronium</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="reserve">System Reserve:</label>
        <select id="reserve" name="reserve">
          <option value="all">All</option>
          <option value="pristine">Pristine</option>
          <option value="major">Major</option>
          <option value="common">Common</option>
          <option value="low">Low</option>
          <option value="depleted">Depleted</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="ring">Ring type:</label>
        <select id="ring" name="ring">
          <option value="none">None</option>
          <option value="icy">Icy</option>
          <option value="metal rich">Metal Rich</option>
          <option value="metallic">Metallic</option>
          <option value="rocky">Rocky</option>
        </select>
      </div>
    </div>

    <div class="filter-row">
      <div class="filter-group">
        <label for="populated">System is populated:</label>
        <select id="populated" name="populated">
          <option value="any">Any</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div class filter-row>
    </form>
        </section>
    </main>
</body>
</html>
