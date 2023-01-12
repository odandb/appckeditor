import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';
import Base64UploadAdapter from './adapter/base64uploadadapter';

export default class UploadBridge extends Plugin{
    static get requires() {
        return [ FileRepository ];
    }

    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'UploadBridge';
    }

    init() {
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
            this.editor.plugins.get( FileRepository ).createUploadAdapter = loader => new Base64UploadAdapter( loader );
        }

        if (options.axiosupload) {
            // TODO
        }
    }
}
