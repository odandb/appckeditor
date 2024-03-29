# AppCKEditor

[![npm version](https://badge.fury.io/js/@odandb%2Fappckeditor.svg)](https://www.npmjs.com/package/@odandb/appckeditor)
AppCKEditor is a custom build of CKEditor5.

## Plugins
This build includes the following plugins :
- Essentials
- Alignment
- Autoformat
- Bold
- BlockQuote
- Font
- Heading
- HorizontalLine
- Image
- ImageCaption
- ImageResize
- ImageUpload
- ImageToolbar
- ImageStyle
- Indent
- IndentBlock
- Italic
- Link
- ListProperties
- MediaEmbed
- PageBreak
- Paragraph
- PasteFromOffice
- RemoveFormat
- Strikethrough
- Table
- TableToolbar
- Underline

## Installation

`yarn add @odandb/appckeditor`

## Sources

The base was created with the [Online builder tool](https://ckeditor.com/ckeditor-5/online-builder)

## Use the Editor

First, import the Editor:
`import Editor from 'appckeditor'`

Then inject the Editor to your instance of CKEditor :

`template part`
```vue
<template>
    <c-k-editor
        :editor="editor"
        :config="editorConfig"
    />
</template>
```

`script part`
```typescript jsx
import { defineComponent } from 'vue'

import CKEditor from '@ckeditor/ckeditor5-vue'
import Editor from 'appckeditor'

export default defineComponent({
    setup () {
        return {
            editor: Editor,
            // Overwrite the default editor's configuration
            editorConfig: {}
        }
    }
})
```
