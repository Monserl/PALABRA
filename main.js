document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const findBtn = document.getElementById('find-btn');
    const resultDisplay = document.getElementById('result');

    findBtn.addEventListener('click', function() {
        const text = inputText.value.trim();
        
        if (!text) {
            resultDisplay.innerHTML = `
                <div class="welcome-message">
                    <img src="https://cdn-icons-png.flaticon.com/512/4185/4185688.png" alt="Error" class="welcome-img">
                    <p>Por favor ingresa algún texto</p>
                </div>
            `;
            return;
        }
        
        const longestWord = findLongestWord(text);
        displayResult(longestWord, text);
    });


    function findLongestWord(text) {
        // dividir el texto en palabras individuales
        const words = text.split(' ');
        
        // inicializar la palabra más larga
        let longestWord = '';
        
        // deslizar por cada palabra
        for (let i = 0; i < words.length; i++) {
            const currentWord = words[i];
            
            // comparar longitudes
            if (currentWord.length > longestWord.length) {
                // actualizar la palabra más larga
                longestWord = currentWord;
            }
        }
        
        // devolver la palabra más larga
        return longestWord;
    }

    function displayResult(word, originalText) {
        // limpiar palabra de signos de puntuación
        const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        
        // resaltar la palabra en el texto original
        const highlightedText = originalText.replace(
            new RegExp(`\\b${word}\\b`, 'g'), 
            `<span class="highlight">${word}</span>`
        );
        
        resultDisplay.innerHTML = `
            <div class="word-result">
                <p>La palabra más larga es:</p>
                <div class="word-text">${cleanedWord}</div>
                <div class="word-length">${cleanedWord.length} letras</div>
                
                <div style="margin-top: 30px; background: rgba(0,0,0,0.1); padding: 15px; border-radius: 8px;">
                    <p style="font-size: 0.9rem; margin-bottom: 10px;">Texto original:</p>
                    <p style="font-style: italic;">${highlightedText}</p>
                </div>
            </div>
        `;
    }
});