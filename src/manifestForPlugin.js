const manifestForPlugin = {
  registerType: "prompt",
  includeAssets:["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Todo List",
    short_name: "To Do",
    description: "An app that can show a list of To Do things",
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#171717",
    background_color: "#E8EBF2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  }
}

export default manifestForPlugin;