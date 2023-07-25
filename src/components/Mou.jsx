import React from 'react';
import { FlexBox, Card, Text, FlexBoxJustifyContent, FlexBoxAlignItems } from '@ui5/webcomponents-react';

const Mou = () => {
  const imageStyle = { width: '200px', height: '150px', marginRight: '10px', marginLeft: '50px'};

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px', // Gap between FlexBoxes (horizontal and vertical)
    justifyContent: 'center', // To horizontally center FlexBoxes within the container
    marginBottom:'60px'
  };

  const cardStyle = {
    width: '350px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5',
    marginTop: '20px',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
  };

  const flexBoxStyle = {
    alignItems:"center",
    marginTop: "10px",
    marginBottom: '10px', // Gap between each row (vertical)
  };

  const handleCardHover = (event) => {
    event.currentTarget.style.transform = 'scale(1.05)';
    event.currentTarget.style.backgroundColor = '#e0e0e0';
  };

  const handleCardLeave = (event) => {
    event.currentTarget.style.transform = 'scale(1)';
    event.currentTarget.style.backgroundColor = '#f5f5f5';
  };

  return (
    <div style={containerStyle}>
       <FlexBox style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' ,width:'100%'}}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
            <Text style={{ textAlign: 'center' }}>
              <h2>Signed MOU'S</h2>
              <h4>blah blah</h4>
            </Text>
          </div>
        </FlexBox>
        
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 1"
              src="https://tse3.mm.bing.net/th?id=OIP.LfsPkr9RbTuTXaIPWhb6pQAAAA&pid=Api"
              style={{width:'100%', marginTop:'50px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
       
          <span>
            <img
              alt="img-sample 2"
              src="https://tse4.mm.bing.net/th?id=OIP.UZSZy6vrgvADiUdAhnpQigHaCx&pid=Api"
              style={{width:'100%', marginTop:'20px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 3"
              src="https://tse1.mm.bing.net/th?id=OIP.ZBqTvN-01CEMWxOItPYhhAHaDX&pid=Api"
              style={{width:'99%', marginTop:'40px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 4"
              src="https://tse3.mm.bing.net/th?id=OIP.tsN5bdGw3784g78s7rElowHaDV&pid=Api"
              style={{width:'100%', marginTop:'35px',marginLeft:'15px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 5"
              src="https://tse4.mm.bing.net/th?id=OIP.bGS4xX-jrxz7Jy_x35JuCwAAAA&pid=Api"
              style={{width:'100%', marginTop:'33px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 6"
              src="https://tse2.mm.bing.net/th?id=OIP.J5XWjH-_RzC5fxqzi-NwrQHaB1&pid=Api"
              style={{width:'98%', marginTop:'40px',marginLeft:'1px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 7"
              src="https://tse1.mm.bing.net/th?id=OIP.8z-G4BQloHQLeCMNfSOThwHaCG&pid=Api"
              style={{width:'100%', marginTop:'25px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 8"
              src="https://www.iiitb.ac.in/includefiles/settings/iiitb_logo2.png"
              style={{width:'100%', marginTop:'20px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>

      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 9"
              src="https://tse4.mm.bing.net/th?id=OIP.CEBMcqCi4DKaQlKM6mjGlAHaDm&pid=Api"
              style={{width:'85%', marginTop:'0px',marginLeft:'31px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 10"
              src="https://www.mathworks.com/academia/tah-portal/cummins-college-of-engineering-for-women-40733520/_jcr_content/schoolLogo.adapt.full.medium.png/1592899846942.png"
              style={{width:'40%', marginTop:'20px',marginLeft:'105px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 11"
              src="https://tse1.mm.bing.net/th?id=OIP.6iYmj1Drc_dAIIz46GvVUAAAAA&pid=Api"
              style={{width:'40%', marginTop:'20px',marginLeft:'100px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>

      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 12"
              src="https://tse2.mm.bing.net/th?id=OIP.Vas_I5VWZS6ki7thA8CspwHaHV&pid=Api"
              style={{width:'40%', marginTop:'20px',marginLeft:'100px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 13"
              src="https://tse3.mm.bing.net/th?id=OIP.xUBwVQVEu-sdEdly5iTs3wAAAA&pid=Api"
              style={{width:'40%', marginTop:'20px',marginLeft:'100px'}}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 14"
              src="https://tse1.mm.bing.net/th?id=OIP.6SuMg07tO2pzibAPxLoB2QAAAA&pid=Api"
              style={imageStyle}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 15"
              src="https://tse2.mm.bing.net/th?id=OIP.kFTyI1NGw1joWk4bMHzodwHaFs&pid=Api"
             style={{width: '200px', height: '150px', marginTop:'20px',marginLeft:'70px'}} 
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
      
          <span>
            <img
              alt="img-sample 16"
              src="https://tse1.mm.bing.net/th?id=OIP.6SuMg07tO2pzibAPxLoB2QAAAA&pid=Api"
              style={imageStyle}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
      
      </Card>

      {/* Add more Cards with FlexBoxes as needed... */}
    </div>
  );
};

export default Mou;
