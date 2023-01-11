import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Font from '@ckeditor/ckeditor5-font/src/font.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

// Extends the base Editor Class
export default class Editor extends ClassicEditor {}

// Main editor plugins
Editor.builtinPlugins = [
    Essentials,
    Alignment,
    Autoformat,
    Bold,
    BlockQuote,
    Font,
    Heading,
    HorizontalLine,
    Italic,
    Image,
    ImageCaption,
    ImageResize,
    ImageUpload,
    ImageToolbar,
    ImageStyle,
    Link,
    List,
    MediaEmbed,
    PageBreak,
    Paragraph,
    Strikethrough,
    Table,
    TableToolbar,
    Underline
];

// Base editor configuration
Editor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'strikethrough',
            'underline',
            'bulletedList',
            'numberedList',
            '|',
            'horizontalLine',
            'pageBreak',
            '|',
            'imageUpload',
            'mediaEmbed',
            'insertTable',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'alignment',
            '|',
            'link',
            'blockQuote',
            '|',
            'undo',
            'redo'
        ]
    },
    language: 'fr',
    image: {
        toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight' ],
        resizeUnit: '%',
        styles: [
            'full',
            'side',
            'alignLeft',
            'alignCenter',
            'alignRight'
        ]
    },
    fontFamily: {
        supportAllValues: true
    },
    fontSize: {
        options: [ 10, 12, 14, 'default', 18, 20, 22 ],
        supportAllValues: true
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
};

