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
          url: "https://weweb-production.s3.amazonaws.com/designs/04ba7c30-a628-4068-8df8-ad11e88e9ff3/files/course_2_smartphone.mov",
          poster:
            "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
          caption: "Big Buck Bunny",
        },
        {
          url: "https://weweb-production.s3.amazonaws.com/designs/04ba7c30-a628-4068-8df8-ad11e88e9ff3/files/course_2_smartphone.mov",
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
