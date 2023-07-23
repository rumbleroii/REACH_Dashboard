import React from 'react';
import { FlexBox, Card,Text } from '@ui5/webcomponents-react';

const Mou = () => {
  const imageStyle = { width: '150px', height: '150px', marginRight: '10px', marginLeft: '5px' };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px', // Gap between FlexBoxes (horizontal and vertical)
    justifyContent: 'center', // To horizontally center FlexBoxes within the container
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
    marginTop: '10px',
    marginBottom: '20px', // Gap between each row (vertical)
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
          <h2>MOU'S</h2>
          <h3>We will have our collabs here</h3>
        </Text>
      </div>
    </FlexBox>
      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
        <FlexBox style={flexBoxStyle}>
          <span>
            <img
              alt="img-sample 1"
              src="https://tse2.mm.bing.net/th?id=OIP.89-F-DN0rRU5wPWRtr8gLQHaHa&pid=Api"
              style={imageStyle}
            />
          </span>
          <span>
            <p>
              Candidates wanting to study in Germany would obviously want to apply to the top universities in
              Germany. While German Public universities would have a more detailed admission procedure, admission to
              private universities is relatively easier.
            </p>
          </span>
        </FlexBox>
      </Card>

      <Card style={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
        <FlexBox style={flexBoxStyle}>
          <span>
            <img
              alt="img-sample 2"
              src="https://tse4.mm.bing.net/th?id=OIP.3TBYCHujstntFsKWQSBN2QHaHa&pid=Api"
              style={imageStyle}
            />
          </span>
          <span>
            <p>Text for Image 2</p>
          </span>
        </FlexBox>
      </Card>

      {/* Add more Cards with FlexBoxes as needed... */}
    </div>
  );
};

export default Mou;
