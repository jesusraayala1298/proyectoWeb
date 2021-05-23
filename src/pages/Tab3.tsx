import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { networkStatus } from '../hooks/networkStatus';
import { Network } from '@capacitor/core';
import { Geolocalizacion } from '../hooks/getGeolocalizacion';

const Tab3: React.FC = () => {
  const { getStatusNetwork } = networkStatus();
  const {getGeolocation} = Geolocalizacion();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Estado de la red y Geolocalizacion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Estado de la red y Geolocalizacion</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonButton onClick={() =>getStatusNetwork()}>Ver el estado de la red</IonButton>
        <IonButton onClick={() =>getGeolocation()}>Obtener localizacion actual</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
