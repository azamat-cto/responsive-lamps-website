import { useState } from 'react'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ChooseLamp from '../../assets/images/choose-lamp.png'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<i className="ri-arrow-down-s-line"></i>}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper': {
    fontSize: '1.25rem',
    transform: 'rotate(-90deg)'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(0deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '0.5rem 1rem 0 2.7rem'
}))

const Choose = () => {
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <section className="choose section" id="choose">
      <Container>
        <div className="choose__grid grid">
          <div className="choose__image">
            <div className="choose__blob">
              <img className="choose__img" src={ChooseLamp} alt="Choose lamp" />
              <h1 className="choose__blob-title">LIGHT</h1>
            </div>
            <div className="img-shadow"></div>
          </div>

          <div className="choose__content">
            <div className="choose__data">
              <h2 className="section__title">Why Choose Us</h2>
              <p className="choose__desc">
                Our products have won numerous awards and we can guarantee the
                unlimited quality of our products
              </p>
            </div>

            <div className="choose__faqs grid">
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <h3 className="choose__faqs-title">
                    Frequently New Design
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="choose__faqs-details">
                    We make new designs every year, fashion designs, trending
                    and of the best quality.
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <h3 className="choose__faqs-title">
                    Original Production
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="choose__faqs-details">
                    We are the industrial chain of quality lighting products and
                    offer the most advantageous price.
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <h3 className="choose__faqs-title">
                    Production With Large Stock
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="choose__faqs-details">
                    We are the industrial chain of quality lighting products and
                    offer the most advantageous price.
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <h3 className="choose__faqs-title">
                    Professional Quality Control
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="choose__faqs-details">
                    Our quality control does everything possible to send you the
                    best possible product for your home.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Choose
