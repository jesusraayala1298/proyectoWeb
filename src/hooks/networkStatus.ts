import { Plugins } from '@capacitor/core';
const { Network } = Plugins;
const { Modals } = Plugins;

export function networkStatus() {
  const getStatusNetwork = async () => {
    let handler = Network.addListener('networkStatusChange', (status) => {
      console.log("Network status changed", status);
    });
    // To stop listening:
    handler.remove();

    // Get the current network status
    let status = await Network.getStatus();

    // Example output:
    //{
    //"connected": true,
    //"connectionType": "wifi"
    //}
    let estado;
    if (status.connected) {
      estado = "conectado"
    } else {
      estado = "desconectado"
    }
    showAlert(estado, status.connectionType);
  }

  const showAlert = async (status: string, tipo: string) => {
    await Modals.alert({
      title: "Estado de la red",
      message: status.toUpperCase() + "---------" + tipo.toUpperCase()
    });
  }

  return {
    getStatusNetwork
  }
}