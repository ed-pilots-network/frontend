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
                <li><a href="#">Systems</a></li>
                <li><a href="#">Stations</a></li>
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

            <form action="stations.php" method="GET">
                <label for="refsys">Reference system:</label>
                <input type="text" id="refsys" name="refsys">
                <button type="submit">Search</button>
            </form>
        </section>

        <section class="filters">
  <h2>Filters</h2>
  <form>
    <div class="filter-row">
      <div class="filter-group">
        <label for="ship">Sells ship:</label>
        <select id="ship" name="ship">
          <option value="adder">Adder</option>
          <option value="alliance challenger">Alliance Challenger</option>
          <option value="alliance chieftain">Alliance Chieftain</option>
          <option value="alliance crusader">Alliance Crusader</option>
          <option value="anaconda">Anaconda</option>
          <option value="asp explorer">Asp Explorer</option>
          <option value="asp scout">Asp Scout</option>
          <option value="beluga liner">Beluga Liner</option>
          <option value="cobra mk.3">Cobra MK.III</option>
          <option value="diamondback explorer">Diamondback Explorer</option>
          <option value="diamondback scout">Diamondback Scout</option>
          <option value="dolphin">Dolphin</option>
          <option value="eagle mk.2">Eagle MK.III</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="landingpad">Minimum landing pad:</label>
        <select id="landingpad" name="landingpad">
          <option value="none">None</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
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
