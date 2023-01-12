import Base64UploadAdapter from './adapter/base64uploadadapter';

export default class UploadBridge {
    constructor (editor) {
        this.editor = editor
    }

    static get requires() {
        return [];
    }

    init() {
        if (!this.editor.plugins.has('FileRepository')) {
            /**
             * The plugin require on the `FileRepository` plugin.
             *
             * @error upload-bridge-missing-modules-file-repository
             */
            console.error('upload-bridge-missing-modules-file-repository');

            return;
        }

        const options = this.editor.config.get('uploadBridge');
        if (!options) {
            return;
        }

        if (options.base64upload && options.axiosupload) {
            /**
             * The configuration required by the `UploadBridge` does not allow the configuration multiple adapters.
             * Make sure you enable base64upload or axiosupload.
             *
             * @error upload-bridge-to-many-adapter
             */
            console.error( 'upload-bridge-to-many-adapter' );

            return;
        }

        if (options.base64upload) {
            this.editor.plugins.get('FileRepository').createUploadAdapter = loader => new Base64UploadAdapter( loader );
        }

        if (options.axiosupload) {
            // TODO
        }
    }
}
