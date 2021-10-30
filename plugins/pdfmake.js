import Vue from 'vue'
import pdfMake from 'pdfmake'

if (process.client) {
  Vue.component('PdfMake', pdfMake)
}
