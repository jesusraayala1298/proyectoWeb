import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonItemSliding, IonItemOptions, IonItemOption, IonInput, IonToggle, IonRadio, IonCheckbox, IonReorderGroup, IonReorder } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { ItemReorderEventDetail } from '@ionic/core';

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Videojuegos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lista de Videojuegos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          <IonReorder>
            <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
            <IonLabel>Pac-Man</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
            <IonLabel>Super Mario World</IonLabel>  
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
          </IonReorder>
        </IonReorderGroup>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
