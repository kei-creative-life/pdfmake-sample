<template>
  <button
    style="
      padding: 10px 20px;
      margin: 10px;
      background-color: blue;
      color: white;
    "
    @click="outputPDF"
  >
    PDFを出力する
  </button>
</template>

<script>
/* eslint-disable */
import pdfFonts from "~/static/vfs_fonts";

export default {
  methods: {
    toDataURL(url, callback) {
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        let reader = new FileReader();
        reader.onloadend = () => {
          callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.send();
    },

    outputPDF() {
      this.toDataURL(require("~/assets/images/logo.jpeg"), (dataUrl) => {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.fonts = {
          GenShin: {
            normal: "genshin-normal.ttf",
            bold: "genshin-bold.ttf",
          },
          English: {
            normal:
              "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
            bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
          },
        };
        const defaultStyle = "GenShin";

        const docDefinition = {
          defaultStyle: {
            font: defaultStyle,
          },
          content: [],
        };

        const itemData = [
          [
            {
              text: "サンプル商品1",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
            {
              text: "A-12345",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
            { text: "S", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "Black", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "100", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "¥999", font: "GenShin", fontSize: 9, alignment: "right" },
            {
              text: "¥99,900",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
          ],
          [
            {
              text: "サンプル商品2",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
            {
              text: "A-23456",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
            { text: "M", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "Blue", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "100", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "¥999", font: "GenShin", fontSize: 9, alignment: "right" },
            {
              text: "¥99,900",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
          ],
          [
            {
              text: "サンプル商品3",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
            {
              text: "A-34567",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
            { text: "L", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "Green", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "100", font: "GenShin", fontSize: 9, alignment: "right" },
            { text: "¥999", font: "GenShin", fontSize: 9, alignment: "right" },
            {
              text: "￥99,900",
              font: "GenShin",
              fontSize: 9,
              alignment: "right",
            },
          ],
        ];

        const content = [
          {
            text: "納品書",
            font: "GenShin",
            fontSize: 18,
            alignment: "center",
            margin: [0, 0, 0, 30],
          },
          {
            columns: [
              {
                width: "60%",
                margin: [0, 0, 0, 30],
                layout: {
                  paddingTop: function (i, node) {
                    return 0.5;
                  },
                  paddingBottom: function (i, node) {
                    return 0.5;
                  },
                },
                table: {
                  headerRows: 1,
                  widths: ["*"],
                  body: [
                    [
                      {
                        text: "株式会社〇〇",
                        font: "GenShin",
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: `〒999-9999`,
                        font: "GenShin",
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: `〇〇県 〇〇市 98-128-89`,
                        font: "GenShin",
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: `090-8888-9999`,
                        font: "GenShin",
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: `test@example.com`,
                        font: "GenShin",
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                  ],
                },
              },
              {
                layout: {
                  vLineColor: "#333333",
                  hLineColor: "#333333",
                  hLineWidth: function (i, node) {
                    return 1.5;
                  },
                  vLineWidth: function (i, node) {
                    return 1.5;
                  },
                },
                table: {
                  headerRows: 1,
                  widths: ["*", "*"],
                  body: [
                    [
                      { text: "納品書番号", fontSize: 10 },
                      { text: "0123456789", fontSize: 10 },
                    ],
                    [
                      { text: "発効日", fontSize: 10 },
                      { text: "2021/12/31", fontSize: 10 },
                    ],
                  ],
                },
              },
            ],
          },

          {
            columns: [
              {
                width: "60%",
                margin: [0, 0, 0, 10],
                layout: {
                  paddingTop: function (i, node) {
                    return 1;
                  },
                  paddingBottom: function (i, node) {
                    return 1;
                  },
                },
                table: {
                  headerRows: 1,
                  widths: ["*"],
                  body: [
                    [
                      {
                        text: `クライアント様`,
                        font: "GenShin",
                        fontSize: 14,
                        bold: true,
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 2],
                      },
                    ],
                    [
                      {
                        text: `この度はお買い上げ頂き誠にありがとうございます。`,
                        font: "GenShin",
                        fontSize: 10,
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: `下記内容にて納品させていただきます。`,
                        fontSize: 10,
                        font: "GenShin",
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 20],
                      },
                    ],
                    [
                      {
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        columns: [
                          {
                            width: "80%",
                            layout: {
                              paddingTop: function (i, node) {
                                return 1;
                              },
                              paddingBottom: function (i, node) {
                                return 1;
                              },
                            },
                            table: {
                              headerRows: 1,
                              widths: ["*", "*"],
                              body: [
                                [
                                  {
                                    width: "auto",
                                    text: "ご請求金額",
                                    font: "GenShin",
                                    bold: true,
                                    fontSize: 14,
                                  },
                                  {
                                    width: "auto",
                                    text: "¥ 300,000",
                                    font: "GenShin",
                                    fontSize: 14,
                                    bold: true,
                                  },
                                ],
                              ],
                            },
                          },
                        ],
                      },
                    ],
                  ],
                },
              },
              {
                layout: {
                  paddingTop: function (i, node) {
                    return 1;
                  },
                  paddingBottom: function (i, node) {
                    return 1;
                  },
                },
                table: {
                  headerRows: 1,
                  widths: ["*"],
                  body: [
                    [
                      {
                        image: dataUrl,
                        width: 150,
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 0, 0, 2],
                      },
                    ],
                    [
                      {
                        text: "〇〇株式会社",
                        font: "GenShin",
                        fontSize: 10,
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                        margin: [0, 3, 0, 0],
                      },
                    ],
                    [
                      {
                        text: "〒777-6666",
                        font: "GenShin",
                        fontSize: 10,
                        margin: [0, 0, 0, 0],
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                      },
                    ],
                    [
                      {
                        text: "〇〇県 〇〇市 123-5678",
                        font: "GenShin",
                        fontSize: 10,
                        margin: [0, 0, 0, 0],
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                      },
                    ],
                    [
                      {
                        text: "〇〇丁目 〇〇ビル10F",
                        font: "GenShin",
                        fontSize: 10,
                        margin: [0, 0, 0, 0],
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                      },
                    ],
                    [
                      {
                        text: "info@example.jp",
                        font: "English",
                        fontSize: 10,
                        margin: [0, 0, 0, 1],
                        borderColor: [
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ],
                      },
                    ],
                  ],
                },
              },
            ],
          },

          {
            layout: {
              hLineWidth: function (i, node) {
                return 1.5;
              },
            },
            table: {
              widths: ["100%"],
              body: [
                [
                  {
                    text: "",
                    margin: [0, 10, 0, 0],
                    borderColor: ["#ffffff", "#ffffff", "#ffffff", "#333333"],
                  },
                ],
              ],
            },
          },

          {
            layout: {
              vLineColor: "#333333",
              hLineColor: "#333333",
              hLineWidth: function (i, node) {
                return 0.2;
              },
              vLineWidth: function (i, node) {
                return 0.2;
              },
            },
            margin: [0, 20, 0, 0],
            table: {
              headerRows: 2,
              widths: [120, 100, "auto", "auto", "auto", "auto", 100],
              body: [
                [
                  {
                    text: "商品名",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "商品コード",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "サイズ",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "カラー",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "個数",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "単価 (税込) ",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "合計金額 (税込) ",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                ],
                ...itemData,
                [
                  { text: "", font: "GenShin", fontSize: 9 },
                  { text: "", font: "GenShin", fontSize: 9 },
                  { text: "", font: "GenShin", fontSize: 9 },
                  { text: "", font: "GenShin", fontSize: 9 },
                  { text: "", font: "GenShin", fontSize: 9 },
                  {
                    text: "商品合計",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: `¥299,700`,
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "right",
                  },
                ],
                [
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  {
                    text: "送料",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "¥1,000",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "right",
                  },
                ],
                [
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin", fontSize: 9 },
                  {
                    text: "代引き手数料",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: `¥300`,
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "right",
                  },
                ],
                [
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin", fontSize: 9 },
                  {
                    text: "クーポン割引",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: "¥1,000",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "right",
                  },
                ],
                [
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin" },
                  { text: "", font: "GenShin", fontSize: 9 },
                  {
                    text: "総合計金額",
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "center",
                  },
                  {
                    text: `¥300,000`,
                    font: "GenShin",
                    fontSize: 9,
                    alignment: "right",
                  },
                ],
              ],
            },
          },
        ];
        docDefinition.content = docDefinition.content.concat(content);
        pdfMake.createPdf(docDefinition).open();
      });
    },
  },
};
/* eslint-enable */
</script>

<style scoped>
</style>
