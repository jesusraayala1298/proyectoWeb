import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { useShare } from '../hooks/share';
import { useFilesystem } from '../hooks/useFilesystem';
import './Tab4.css';

const Tab4: React.FC = () => {
  const { fileWrite } = useFilesystem();
  const { compartir } = useShare();
  const [text, setText] = useState<string>();
  const [texto, setTexto] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Crear y compartir notas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Crear y compartir notas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        <IonItem>
            <IonLabel position="floating">Titulo de la nota</IonLabel>
            <IonInput id="titulo" value={text} onIonChange={e=>setText(e.detail.value!)} required={true}></IonInput>
        </IonItem>
        </IonList>
        <IonLabel>Texto:</IonLabel>
        <IonTextarea rows={10} placeholder="Ingresa el contenido de la nota" id="texto" value={texto} onIonChange={e=>setTexto(e.detail.value!)}></IonTextarea>
        <IonButton onClick={() => fileWrite(text+"", texto+"")}>Guardar</IonButton>
        <IonButton onClick={() => compartir(text+"", texto+"")}>Compartir</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;