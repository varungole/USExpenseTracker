function navigateToView()
{
    window.location.href = "http://127.0.0.1:5500/view.html"
}

function navigateToHome()
{
    window.location.href = "http://127.0.0.1:5500/index.html"
}

async function getRequest() {
    const response = await fetch("http://localhost:4080/");
    const expenses = await response.json();
    console.log(expenses)
}