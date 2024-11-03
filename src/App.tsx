import React, { useEffect, useState } from 'react';

const App = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const loadWords = async () => {
            try {
                // Fetch the article.txt file from the public directory
                const response = await fetch('/article.txt');
                if (!response.ok) {
                    throw new Error('Failed to load the file');
                }
                const text = await response.text();

                // Split the text into words and update the state
                const wordList = text.match(/\b\w+\b/g) || [];
                setWords(wordList);
            } catch (error) {
                console.error('Error fetching the file:', error);
            }
        };

        loadWords();
    }, []);

    return (
        <div>
            <h1>Words from the Article</h1>
            <ul>
                {words.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

