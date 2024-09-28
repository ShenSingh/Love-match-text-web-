document.getElementById('love-match-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the names from the input fields
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    
    // Calculate the total length of both names
    let totalLength = name1.length + name2.length;
    
    // Calculate the percentage (total length as a percentage of 100)
    let percentage = (totalLength % 100); // To ensure it doesn't exceed 100
    
    // Display the result
    document.getElementById('result').textContent = `Your love match percentage is: ${percentage}%`;
});