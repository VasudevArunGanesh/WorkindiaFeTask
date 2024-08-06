import React from 'react';
import { IonFooter, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, searchOutline, addCircleOutline, personOutline, settingsOutline } from 'ionicons/icons';

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Explore</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search">
          <IonIcon icon={searchOutline} />
          <IonLabel>Explore</IonLabel>
        </IonTabButton>
        <IonTabButton tab="add" href="/add">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>Add Item</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personOutline} />
          <IonLabel>Blank</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settingsOutline} />
          <IonLabel>Blank</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonFooter>
  );
};

export default Footer;
