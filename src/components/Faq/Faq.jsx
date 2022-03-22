import './Faq.css';
import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { accordionActionsClasses } from '@mui/material';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddOutlinedIcon sx={{ fontSize: '2rem', color: 'white' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? 'black'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    

    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faq() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <div className='Faqmaindiv' id='Faq' >

        <h1 className='mAINHEADING' style={{color:'#000'}} >FAQ</h1>
       
        <h1 className='mAINHEADING' >FAQ</h1>
        <div className="mainheadingtext">Frequently Asked Questions</div>

            <div className="innerdiv">

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="AccodionHeadertext" >
                        <Typography className="AccodionHeadertext">What is VISIANI?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody" >
                        <Typography className="bodytext" >
                        VISIANI is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className="AccodionHeadertext" >
                        <Typography className="AccodionHeadertext">How much does VISIANI cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        Watch VISIANI  on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">Where can I watch?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        Watch anywhere, anytime. Sign in with your VISIANI account to watch instantly on the web at VISIANI.com from your personal computer or on any internet-connected device that offers the VISIANI app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take VISIANI with you anywhere.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">How do I cancel?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">

                        VISIANI is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" className="AccodionHeadertext">
                        <Typography className="AccodionHeadertext">Is VISIANI good for kids?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="Accordiontextbody">
                        <Typography className="bodytext">
                        The VISIANI Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

