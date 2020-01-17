const nowYear = new Date().getFullYear()

export default {
  prefix: "mux-layout",
  version: `${1.0}`,
  title: "xkef",
  content: {},
  footer: {
    description: "hacker, full-stack dev, edm prod | <3 physics & ginger tea :)",

    mains: {
      buttons: [
        {
          id: 1,
          path: "https://github.com/xkef",
          name: "GitHub",
          target: "_blank",
          color: "green",
        },
      ],
      btnSvgPath:
        "M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z",
    },
    copyright: {
      number: "",
      reserved: `${nowYear}`,
    },
  }
}
