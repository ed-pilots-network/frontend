<header>
    <h1><a href="/eddb2">EDDB</a></h1>
    <nav>
        <ul>
            <li><?= anchor('systems', 'Systems') ?></li>
            <li><?= anchor('stations', 'Stations') ?></li>
            <li><?= anchor('bodies', 'Bodies') ?></li>
            <li><?= anchor('trading', 'Trading') ?></li>
            <li><a href="#">Factions</a></li>
            <li><a href="#">Attractions</a></li>
            <li><a href="#">Commodities</a></li>
        </ul>
    </nav>
</header>
<main>
    <section class="hero">
        <h2>Trading</h2>
        <style>
            h2 {
                text-align: center;
                font-size: 50px;
                color: blue;
            }
            .button-container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
            .button {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                margin: 20px;
                border: 1px solid black;
                border-radius: 5px;
                background-color: white;
                color: blue;
                text-align: center;
                text-decoration: none;
                font-weight: bold;
                width: 20%;
                min-height: 100px;
            }
            .button:hover {
                background-color: black;
                color: white;
            }
        </style>
        <div class="button-container">
            <a href="#" class="button">Single Hop Trade</a>
            <a href="#" class="button">Multi Hop Trade Route</a>
            <a href="#" class="button">Loop Trade Route</a>
            <a href="#" class="button">Find Commodity</a>
        </div>
    </section>
</main>