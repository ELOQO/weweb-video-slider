export default {
  editor: {
    label: {
      en: "Video Slider",
    },
  },
  properties: {
    videos: {
      label: {
        en: "Videos",
      },
      type: "Array",
      defaultValue: [
        {
          url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          poster:
            "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
          caption: "Big Buck Bunny",
        },
        {
          url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          poster:
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Elephants_Dream_s5_both.jpg",
          caption: "Elephants Dream",
        },
      ],
      element: {
        type: "Object",
        properties: {
          url: {
            label: { en: "Video URL" },
            type: "Text",
            defaultValue: "",
          },
          poster: {
            label: { en: "Poster URL" },
            type: "Text",
            defaultValue: "",
          },
          caption: {
            label: { en: "Caption" },
            type: "Text",
            defaultValue: "",
          },
        },
      },
    },
    showControls: {
      label: {
        en: "Show controls",
      },
      type: "OnOff",
      defaultValue: true,
    },
    showDots: {
      label: {
        en: "Show dots",
      },
      type: "OnOff",
      defaultValue: true,
    },
    autoPlayMuted: {
      label: {
        en: "Auto-play muted",
      },
      type: "OnOff",
      defaultValue: true,
    },
  },
};
