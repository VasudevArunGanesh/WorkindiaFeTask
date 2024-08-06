import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonList, IonItem, IonLabel } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.example.com/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <IonPage>
        <Header title="explore"/>
        <IonContent>
          <p>Loading...</p>
        </IonContent>
        <Footer />
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Header title="explore"/>
      <IonContent>
        <IonList>
          {items.length > 0 ? (
            items.map((item, index) => (
              <IonItem key={index}>
                <IonLabel>{item.name}</IonLabel>
              </IonItem>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
