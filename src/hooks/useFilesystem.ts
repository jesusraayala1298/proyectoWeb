import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

const { Filesystem } = Plugins;
const { Toast } = Plugins;

export function useFilesystem() {
    const fileWrite = async (fileName: string, fileText:string) => {
        try {
            const result = await Filesystem.writeFile({
                path: fileName +'.txt',
                data: fileText+'',
                directory: FilesystemDirectory.External,
                encoding: FilesystemEncoding.UTF8
            })
            guardado();
        } catch (e) {
            error();
            console.error('Unable to write file', e);
        }
    };
    const guardado = async()=> {
        await Toast.show({
          text: 'Nota guardada correctamente',
          position: 'center'
        });
    }

    const error = async()=> {
        await Toast.show({
          text: 'Nota guardada correctamente',
          position: 'center'
        });
    }

    return {
        fileWrite
    };
}

