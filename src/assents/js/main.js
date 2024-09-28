document.getElementById('love-match-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    
    var totalLength = name1.length + name2.length;
    
    var percentage = (totalLength % 100);

    var random = Math.floor(Math.random() * 10);
    
    document.getElementById('result').textContent = `${percentage+random}%`;
});