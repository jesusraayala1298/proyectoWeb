import { IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonImg, IonFab, IonFabButton, IonActionSheet } from '@ionic/react';
import { add, caretForwardCircle, close, heart, pin, share, trash, walk, warning, wifi, wine } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useShare } from '../hooks/share';

const Tab2: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const { compartir } = useShare();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ciudades del mundo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          cssClass='my-custom-class'
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              console.log('Delete clicked');
            }
          }, {
            text: 'Share',
            icon: share,
            handler: () => {
              console.log('Share clicked');
            }
          }, {
            text: 'Agregar',
            icon: add,
            handler: () => {
              console.log('Play clicked');
            }
          }, {
            text: 'Favorite',
            icon: heart,
            handler: () => {
              console.log('Favorite clicked');
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]}
        >
        </IonActionSheet>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard button={true} onClick={() => setShowActionSheet(true)}>
                <IonCardHeader>
                  <IonImg src="https://www.jll.es/images/global/treant-and-insights/como-crear-una-marca-ciudad-de-exito-el-caso-de-barcelona-800x600.jpg"></IonImg>
                  <IonCardSubtitle>Barcelona</IonCardSubtitle>
                  <IonCardTitle>España</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                Barcelona es una ciudad española, capital de la comunidad autónoma de Cataluña, de la provincia homónima y de la comarca del Barcelonés.
      </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard button={true} onClick={() => setShowActionSheet(true)}>
                <IonCardHeader>
                  <IonImg src="https://media.viajando.travel/adjuntos/236/imagenes/000/039/0000039815.jpg"></IonImg>
                  <IonCardSubtitle>Tokio</IonCardSubtitle>
                  <IonCardTitle>Japon</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                Tokio, la ajetreada capital de Japón, mezcla lo ultramoderno y lo tradicional, desde los rascacielos iluminados con neones hasta los templos históricos.
      </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard button={true} onClick={() => setShowActionSheet(true)}>
                <IonCardHeader>
                  <IonImg src="https://viajes.nationalgeographic.com.es/medio/2021/03/03/sena_4ffb342d_1254x836.jpg"></IonImg>
                  <IonCardSubtitle>Paris</IonCardSubtitle>
                  <IonCardTitle>Francia</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. 
      </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard button={true} onClick={() => setShowActionSheet(true)}>
                <IonCardHeader>
                  <IonImg src="https://i.pinimg.com/originals/7d/48/37/7d48370e3f5141a1326fd9b21cbfb0d7.jpg"></IonImg>
                  <IonCardSubtitle>Dubai</IonCardSubtitle>
                  <IonCardTitle>Emiratos Árabes Unidos</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                Dubái es una ciudad emirato de los Emiratos Árabes Unidos conocida por su lujoso comercio, la arquitectura ultramoderna y su vida nocturna animada.
      </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard button={true} onClick={() => setShowActionSheet(true)}>
                <IonCardHeader>
                  <IonImg src="https://dam.vanidades.com/wp-content/uploads/2019/04/Visita-Roma-770x513.jpg"></IonImg>
                  <IonCardSubtitle>Roma</IonCardSubtitle>
                  <IonCardTitle>Italia</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard button={true} onClick={() => setShowActionSheet(true)}>
                <IonCardHeader>
                  <IonImg src="https://www.turismoviajar.com/wp-content/uploads/2019/10/Atenas-Grecia.jpg"></IonImg>
                  <IonCardSubtitle>Athenas</IonCardSubtitle>
                  <IonCardTitle>Grecia</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                Atenas es la capital de Grecia. También se encontraba en el centro de la Antigua Grecia, un poderoso imperio y civilización.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
