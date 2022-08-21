import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OwlCarousel from 'react-owl-carousel';

const steps = ['Select Package', 'View Details', 'Make Payment', 'Confirmation'];

export default function BookingPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className='container'>
    <Box sx={{ width: '100%', mt: 12 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <div style={{"display": "flex"}}>
          <div style={{"padding": "10px", "width": 740 }}>
          <h4>Bush Getaway at Sarova Salt Lick Game Lodge</h4>
          <p>Tsavo, Kenya</p>
            <div style={{"width": "700px"}}>
                <img className="bd-placeholder-img" width="100%" height="100%" src="https://www.ticketsasa.com/images/images.php?src=components/com_enmasse/upload/images/Lodge_restaurant.jpg&w=785&h=465&zc=1&q=100" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="_" />
            </div>
            <div style={{"padding": "10px", "marginTop": "10px"}}>
                <h5 style={{"fontWeight": "500"}}>OVERVIEW</h5>
                <p>If luxury is something that’s right on top of your list, head on to Sarova Salt Lick Game Lodge, the most popular out of all the Tsavo Safari Camps and Lodges in the area.  Simply, check-in and relax.</p>
            </div>
          </div>
          
          <div style={{"padding": 10, "backgroundColor": "#ffffff"}}>
            <h5 style={{"color": "orange"}}>KES 7,990</h5>
            <p>Per Person Sharing</p>
            <p>You can pay in 3 installments!</p>
            <button className="btn btn-success">Book Now</button>
            <div className='mt-3'>
                <h4>Includes</h4>
                <p>✔ Accommodation in a standard room per night</p>
                <p>✔ Meals on all full board basis</p>
                <p>✔ Any Applicable government charges</p> 
                <p>✔ Festive rates apply</p>
                <button style={{"backgroundColor": "#f2f2f2", "border": "1px solid #000000", "padding": "10px"}}>Send Enquiry</button>
            </div>
          </div>
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  );
}
