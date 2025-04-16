// Variables to track price changes
let previousPrice = null;

// Function to format price with commas and no decimal places
function formatPrice(price) {
    return parseFloat(price).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Function to update the UI with new price data
function updateUI(data) {
    const priceElement = document.getElementById('price');
    const priceContainer = document.getElementById('price-container');
    const priceChangeElement = document.getElementById('price-change');

    // Get the current price
    const currentPrice = parseFloat(data.price);

    // Update the price display
    const formattedPrice = formatPrice(currentPrice);
    priceElement.textContent = '$' + formattedPrice;

    // Přidání atributu data-length podle délky ceny (pro responsivní velikost textu)
    priceElement.setAttribute('data-length', formattedPrice.length);

    // Get current timestamp
    const now = new Date();
    const timestamp = now.toLocaleTimeString();

    // Log information to console - API, čas a cena s desetinnou čárkou
    // Formátování ceny s desetinnými místy pro konzoli
    const priceWithDecimals = parseFloat(currentPrice).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    console.log(`Použité API z Coinbase, poslední aktualizace: ${timestamp} - Cena: $${priceWithDecimals}`);

    // Show price change indicator if we have a previous price
    if (previousPrice !== null) {
        // Remove existing animation classes
        priceContainer.classList.remove('price-up', 'price-down');
        // Resetujeme třídy pro cenu - bude nastaveno znovu

        // Determine if price went up or down
        // Šipky odstraněny
        priceElement.className = 'price-text price-static-color';
    } else {
        // Initial state - no arrow or dash
        priceElement.className = 'price-text price-static-color';
    }

    // Update previous price for next comparison
    previousPrice = currentPrice;
}

// Function to fetch BTC price from Coinbase API
async function fetchBTCPrice() {
    try {
        // Fetch the current BTC-USD spot price
        const response = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot');

        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Check if data has expected structure
        if (!data || !data.data || !data.data.amount) {
            throw new Error('Neplatná data z API');
        }

        // Create data object
        const combinedData = {
            price: data.data.amount
        };

        // Update the UI with the new data
        updateUI(combinedData);
    } catch (error) {
        console.error('Nefunguje načítání ceny z API Coinbase:', error.message);
        document.getElementById('price').textContent = 'Chyba při načítání ceny';
    }
}

// Initial fetch when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initial fetch
    fetchBTCPrice();

    // Set up interval to fetch price every 3 seconds
    setInterval(fetchBTCPrice, 3000);
});
