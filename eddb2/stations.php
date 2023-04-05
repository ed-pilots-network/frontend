<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EDDB - Stations</title>
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
            <h2>Stations</h2>

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
        <label for="facilities">Has facilities:</label>
        <select id="facilities" name="facilities">
          <option value="all">All</option>
          <option value="refuel">Refuel</option>
          <option value="repair">Repair</option>
          <option value="restock">Restock</option>
          <option value="outfitting">Outfitting</option>
          <option value="shipyard">Shipyard</option>
          <option value="material trader">Material Trader</option>
          <option value="technology broker">Technology Broker</option>
          <option value="interstellar factors">Interstellar Factors</option>
          <option value="carrier vendor">Carrier Vendor</option>
          <option value="carrier admin">Carrier Administration</option>
          <option value="universal cartographics">Universal Cartographics</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="economy">Economy:</label>
        <select id="economy" name="economy">
          <option value="none">None</option>
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
        <label for="carriers">Include Carriers:</label>
        <select id="carriers" name="carriers">
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
