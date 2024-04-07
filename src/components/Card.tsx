import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function OutlinedCard() {
  const [wordIndex, setWordIndex] = React.useState(0); // State to store the index of the current word

  // Function to update the word index daily
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random index within the range of wordData length
      const newIndex = Math.floor(Math.random() * wordData.length);
      setWordIndex(newIndex);
    }, 60 * 60 * 1000); // Update Variable, (update every hour) (1 hours 60 minutes * 60 seconds * 1000 milliseconds) = 1 hour.

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const currentWord = wordData[wordIndex];

  const cardStyle = {
    backgroundColor: 'black',
    width: '467px', // Set a fixed width for the card
  };
  const handleLearnMore = () => {
    window.open(`https://www.google.com/search?q=${currentWord.clean_word}`, '_blank');
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={cardStyle}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div" sx={{ color: 'white' }}>
            {currentWord.word}
          </Typography>
          <Typography sx={{ mb: 1.5, color: 'white' }}>
            {currentWord.partOfSpeech}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white', wordWrap: 'break-word' }}>
            {currentWord.definition}
            <br /> 
            {currentWord.example}
          </Typography>
        </CardContent>
        <Button size="small" onClick={handleLearnMore}>Learn More</Button>
      </Card>
    </Box>
  );
}


const wordData = [
  {
    word: <React.Fragment>elec{bull}tro{bull}mag{bull}net{bull}ism</React.Fragment>,
    definition: 'the branch of science concerned with the phenomena of electricity and magnetism.',
    partOfSpeech: 'noun',
    example: '"the study of electromagnetism"',
    clean_word: 'electromagnetism'
  },
  {
    word: <React.Fragment>ap{bull}plied {bull}sci{bull}ence</React.Fragment>,
    definition: 'the application of scientific knowledge to practical purposes, especially in industry.',
    partOfSpeech: 'noun',
    example: '"the principles of applied science"',
    clean_word: 'applied science'
  },
  {
    word: <React.Fragment>com{bull}pu{bull}ta{bull}tion{bull}al {bull}think{bull}ing</React.Fragment>,
    definition: 'the ability to employ abstract, logical thought processes when solving problems.',
    partOfSpeech: 'noun',
    example: '"computational thinking skills"',
    clean_word: 'computational thinking'
  },
  {
    word: <React.Fragment>cy{bull}ber{bull}se{bull}cu{bull}ri{bull}ty</React.Fragment>,
    definition: 'the protection of computer systems, networks, and data from digital attacks.',
    partOfSpeech: 'noun',
    example: '"improve your cyber security measures"',
    clean_word: 'cybersecurity'
  },
  {
    word: <React.Fragment>ro{bull}bot{bull}ics</React.Fragment>,
    definition: 'the branch of technology that deals with the design, construction, operation, and application of robots.',
    partOfSpeech: 'noun',
    example: '"advancements in robotics"',
    clean_word: 'robotics'
  },
  // Add more words and their definitions here
];