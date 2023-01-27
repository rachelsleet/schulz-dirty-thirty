import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mallorca from './images/kerstin_caro_mallorca.jpeg';
import christian from './images/christian.jpeg';
import speech_bubble from './images/speech_bubble.png';
import StandardImageList from './ImageList';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const imgStyle = {
    maxWidth: '100%'
  }

  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
  }

  const centeredStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const videoStyle =   {aspectRatio: '16 / 9',
  width: '100%'}
  const [value, setValue] = React.useState(0);
  const [displayedQuoteIndex, setDisplayedQuoteIndex] = React.useState(-1);
  const quotes = ['Get a job!', 'Get another job!', 'How much are you getting paid for this again?', 'Bad day at the office? Quit!', 'In fact... get everyone to quit!']

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setDisplayedQuoteIndex(displayedQuoteIndex < quotes.length - 1 ? displayedQuoteIndex + 1 : 0);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Wilkommen!" {...a11yProps(0)} />
          <Tab label="Ladies Night" {...a11yProps(1)} />
          <Tab label="Life Advice" {...a11yProps(2)} />
          <Tab label="Nostalgia" {...a11yProps(3)} />
          <Tab label="Drag Show" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h1>Happy Birthday, Kerstin!</h1>
        <p>We love you!</p>
        <p>This site is designed as a little digital goodie bag to provide all the creature comforts of Berlin whilst you are away from the poor but sexy stadt.</p>
        <iframe src="https://giphy.com/embed/xThuWkj1FAYH4wmGfC" width="480" height="480" className="giphy-embed" allowFullScreen></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h1>Remote Ladies Night Instructions</h1>
          <ol style={{  display: 'table', margin: '0 auto', textAlign: 'left'}}>
            <li>Find a bottle of cheap wine</li>
            <li>Turn on the beats loud (scroll down&nbsp;😉)</li>
            <li>Call the bitches (Rachel and Caro, in case you forgot already)</li>
            <li>SPILL THE GOD DAMN TEA&nbsp;&nbsp;☕</li>
            <li>(Optional) Bake zesty lemon cake OR sugar wax</li>
          </ol>
          <br></br>
          <br></br>
          <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/1y2T6sWJUYRIpO1aDRjt5x?utm_source=generator&theme=0" maxwidth="100%" height="auto" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <br></br>
        <img src={mallorca} style={{maxWidth: '100%', height: 'auto'}}></img>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Low on motivation? Click on Christian for some unsolicited advice:</h2>
        <br></br>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={-2}>
        <Grid item xs={8}>
          <img src={christian} onClick={handleClick} className='Christian' style={{maxWidth: '100%', height: 'auto'}}></img>
        </Grid>
        <Grid item xs={4}>
          <div className='container' style={containerStyle}>
            <img src={speech_bubble} style={imgStyle} hidden={!(displayedQuoteIndex >= 0)}></img>
            <Box style={centeredStyle}><p style={{fontSize: '2vw'}}>{displayedQuoteIndex >= 0 && quotes[displayedQuoteIndex]}</p></Box>
          </div>
        </Grid>
      </Grid>
    </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2>Trip down memory lane? Look no further!</h2>
        <StandardImageList></StandardImageList>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h2>Tipsy Bear may not exist in Turkey...</h2>
        <br></br>
        <iframe style={videoStyle} src="https://www.youtube.com/embed/znlJdzR5gBo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </TabPanel>
    </Box>
  );
}