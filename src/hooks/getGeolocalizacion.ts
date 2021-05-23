import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
const {Modals} = Plugins;

export function Geolocalizacion() {
  const getGeolocation = async () => {
    let coordinates = await Geolocation.getCurrentPosition();
    showAlert(coordinates.coords.latitude+"", coordinates.coords.longitude+"");
  }

  const showAlert = async (latitud: string, longitud: string) => {
    await Modals.alert({
      title: "Geolocalizacion actual",
      message: "Latitud="+latitud + " Longitud=" + longitud
    });
  }

  return {
    getGeolocation
  }
}