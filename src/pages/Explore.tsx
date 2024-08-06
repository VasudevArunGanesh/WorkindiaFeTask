import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Footer from '../components/Footer'; 

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <h1>Explore Content</h1>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Explore;
