const quotes = [
    { text: "Discipline is doing it even when you dont feel like it.", author: "Unknown" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Small progress is still progress.", author: "Anonymous" },
    { text: "Build. Break. Fix. Repeat.", author: "Developer Motto" },
    { text: "Dream big, work hard, stay consistent.", author: "Motivation Daily" },
    { text: "Your future is written in your code.", author: "Tech Wisdom" },
    { text: "Code is like humor when you have to explain it, it's bad.", author: "Corey Haines" },
    { text: "Programming is not about what you know its about what you can figure out.", author : "Chris PIne"},
    { text: "The expert in anything was once a beginner.", author: "Helen Hayes"},
    { text: "Dream big. Start small. Act now.", author: "Robin Sharma"},
    { text: "Hard work beats talent when talent does not work hard.", author: "Tim Notke"},
    { text: "Work silently, let success make the noise.", author: "Frank Ocean"},
    { text: "Act as if what you do makes a difference. It does.",author: "William James"},
    { text: "Quality is not an act, it is a habit.",author: "Aristotle"},
    { text: "The only way to do great work is to love what you do.",author: "Steve Jobs"},


];

const colors = [
    "#667eea",
    "#764ba2",
    "#ff6a00",
    "#ee0979",
    "#11998e",
    "#38ef7d",
    "#fc466b",
    "#3f5efb",
    "#FF6B6B",
    "#2C3E50",
    "#F39C12", 
    


    
];

const btn = document.getElementById("btn");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

btn.addEventListener("click", () => {

    // Fade out
    quoteText.style.opacity = 0;
    authorText.style.opacity = 0;

    setTimeout(() => {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        const randomColor = Math.floor(Math.random() * colors.length);

        quoteText.textContent = `"${quotes[randomQuote].text}"`;
        authorText.textContent = `— ${quotes[randomQuote].author}`;

        document.body.style.background = colors[randomColor];

        // Fade in
        quoteText.style.opacity = 1;
        authorText.style.opacity = 1;
    }, 400);

});