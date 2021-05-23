import { Plugins} from '@capacitor/core';
const { Share } = Plugins;
const {Haptics} = Plugins;

export function useShare(){
    const compartir = async(fileName: string, fileText:string)=> {
        await Share.share({
            title: fileName+'',
            text: fileText+'',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Share with buddies'
        });
        Haptics.vibrate();
    }

    return{
        compartir
    }
}
