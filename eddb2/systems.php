<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EDDB - Systems</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>EDDB</h1>
        <nav>
            <ul>
                <li><a href="/eddb2/systems.php">Systems</a></li>
                <li><a href="/eddb2/stations.php">Stations</a></li>
                <li><a href="#">Attractions</a></li>
                <li><a href="#">Commodities</a></li>
                <li><a href="#">Factions</a></li>
                <li><a href="#">Bodies</a></li>
                <li><a href="#">Trading</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h2>System Search</h2>

            <form action="systems.php" method="GET">
                <label for="system">Search for a system:</label>
                <input type="text" id="system" name="system">
                <button type="submit">Search</button>
            </form>
        </section>

        <section class="filters">
  <h2>Filters</h2>
  <form>
    <div class="filter-row">
      <div class="filter-group">
        <label for="government">Government:</label>
        <select id="government" name="government">
          <option value="all">All</option>
          <option value="anarchy">Anarchy</option>
          <option value="communist">Communist</option>
          <option value="confederacy">Confederacy</option>
          <option value="corporate">Corporate</option>
          <option value="cooperative">Cooperative</option>
          <option value="democracy">Democracy</option>
          <option value="dictatorship">Dictatorship</option>
          <option value="feudal">Feudal</option>
          <option value="imperial">Imperial</option>
          <option value="patronage">Patronage</option>
          <option value="prison colony">Prison Colony</option>
          <option value="theocracy">Theocracy</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="allegiance">Allegiance:</label>
        <select id="allegiance" name="allegiance">
          <option value="all">All</option>
          <option value="alliance">Alliance</option>
          <option value="empire">Empire</option>
          <option value="federation">Federation</option>
          <option value="independent">Independent</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="permit">Needs permit:</label>
        <select id="permit" name="permit">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>

    <div class="filter-row">
      <div class="filter-group">
        <label for="economy">Economy:</label>
        <select id="economy" name="economy">
          <option value="all">All</option>
          <option value="agriculture">Agriculture</option>
          <option value="colony">Colony</option>
          <option value="extraction">Extraction</option>
          <option value="high tech">High Tech</option>
          <option value="industrial">Industrial</option>
          <option value="military">Military</option>
          <option value="refinery">Refinery</option>
          <option value="service">Service</option>
          <option value="terraforming">Terraforming</option>
          <option value="tourism">Tourism</option>
          <option value="prison">Prison</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="security">Security:</label>
        <select id="security" name="security">
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="stations">Having stations:</label>
        <select id="stations" name="stations">
          <option value="station">Having stations</option>
          <option value="planetary">Having planetary</option>
          <option value="orbital">Having orbital</option>
        </select>
      </div>
      <div class filter-row>
    </form>
        </section>
    </main>
</body>
</html>
